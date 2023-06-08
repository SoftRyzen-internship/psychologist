import PropTypes from 'prop-types';

import s from './TimeManagementView.module.css';
import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

const TimeManagementView = ({ markdown, imgPath }) => {
  return (
    <section className={`trainingSection ${s.timeManagement}`}>
      <Container>
        <TrainingsSection markdown={markdown} img={imgPath} />
      </Container>
    </section>
  );
};

export default TimeManagementView;

TimeManagementView.propTypes = {
  markdown: PropTypes.shape().isRequired,
  imgPath: PropTypes.string,
};
