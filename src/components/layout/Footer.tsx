import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { Container } from '../common/Container';
import { BackToTop } from '../common/BackToTop';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" aria-label="Site Footer">
      <Container>
        <div className="site-footer-inner">
          {/* Identity & Origin */}
          <div>
            <div className="footer-identity-row">
              <span className="footer-monogram">H × I</span>
              <span className="footer-name">{personalInfo.fullName}</span>
            </div>

            <div className="footer-tagline">
              Artificial Intelligence × Public Service × Communication — {personalInfo.location}
            </div>
          </div>

          {/* Dynamic Year & Copyright */}
          <div className="footer-copyright">
            © {CURRENT_YEAR} {personalInfo.fullName} · All rights reserved.
            <div className="footer-colophon">
              Designed with Swiss Minimalist Editorial Principles
            </div>
          </div>

          <BackToTop />
        </div>
      </Container>
    </footer>
  );
};
