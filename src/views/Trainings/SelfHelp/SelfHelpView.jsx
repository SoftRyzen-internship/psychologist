import PropTypes from 'prop-types';

import s from './SelfHelpView.module.css';
import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

const SelfHelpView = ({ markdown, img }) => {
  return (
    <section className={`trainingSection ${s.selfHelpSection}`}>
      <Container>
        <TrainingsSection markdown={markdown} img={img} />
      </Container>
    </section>
  );
};

export default SelfHelpView;

SelfHelpView.propTypes = {
  markdown: PropTypes.shape().isRequired,
  imgPath: PropTypes.string,
};
