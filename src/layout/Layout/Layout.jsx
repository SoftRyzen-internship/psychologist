import { BackToTopButton } from '@/components';
import { Footer, Header } from '..';
import { FixedSocials } from '@/components';

export const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Header />

      <main className="main">
        {children}

        <BackToTopButton />
        <FixedSocials />
      </main>

      <Footer />
    </div>
  );
};
