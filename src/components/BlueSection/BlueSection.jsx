import ReactMarkdown from 'react-markdown';
import * as styles from './BlueSection.module.css';

export const BlueSectionComponent = ({ data, className }) => {
  return (
    <>
      <div className={styles[className.section]}>
        <div className={styles[className.div]}>
          <ReactMarkdown>{data.benefits}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};
