import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { copyToClipboard, isUnfilled, sanitizeMailto } from '../../utils/helpers';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { SocialLinks } from '../common/SocialLinks';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailPending = isUnfilled(personalInfo.contact.email);

  const handleCopyEmail = async () => {
    if (emailPending) return;
    const ok = await copyToClipboard(personalInfo.contact.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section id="contact" className="section" aria-label="Contact and Inquiries">
      <Container>
        <SectionHeading
          tag="COMMUNICATION"
          titlePrefix="Good work starts with a"
          titleHighlight="conversation."
          metaRight="DIRECT HUMAN DIALOGUE"
        />

        {/* Architectural 12-Column Editorial Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            paddingTop: 'clamp(2rem, 4vw, 3rem)',
            paddingBottom: 'clamp(2rem, 4vw, 3rem)',
            alignItems: 'flex-start',
          }}
        >
          {/* Main Left: Invitation Narrative & Working Channels Ledger */}
          <div className="contact-main-col">
            <p
              style={{
                fontSize: 'clamp(1.125rem, 1.9vw, 1.35rem)',
                lineHeight: 1.55,
                color: 'var(--text-primary)',
                marginBottom: '2.25rem',
                maxWidth: '48ch',
                letterSpacing: '-0.015em',
              }}
            >
              {personalInfo.contact.invitationText}
            </p>

            {/* Hairline-Divided Communication Channels Directory */}
            <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {/* Primary Email Row */}
              <div
                style={{
                  padding: '1.25rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--text-tertiary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Direct Electronic Mail
                  </div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: emailPending ? 'var(--text-secondary)' : 'var(--text-primary)',
                    }}
                  >
                    {personalInfo.contact.email}
                  </div>
                </div>

                {emailPending ? (
                  <span className="placeholder-indicator" style={{ marginLeft: 0 }}>
                    Email Pending
                  </span>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        padding: '0.45rem 0.85rem',
                        backgroundColor: 'transparent',
                        border: '1px solid var(--border-strong)',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                      }}
                      title="Copy email address"
                    >
                      {copied ? (
                        <Check size={13} color="var(--accent-green)" />
                      ) : (
                        <Copy size={13} />
                      )}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>

                    <a
                      href={sanitizeMailto(personalInfo.contact.email)}
                      className="btn-primary"
                      style={{ padding: '0.45rem 1rem', fontSize: '0.8125rem' }}
                    >
                      <span>Send Mail</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                )}
              </div>

              <SocialLinks />
            </div>
          </div>

          {/* Right Column: Location & Professional Protocol */}
          <div className="contact-sidebar-col">
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-green)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                fontWeight: 600,
              }}
            >
              PROTOCOL & AVAILABILITY
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--text-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.25rem',
                  }}
                >
                  Base Location
                </div>
                <div style={{ fontWeight: 500, fontSize: '0.9375rem', marginBottom: '0.2rem' }}>
                  {personalInfo.location}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Coordinates: {personalInfo.coordinates}
                </div>
              </div>

              <div
                style={{
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--text-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.25rem',
                  }}
                >
                  Response Cadence
                </div>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                  }}
                >
                  Communications are reviewed regularly. Expect thoughtful, direct correspondence
                  within 24 to 48 hours.
                </p>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-tertiary)',
                  lineHeight: 1.6,
                }}
              >
                No automated marketing forms or unmonitored inboxes. Direct human dialogue only.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
