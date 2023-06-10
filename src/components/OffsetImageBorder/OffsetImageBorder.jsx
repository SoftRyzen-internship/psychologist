import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './OffsetImageBorder.module.css';

function OffsetImageBorder({ children, reverse = false, className }) {
  return (
    <div
      className={classNames(
        reverse ? s.offsetImageRight : s.offsetImageLeft,
        className,
      )}
    >
      {children}
    </div>
  );
}

OffsetImageBorder.propTypes = {
  reverse: PropTypes.bool
};

export default OffsetImageBorder;
