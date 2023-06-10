import PropTypes from 'prop-types';

import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

export const StressResistanceView = ({ markdown, img, btnClickHandler }) => {
  return (
    <section className="trainingSection">
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

StressResistanceView.propTypes = {
  markdown: PropTypes.object.isRequired,
  imgPath: PropTypes.string,
  btnClickHandler: PropTypes.func.isRequired,
};
