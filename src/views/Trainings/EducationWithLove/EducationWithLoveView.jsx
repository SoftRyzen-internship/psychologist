import PropTypes from 'prop-types';

import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

const EducationWithLoveView = ({ markdown, imgPath }) => {
  return (
    <section className="trainingSection">
      <Container>
        <TrainingsSection markdown={markdown} img={imgPath} />
      </Container>
    </section>
  );
};

export default EducationWithLoveView;

EducationWithLoveView.propTypes = {
  markdown: PropTypes.shape().isRequired,
  imgPath: PropTypes.string,
};
