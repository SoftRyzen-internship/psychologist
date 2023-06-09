import PropTypes from 'prop-types';

import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

const StrongSidesView = ({ markdown, img }) => {
  return (
    <section className="trainingSection">
      <Container>
        <TrainingsSection markdown={markdown} img={img} />
      </Container>
    </section>
  );
};

export default StrongSidesView;

StrongSidesView.propTypes = {
  markdown: PropTypes.shape().isRequired,
  imgPath: PropTypes.string,
};
