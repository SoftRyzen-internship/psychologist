import Image from 'next/image';
import PropTypes from 'prop-types';
import { OffsetImageBorder, ReusableSection } from '@/components';
import s from './GetPersonalConsultView.module.css';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const GetPersonalConsultView = ({ data }) => {
  const [isDesktopShow, setDesktopShow] = useState(false);
  const [isTabletShow, setTabletShow] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    isDesktop ? setDesktopShow(true) : setDesktopShow(false);
    isTablet ? setTabletShow(true) : setTabletShow(false);
  }, [isDesktop, isTablet]);

  return (
    <ReusableSection
      data={data}
      mdClassName={s.mdContent}
      sectionClassName={s.section}
      flexBoxClassName={s.flexBox}
    >
      <OffsetImageBorder className={s.imageWrapper}>
        {!isDesktopShow && !isTabletShow && (
          <Image
            src="/images/consultations-personalcons-mobile.jpg"
            width={308}
            height={386}
            alt="Психолог на консультації"
          />
        )}
        {isTabletShow && !isDesktopShow && (
          <Image
            src="/images/consultations-personalcons-tablet.jpg"
            width={688}
            height={859}
            alt="Психолог на консультації"
          />
        )}
        {isDesktopShow && (
          <Image
            src="/images/consultations-personalcons.jpg"
            width={472}
            height={870}
            alt="Психолог на консультації"
          />
        )}
      </OffsetImageBorder>
    </ReusableSection>
  );
};

GetPersonalConsultView.propTypes = {
  data: PropTypes.object.isRequired,
};
