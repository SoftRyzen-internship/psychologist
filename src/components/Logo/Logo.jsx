import Image from 'next/image';
import st from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={st.logo}>
      <Image src="/icons/logoHeader.svg" alt="Logo" width="81" height="54" />
    </div>
  );
};
