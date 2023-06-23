import classNames from 'classnames';
import PropTypes from 'prop-types';

export const SectionTitle = ({
  h1 = false,
  title,
  centered = false,
  className,
}) => {
  return h1 ? (
    <h1
      className={classNames(
        className ? className : 'sectionTitleH1',
        centered && 'centered',
      )}
    >
      {title}
    </h1>
  ) : (
    <h2
      className={classNames(
        className ? className : 'sectionTitleH2',
        centered && 'centered',
      )}
    >
      {title}
    </h2>
  );
};

SectionTitle.propTypes = {
  h1: PropTypes.bool,
  title: PropTypes.string.isRequired,
  centered: PropTypes.bool,
};
