import { BackToTopButton } from '@/components';
import { Footer, Header } from '..';

export const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Header />
      <main className="main">
        {children}
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
};
