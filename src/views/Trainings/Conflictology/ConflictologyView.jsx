import PropTypes from 'prop-types';

import s from './ConflictologyView.module.css';
import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';

const ConflictologyView = ({ markdown, img }) => {
  return (
    <section className={`trainingSection ${s.conflictologySection}`}>
      <Container>
        <TrainingsSection
          markdown={markdown}
          img={img}
          isTitleCentered={true}
        />
      </Container>
    </section>
  );
};

export default ConflictologyView;

ConflictologyView.propTypes = {
  markdown: PropTypes.shape().isRequired,
  imgPath: PropTypes.string,
};
