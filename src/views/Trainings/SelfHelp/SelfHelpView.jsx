import PropTypes from 'prop-types';

import s from './SelfHelpView.module.css';
import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

export const SelfHelpView = ({ markdown, img, btnClickHandler }) => {
  return (
    <section className={`trainingSection ${s.selfHelpSection}`}>
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

SelfHelpView.propTypes = {
  markdown: PropTypes.object.isRequired,
  imgPath: PropTypes.string,
  btnClickHandler: PropTypes.func.isRequired,
};
