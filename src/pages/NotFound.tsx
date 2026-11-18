import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  const handleReturnHome = () => {
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <PageLayout>
      <section
        className="section"
        aria-label="Page Not Found"
        style={{
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'calc(var(--nav-height) + 4rem)',
        }}
      >
        <Container>
          <div className="section-tag">ERROR // 404</div>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
            }}
          >
            Coordinate <span className="font-editorial" style={{ color: 'var(--accent-green)' }}>not found.</span>
          </h1>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              maxWidth: '42ch',
              marginBottom: '2rem',
            }}
          >
            The requested path does not exist within this portfolio directory. Return to the primary
            index to explore verified work and background.
          </p>
          <Button variant="primary" href="/" onClick={handleReturnHome}>
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </Button>
        </Container>
      </section>
    </PageLayout>
  );
};
