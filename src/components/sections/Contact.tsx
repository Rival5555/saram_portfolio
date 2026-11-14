import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { copyToClipboard } from '../../utils/helpers';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { SocialLinks } from '../common/SocialLinks';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
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
        />

        {/* Editorial Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'flex-start',
          }}
        >
          {/* Main Left: Invitation Narrative & Working Channels */}
          <div className="contact-main-col">
            <p
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                maxWidth: '48ch',
              }}
            >
              {personalInfo.contact.invitationText}
            </p>

            {/* Direct Action Cards */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              {/* Primary Email Channel */}
              <div
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
                className="channel-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      backgroundColor: 'var(--accent-green-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--accent-green-border)',
                    }}
                  >
                    <Mail size={20} color="var(--accent-green)" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: 'var(--text-tertiary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      Direct Electronic Mail
                    </div>
                    <div
                      style={{
                        fontSize: '1.0625rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {personalInfo.contact.email}
                    </div>
                  </div>
                </div>

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
                      backgroundColor: 'var(--bg-hover)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                    }}
                    title="Copy email address"
                  >
                    {copied ? <Check size={13} color="var(--accent-green)" /> : <Copy size={13} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="btn-primary"
                    style={{ padding: '0.45rem 1rem', fontSize: '0.8125rem' }}
                  >
                    <span>Send Mail</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <SocialLinks />
            </div>
          </div>

          {/* Right Column: Location & Professional Protocol */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
            className="contact-sidebar-col"
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-green)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              Protocol & Availability
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    marginBottom: '0.25rem',
                  }}
                >
                  <MapPin size={14} color="var(--accent-green)" />
                  <span style={{ fontWeight: 500, fontSize: '0.9375rem' }}>
                    {personalInfo.location}
                  </span>
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

              <div>
                <div style={{ fontWeight: 500, fontSize: '0.9375rem', marginBottom: '0.25rem' }}>
                  Response Cadence
                </div>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                  }}
                >
                  Communications are reviewed regularly. Expect thoughtful, direct correspondence
                  within 24 to 48 hours.
                </p>
              </div>

              <div
                style={{
                  padding: '0.875rem',
                  backgroundColor: 'var(--bg-hover)',
                  border: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
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
