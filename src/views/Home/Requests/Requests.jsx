import { ReusableSection } from '@/components';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import s from './Requests.module.css';

export const Requests = ({ requests }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const [desktop, setDesktop] = useState(false);
  const [tablet, setTablet] = useState(false);
  useEffect(() => {
    isDesktop ? setDesktop(true) : setDesktop(false);
    isTablet ? setTablet(true) : setTablet(false);
  }, [isDesktop, isTablet]);
  return (
    <ReusableSection
      data={requests}
      mdClassName={s.mdContent}
      sectionClassName={s.section}
      flexBoxClassName={s.flexBox}
    >
      <div className={s.imgWrapper}>
        {!tablet && !desktop && (
          <Image
            src="/images/home-requests-mob.jpg"
            width={308}
            height={390}
            alt="Фото запити з якими працюю"
          />
        )}
        {tablet && !desktop && (
          <Image
            src="/images/home-requests-tab.jpg"
            width={324}
            height={596}
            alt="Фото запити з якими працюю"
          />
        )}
        {tablet && desktop && (
          <Image
            src="/images/home-requests-desk.jpg"
            width={576}
            height={572}
            alt="Фото запити з якими працюю"
          />
        )}
      </div>
    </ReusableSection>
  );
};
