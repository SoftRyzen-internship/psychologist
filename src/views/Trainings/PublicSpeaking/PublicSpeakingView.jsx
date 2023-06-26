import PropTypes from 'prop-types';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import { Container, TrainingsSection } from '@/components';

import s from './PublicSpeakingView.module.css';

export const PublicSpeakingView = ({ markdown, img, isDesktop }) => {
  const isTabletSize = useMediaQuery({ query: '(min-width: 768px)' });

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setIsTablet(isTabletSize);
  }, [isTabletSize]);

  return (
    <>
      {markdown && (
        <section className={`trainingSection ${s.heroTrainingSection}`}>
          <Container>
            <TrainingsSection
              markdown={markdown}
              specialTitle={
                isDesktop &&
                '"Ораторське мистецтво" (групові\u00A0та індивідуальні заняття)'
              }
              isHeroSection={true}
            />

            {isTablet && (
              <Image
                className={s.heroImg}
                src={isDesktop ? img.PATH.DESKTOP : img.PATH.MOBILE}
                priority
                quality={100}
                width={
                  isDesktop ? img.SIZES.WIDTH.DESKTOP : img.SIZES.WIDTH.TABLET
                }
                height={
                  isDesktop ? img.SIZES.HEIGHT.DESKTOP : img.SIZES.HEIGHT.TABLET
                }
                alt={img.ALTERNATIVETEXT}
              />
            )}
          </Container>
        </section>
      )}
    </>
  );
};

PublicSpeakingView.propTypes = {
  markdown: PropTypes.object.isRequired,
  imgPath: PropTypes.string,
  isDesktop: PropTypes.bool.isRequired,
};
