import PropTypes from 'prop-types';

import s from './ConflictologyView.module.css';
import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';
import classNames from 'classnames';

const ConflictologyView = ({ markdown, imgPath }) => {
  return (
    <section className={classNames(s.conflictologySection, 'trainingSection')}>
      <Container>
        <TrainingsSection markdown={markdown} img={imgPath} />
      </Container>
    </section>
  );
};

export default ConflictologyView;

ConflictologyView.propTypes = {
  markdown: PropTypes.shape().isRequired,
  imgPath: PropTypes.string,
};
