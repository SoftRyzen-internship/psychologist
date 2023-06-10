import PropTypes from 'prop-types';

import s from './ConflictologyView.module.css';
import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

export const ConflictologyView = ({ markdown, img, btnClickHandler }) => {
  return (
    <section className={`trainingSection ${s.conflictologySection}`}>
      <Container>
        <TrainingsSection
          markdown={markdown}
          img={img}
          isTitleCentered={true}
          btnClickHandler={btnClickHandler}
        />
      </Container>
    </section>
  );
};

ConflictologyView.propTypes = {
  markdown: PropTypes.object.isRequired,
  imgPath: PropTypes.string,
  btnClickHandler: PropTypes.func.isRequired,
};
