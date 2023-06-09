import PropTypes from 'prop-types';

import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';
import s from './PublicSpeakingView.module.css';
import Image from 'next/image';

const PublicSpeakingView = ({ markdown, imgPath }) => {
  return (
    <div className={s.publicSpeakingWrapper}>
      <section className={`trainingSection ${s.heroTrainingSection}`}>
        <Container>
          <TrainingsSection
            markdown={markdown}
            isHeroSection={true}
            img={imgPath}
          />{' '}
          <Image
            className={s.heroImg}
            src={imgPath}
            width={499}
            height={676}
            // width={1007}
            // height={950}
            alt="Психолог Юлія Сулаєва"
          />
        </Container>
      </section>
    </div>
  );
};

export default PublicSpeakingView;

PublicSpeakingView.propTypes = {
  markdown: PropTypes.shape().isRequired,
  imgPath: PropTypes.string,
};
