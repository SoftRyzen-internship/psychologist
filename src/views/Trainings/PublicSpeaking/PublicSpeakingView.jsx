import PropTypes from 'prop-types';

import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

const PublicSpeakingView = ({ markdown, imgPath }) => {
  return (
    <section className="trainingSection">
      <Container>
        <TrainingsSection
          markdown={markdown}
          isHeroSection={true}
          img={imgPath}
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
