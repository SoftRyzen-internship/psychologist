import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PropTypes from 'prop-types';
import s from './NewsText.module.css';

export const NewsText = ({ newsTextProp, section = false }) => {
  return (
    <div className={section ? s.newsTextSection : s.newsText}>
      <ReactMarkdown linkTarget="_blank">{newsTextProp}</ReactMarkdown>
    </div>
  );
};

NewsText.propTypes = {
  newsTextProp: PropTypes.string.isRequired,
  section: PropTypes.bool,
};
