import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PropTypes from 'prop-types';
import s from './NewsText.module.css';
export const NewsText = ({ newsTextProp, section = false }) => {
  return (
    <span className={section ? s.newsTextSection : s.newsText}>
      <ReactMarkdown>{newsTextProp}</ReactMarkdown>
    </span>
  );
};

NewsText.propTypes = {
  newsTextProp: PropTypes.string.isRequired,
  section: PropTypes.bool
};