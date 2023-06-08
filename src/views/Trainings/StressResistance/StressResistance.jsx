import PropTypes from 'prop-types';

// import s from './StressResistance.module.css';
import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

const StressResistanceView = ({ markdown, imgPath }) => {
  return (
    <section className="trainingSection">
      <Container>
        <TrainingsSection markdown={markdown} img={imgPath} />
      </Container>
    </section>
  );
};

export default StressResistanceView;

StressResistanceView.propTypes = {
  markdown: PropTypes.shape().isRequired,
  imgPath: PropTypes.string,
};
