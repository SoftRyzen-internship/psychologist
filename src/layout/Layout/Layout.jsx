import { Footer, Header } from '..';
import { FixedSocials } from '@/components';

export const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Header />

      {children}

      <Footer />
      <FixedSocials />
    </div>
  );
};
