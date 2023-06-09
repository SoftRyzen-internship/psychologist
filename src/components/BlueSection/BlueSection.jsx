import ReactMarkdown from 'react-markdown';
import * as styles from './BlueSection.module.css';

export const BlueSectionComponent = ({ data, className }) => {
  return (
    <>
      <section className={styles[className.section]}>
        <div className={styles[className.div]}>
          {/* <img
            className={styles['hello']}
            src="/icons/PCMainVector.svg"
            alt="w2"
            width={200}
            height={200}
          /> */}
          <ReactMarkdown>{data.benefits}</ReactMarkdown>
        </div>
      </section>
    </>
  );
};
