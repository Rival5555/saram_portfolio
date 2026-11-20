import React, { useState, useEffect, useRef } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { copyToClipboard, isUnfilled, sanitizeMailto } from '../../utils/helpers';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { SocialLinks } from '../common/SocialLinks';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<number | null>(null);
  const emailPending = isUnfilled(personalInfo.contact.email);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    if (emailPending) return;
    const ok = await copyToClipboard(personalInfo.contact.email);
    if (ok) {
      setCopied(true);
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = window.setTimeout(() => {
        setCopied(false);
        copyTimerRef.current = null;
      }, 2400);
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
        <div className="swiss-split-framed">
          {/* Main Left: Invitation Narrative & Working Channels Ledger */}
          <div className="contact-main-col">
            <p className="contact-lead">{personalInfo.contact.invitationText}</p>

            {/* Hairline-Divided Communication Channels Directory */}
            <div className="ledger-top-rule">
              {/* Primary Email Row */}
              <div className="channel-row">
                <div>
                  <div className="channel-label">Direct Electronic Mail</div>
                  <div
                    className={`channel-value ${emailPending ? 'channel-value--pending' : ''}`}
                  >
                    {personalInfo.contact.email}
                  </div>
                </div>

                {emailPending ? (
                  <span className="placeholder-indicator">Email Pending</span>
                ) : (
                  <div className="channel-actions">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="copy-email-btn"
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
                      className="btn-primary send-mail-btn"
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
            <div className="contact-protocol-title">PROTOCOL & AVAILABILITY</div>

            <div className="contact-protocol-stack">
              <div className="contact-protocol-block">
                <div className="contact-protocol-label">Base Location</div>
                <div className="contact-protocol-value">{personalInfo.location}</div>
                <div className="contact-protocol-coords">
                  Coordinates: {personalInfo.coordinates}
                </div>
              </div>

              <div className="contact-protocol-block">
                <div className="contact-protocol-label">Response Cadence</div>
                <p className="contact-protocol-body">
                  Communications are reviewed regularly. Expect thoughtful, direct correspondence
                  within 24 to 48 hours.
                </p>
              </div>

              <div className="contact-protocol-footnote">
                No automated marketing forms or unmonitored inboxes. Direct human dialogue only.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
