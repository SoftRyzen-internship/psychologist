import s from './OffsetImageBorder.module.css';

function OffsetImageBorder({ children, reverse = null }) {
  const { width, height } = children.props;
  return (
    <div
      className={!reverse ? s.offsetImageLeft : s.offsetImageRight}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {children}
    </div>
  );
}

export default OffsetImageBorder;
