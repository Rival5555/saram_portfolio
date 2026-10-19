import React, { useState } from 'react';
import { Sliders, X, FileCode } from 'lucide-react';

export const ConfigurationGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const placeholderList = [
    { label: "[FULL NAME]", description: "Your complete official name" },
    { label: "[PROFESSIONAL TITLE]", description: "e.g., AI Student & Public Servant" },
    { label: "[UNIVERSITY NAME]", description: "Your degree-awarding institution" },
    { label: "[CURRENT SEMESTER / GRADUATION YEAR]", description: "e.g., 5th Semester / Expected 2027" },
    { label: "[MOTORWAY POLICE JOB TITLE]", description: "Your verified NHMP designation" },
    { label: "[CALL CENTER COMPANY]", description: "Organization name for 2-year tenure" },
    { label: "[AI PROJECTS]", description: "Coursework or independent intelligence repos" },
    { label: "[TECHNICAL SKILLS]", description: "Verified Python, C++, ML libraries" },
    { label: "[EMAIL]", description: "Your professional contact address" },
    { label: "[LINKEDIN URL]", description: "Your active profile link" },
    { label: "[GITHUB URL]", description: "Your development profile link" },
  ];

  return (
    <>
      {/* Floating trigger button in corner */}
      <div
        style={{
          position: 'fixed',
          bottom: '1.25rem',
          right: '1.25rem',
          zIndex: 40,
        }}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            padding: '0.625rem 1rem',
            backgroundColor: '#171916',
            color: '#F5F3ED',
            border: '1px solid #171916',
            boxShadow: '0 4px 16px rgba(23, 25, 22, 0.15)',
            cursor: 'pointer',
            transition: 'all var(--transition-smooth)',
          }}
          className="guide-trigger-btn"
          aria-label="Open Portfolio Configuration Guide"
        >
          <Sliders size={14} color="#F5F3ED" />
          <span>Profile Setup Guide</span>
        </button>
      </div>

      {/* Guide Modal / Drawer */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(23, 25, 22, 0.55)',
            backdropFilter: 'blur(4px)',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-ivory)',
              border: '1px solid var(--border-strong)',
              maxWidth: '620px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '2rem',
              boxShadow: '0 20px 40px rgba(23, 25, 22, 0.2)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
            className="fade-in-up"
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileCode size={20} color="var(--accent-green)" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Owner Personalization Guide
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  padding: '0.25rem',
                }}
                aria-label="Close guide"
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick Instruction */}
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              All portfolio content is organized in a single configuration file:
              <br />
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  backgroundColor: 'var(--bg-hover)',
                  padding: '0.2rem 0.5rem',
                  display: 'inline-block',
                  marginTop: '0.35rem',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                src/data/portfolioData.ts
              </code>
            </p>

            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-green)',
                marginBottom: '0.75rem',
              }}
            >
              Editable Placeholders Checklist
            </h4>

            {/* Checklist */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              {placeholderList.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0.75rem',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.8125rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {item.label}
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                    {item.description}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-hover)',
                border: '1px solid var(--border-subtle)',
                padding: '1rem',
                fontSize: '0.8125rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.55,
                marginBottom: '1.5rem',
              }}
            >
              <strong style={{ color: 'var(--text-primary)' }}>Integrity Note:</strong> As per Swiss design principles, no fake awards or proficiency percentages are present. When you complete real AI projects or obtain verified credentials, simply add them to <code style={{ fontFamily: 'var(--font-mono)' }}>portfolioData.ts</code>.
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{ width: '100%', fontSize: '0.875rem' }}
            >
              Close & View Portfolio
            </button>
          </div>
        </div>
      )}

      <style>{`
        .guide-trigger-btn:hover {
          background-color: var(--accent-green) !important;
          border-color: var(--accent-green) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
};
