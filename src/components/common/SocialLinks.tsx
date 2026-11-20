import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { socialLinksData } from '../../data/socialLinks';
import { isUnfilled, sanitizeUrl } from '../../utils/helpers';

export const SocialLinks: React.FC = () => {
  return (
    <div>
      {socialLinksData.map((item) => {
        const pending = isUnfilled(item.url);

        if (pending) {
          return (
            <div key={item.id} className="channel-row">
              <div>
                <div className="channel-label">{item.category}</div>
                <div className="channel-value channel-value--pending">{item.label}</div>
              </div>
              <span className="placeholder-indicator">URL Pending</span>
            </div>
          );
        }

        return (
          <a
            key={item.id}
            href={sanitizeUrl(item.url)}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-row channel-card"
          >
            <div>
              <div className="channel-label">{item.category}</div>
              <div className="channel-value">{item.label}</div>
            </div>
            <span className="editorial-link project-link-sm">
              <span>Visit Profile</span>
              <ArrowUpRight size={14} className="icon-arrow" />
            </span>
          </a>
        );
      })}
    </div>
  );
};
