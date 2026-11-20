import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  const handleReturnHome = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <PageLayout>
      <section className="section not-found-section" aria-label="Page Not Found">
        <Container>
          <div className="section-tag">ERROR // 404</div>
          <h1 className="not-found-heading">
            Coordinate <span className="font-editorial section-title-accent">not found.</span>
          </h1>
          <p className="not-found-copy">
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
