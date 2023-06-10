import PropTypes from 'prop-types';

import s from './TimeManagementView.module.css';
import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

export const TimeManagementView = ({ markdown, img, btnClickHandler }) => {
  return (
    <section className={`trainingSection ${s.timeManagement}`}>
      <Container>
        <TrainingsSection
          markdown={markdown}
          img={img}
          btnClickHandler={btnClickHandler}
        />
      </Container>
    </section>
  );
};

TimeManagementView.propTypes = {
  markdown: PropTypes.object.isRequired,
  imgPath: PropTypes.string,
  btnClickHandler: PropTypes.func.isRequired,
};
