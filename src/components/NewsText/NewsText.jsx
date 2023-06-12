import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PropTypes from 'prop-types';
import s from './NewsText.module.css';
const NewsText = ({ newsTextProp }) => {
  return (
    <span className={s.newsText}>
      <ReactMarkdown>{newsTextProp}</ReactMarkdown>
    </span>
  );
};

NewsText.propTypes = {
  newsTextProp: PropTypes.string.isRequired,
};

export default NewsText;