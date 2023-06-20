import PropTypes from 'prop-types';
import Image from 'next/image';
import { ReusableSection, OffsetImageBorder } from '@/components';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import * as s from './Requests.module.css';

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
          <OffsetImageBorder reverse className={s.aspRatio}>
            <Image
              src="/images/home_requests_mob.jpg"
              width={308}
              height={390}
              alt="Фото запити з якими працюю"
              quality={100}
            />
          </OffsetImageBorder>
        )}
        {tablet && !desktop && (
          <OffsetImageBorder reverse className={s.aspRatio}>
            <Image
              src="/images/home_requests_tab.jpg"
              width={324}
              height={596}
              alt="Фото запити з якими працюю"
              quality={100}
            />
          </OffsetImageBorder>
        )}
        {tablet && desktop && (
          <OffsetImageBorder reverse className={s.aspRatio}>
            <Image
              src="/images/home_requests_desk.jpg"
              width={576}
              height={572}
              alt="Фото запити з якими працюю"
              quality={100}
            />
          </OffsetImageBorder>
        )}
      </div>
    </ReusableSection>
  );
};

Requests.propTypes = {
  requests: PropTypes.object.isRequired,
};
