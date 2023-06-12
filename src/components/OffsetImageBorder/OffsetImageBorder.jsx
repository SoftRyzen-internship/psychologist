import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './OffsetImageBorder.module.css';

export function OffsetImageBorder({ children, reverse = false, className }) {
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
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
