import PropTypes from 'prop-types';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import { Container, TrainingsSection } from '@/components';
import { setSpecialTitle } from '@/utils/setSpecialTitle';

import s from './PublicSpeakingView.module.css';

export const PublicSpeakingView = ({
  markdown,
  img,
  btnClickHandler,
  isDesktop,
}) => {
  const isTabletSize = useMediaQuery({ query: '(min-width: 768px)' });

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setIsTablet(isTabletSize);
  }, [isTabletSize]);

  return (
    <section className={`trainingSection ${s.heroTrainingSection}`}>
      <Container>
        <TrainingsSection
          markdown={isDesktop ? setSpecialTitle(markdown) : markdown}
          isHeroSection={true}
          btnClickHandler={btnClickHandler}
        />
        {isTablet && (
          <Image
            className={s.heroImg}
            src={isDesktop ? img.PATH.DESKTOP : img.PATH.MOBILE}
            priority
            width={isDesktop ? img.SIZES.WIDTH.DESKTOP : img.SIZES.WIDTH.TABLET}
            height={
              isDesktop ? img.SIZES.HEIGHT.DESKTOP : img.SIZES.HEIGHT.TABLET
            }
            alt={img.ALTERNATIVETEXT}
          />
        )}
      </Container>
    </section>
  );
};

PublicSpeakingView.propTypes = {
  markdown: PropTypes.object.isRequired,
  imgPath: PropTypes.string,
  btnClickHandler: PropTypes.func,
  isDesktop: PropTypes.bool.isRequired,
};
