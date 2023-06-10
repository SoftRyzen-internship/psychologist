import PropTypes from 'prop-types';
import s from './OffsetImageBorder.module.css';

function OffsetImageBorder({ children, reverse = false }) {
  const { width, height } = children.props;
  return (
    <div
      className={reverse ? s.offsetImageRight : s.offsetImageLeft}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {children}
    </div>
  );
}

OffsetImageBorder.propTypes = {
  reverse: PropTypes.bool
};

export default OffsetImageBorder;
