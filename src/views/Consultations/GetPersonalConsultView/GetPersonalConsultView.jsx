import Image from 'next/image';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { OffsetImageBorder, ReusableSection } from '@/components';
import { convertImage, toBase64 } from '@/utils/blurDataURL';
import s from './GetPersonalConsultView.module.css';

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
    <>
      {data && (
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
                quality={100}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  convertImage(220, 392),
                )}`}
              />
            )}

            {isTabletShow && !isDesktopShow && (
              <Image
                src="/images/consultations-personalcons-tablet.jpg"
                width={688}
                height={859}
                alt="Психолог на консультації"
                quality={100}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  convertImage(220, 392),
                )}`}
              />
            )}

            {isDesktopShow && (
              <Image
                src="/images/consultations-personalcons.jpg"
                width={472}
                height={870}
                alt="Психолог на консультації"
                quality={100}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  convertImage(220, 392),
                )}`}
              />
            )}
          </OffsetImageBorder>
        </ReusableSection>
      )}
    </>
  );
};

GetPersonalConsultView.propTypes = {
  data: PropTypes.object.isRequired,
};
