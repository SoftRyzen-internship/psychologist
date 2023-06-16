// import { Footer, Header } from '..';
import { FixedSocials } from '@/components';
import { Header } from '..';

export const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Header />

      {children}

      {/* <Footer /> */}
      <FixedSocials />
    </div>
  );
};
