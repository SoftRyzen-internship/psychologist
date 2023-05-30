import { Footer, Header } from '..';

export const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Header />

      {children}

      <Footer />
    </div>
  );
};
