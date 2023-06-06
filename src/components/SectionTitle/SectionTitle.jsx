import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './SectionTitle.module.css';

export const SectionTitle = ({ h1 = false, title, centered = false }) => {
  return h1 ? (
    <h1 className={classNames(s.sectionTitle, centered && s.centered)}>
      {title}
    </h1>
  ) : (
    <h2 className={classNames(s.sectionTitle, centered && s.centered)}>
      {title}
    </h2>
  );
};

SectionTitle.propTypes = {
  h1: PropTypes.bool,
  title: PropTypes.string.isRequired,
  centered: PropTypes.bool,
};
