import PropTypes from 'prop-types';

import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

export const EducationWithLoveView = ({ markdown, img, btnClickHandler }) => {
  return (
    <section className="trainingSection">
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

EducationWithLoveView.propTypes = {
  markdown: PropTypes.object.isRequired,
  imgPath: PropTypes.string,
  btnClickHandler: PropTypes.func.isRequired,
};
