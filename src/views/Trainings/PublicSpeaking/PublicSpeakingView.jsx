import PropTypes from 'prop-types';

import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';
import s from './PublicSpeakingView.module.css';
import Image from 'next/image';

const PublicSpeakingView = ({ markdown, img }) => {
  const heroImgWidth = parseInt(img.SIZES.WIDTH.TABLET, 10);
  const heroImgHeight = parseInt(img.SIZES.HEIGHT.TABLET, 10);

  return (
    <section
      className={`trainingSection dynamicSectionWrapper ${s.heroTrainingSection}`}
    >
      <Container>
        <TrainingsSection markdown={markdown} isHeroSection={true} />{' '}
        <Image
          className={s.heroImg}
          src={img.PATH}
          width={heroImgWidth}
          height={heroImgHeight}
          alt={img.ALTERNATIVETEXT}
        />
      </Container>
    </section>
  );
};

export default PublicSpeakingView;

PublicSpeakingView.propTypes = {
  markdown: PropTypes.shape().isRequired,
  imgPath: PropTypes.string,
};
