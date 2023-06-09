import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import s from './NewsText.module.css';
const NewsText = ({ newsTextProp }) => {
  return (
    <span className={s.newsText}>
      <ReactMarkdown>{newsTextProp}</ReactMarkdown>
    </span>
  );
};

export default NewsText;
