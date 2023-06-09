import PropTypes from 'prop-types';

import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

const EducationWithLoveView = ({ markdown, img }) => {
  return (
    <section className="trainingSection">
      <Container>
        <TrainingsSection markdown={markdown} img={img} />
      </Container>
    </section>
  );
};

export default EducationWithLoveView;

EducationWithLoveView.propTypes = {
  markdown: PropTypes.shape().isRequired,
  imgPath: PropTypes.string,
};
