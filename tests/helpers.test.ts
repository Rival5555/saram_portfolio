import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  isUnfilled,
  sanitizeUrl,
  sanitizeMailto,
  safeGetStorage,
  safeSetStorage,
  getInitialTheme,
} from '../src/utils/helpers.ts';
import { navigationItems } from '../src/data/navigation.ts';
import { personalInfo } from '../src/data/personalInfo.ts';
import { experienceData } from '../src/data/experience.ts';
import { educationData } from '../src/data/education.ts';
import { skillsData } from '../src/data/skills.ts';
import { projectsData } from '../src/data/projects.ts';

describe('Security & URL Sanitization Helpers', () => {
  it('identifies empty and bracketed placeholder strings via isUnfilled', () => {
    assert.equal(isUnfilled(undefined), true);
    assert.equal(isUnfilled(''), true);
    assert.equal(isUnfilled('[EMAIL]@example.com'), true);
    assert.equal(isUnfilled('https://linkedin.com/in/[LINKEDIN-USERNAME]'), true);
    assert.equal(isUnfilled('https://github.com/Rival5555'), false);
    assert.equal(isUnfilled('Saram Zafar'), false);
  });

  it('allows safe URLs and anchors in sanitizeUrl', () => {
    assert.equal(sanitizeUrl('#projects'), '#projects');
    assert.equal(sanitizeUrl('/documents/resume.pdf'), '/documents/resume.pdf');
    assert.equal(sanitizeUrl('https://github.com/Rival5555'), 'https://github.com/Rival5555');
    assert.equal(sanitizeUrl('http://localhost:4173/about'), 'http://localhost:4173/about');
    assert.equal(sanitizeUrl('mailto:saram@example.com'), 'mailto:saram@example.com');
  });

  it('blocks XSS schemes, protocol-relative open redirects, and placeholders in sanitizeUrl', () => {
    assert.equal(sanitizeUrl('javascript:alert(1)'), '#');
    assert.equal(sanitizeUrl('  JaVaScRiPt:alert(document.domain)'), '#');
    assert.equal(sanitizeUrl('data:text/html,<script>alert(1)</script>'), '#');
    assert.equal(sanitizeUrl('vbscript:msgbox(1)'), '#');
    assert.equal(sanitizeUrl('//evil.example.com/phish'), '#');
    assert.equal(sanitizeUrl('/\\evil.example.com/phish'), '#');
    assert.equal(sanitizeUrl('https://github.com/[USER]/[REPO]'), '#');
    assert.equal(sanitizeUrl(''), '#');
    assert.equal(sanitizeUrl(undefined), '#');
  });

  it('validates email format and blocks mailto injection in sanitizeMailto', () => {
    assert.equal(sanitizeMailto('saram@example.com'), 'mailto:saram@example.com');
    assert.equal(sanitizeMailto('  saram.zafar+work@domain.pk  '), 'mailto:saram.zafar+work@domain.pk');
    assert.equal(sanitizeMailto('[EMAIL]@example.com'), '#contact');
    assert.equal(sanitizeMailto('saram@example.com?subject=hack&bcc=evil@test.com'), '#contact');
    assert.equal(sanitizeMailto('javascript:alert(1)'), '#contact');
    assert.equal(sanitizeMailto('not-an-email'), '#contact');
    assert.equal(sanitizeMailto(undefined), '#contact');
  });
});

describe('Storage & Theme Helpers Resilience', () => {
  it('handles missing window gracefully in Node / SSR environments', () => {
    assert.equal(safeGetStorage('portfolio-theme'), null);
    assert.doesNotThrow(() => safeSetStorage('portfolio-theme', 'dark'));
    assert.equal(getInitialTheme('portfolio-theme'), 'light');
  });

  it('handles localStorage SecurityError without throwing', () => {
    const originalWindow = globalThis.window;
    Object.defineProperty(globalThis, 'window', {
      configurable: true,
      value: {
        get localStorage() {
          throw new Error('SecurityError: storage blocked');
        },
        matchMedia: () => ({ matches: true }),
      },
    });

    try {
      assert.equal(safeGetStorage('portfolio-theme'), null);
      assert.doesNotThrow(() => safeSetStorage('portfolio-theme', 'dark'));
      assert.equal(getInitialTheme('portfolio-theme'), 'dark');
    } finally {
      Object.defineProperty(globalThis, 'window', {
        configurable: true,
        value: originalWindow,
      });
    }
  });
});

describe('Portfolio Data & Deployment Configuration Integrity', () => {
  it('contains valid navigation, profile, experience, education, skills, and project records', () => {
    assert.equal(navigationItems.length, 6);
    assert.equal(personalInfo.fullName, 'Saram Zafar');
    assert.equal(experienceData.length, 3);
    assert.equal(educationData.degree, 'BS Artificial Intelligence');
    assert.equal(skillsData.length, 4);
    assert.equal(projectsData.length, 3);
  });

  it('ships valid vercel.json with SPA rewrites, security headers, and immutable asset caching', () => {
    const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
    assert.ok(Array.isArray(vercelConfig.rewrites) && vercelConfig.rewrites.length >= 1);
    assert.equal(vercelConfig.rewrites[0].destination, '/index.html');

    const rootHeaders = vercelConfig.headers.find((h: { source: string }) => h.source === '/(.*)');
    assert.ok(rootHeaders, 'Root security headers block must exist');
    const headerKeys = rootHeaders.headers.map((h: { key: string }) => h.key);
    assert.ok(headerKeys.includes('Content-Security-Policy'));
    assert.ok(headerKeys.includes('Strict-Transport-Security'));
    assert.ok(headerKeys.includes('X-Frame-Options'));
    assert.ok(headerKeys.includes('X-Content-Type-Options'));

    const assetHeaders = vercelConfig.headers.find(
      (h: { source: string }) => h.source === '/assets/(.*)'
    );
    assert.ok(assetHeaders, 'Immutable asset Cache-Control block must exist');
  });

  it('includes valid public deployment and SEO artifacts', () => {
    assert.ok(fs.existsSync('public/_headers'));
    assert.ok(fs.existsSync('public/_redirects'));
    assert.ok(fs.existsSync('public/robots.txt'));
    assert.ok(fs.existsSync('public/sitemap.xml'));
    assert.ok(fs.existsSync('public/llms.txt'));
    assert.ok(fs.existsSync('public/site.webmanifest'));

    // Verify public/images/og-preview.png starts with valid PNG magic bytes
    const ogPng = fs.readFileSync('public/images/og-preview.png');
    assert.deepEqual(
      Array.from(ogPng.subarray(0, 8)),
      [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]
    );
  });
});
