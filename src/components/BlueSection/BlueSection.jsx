import ReactMarkdown from 'react-markdown';
import * as styles from './BlueSection.module.css';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export const BlueSectionComponent = ({ data, className, reusable }) => {
  return (
    <>
      <section
        className={
          reusable
            ? styles[className.section] + ' ' + styles[className.section]
            : styles[className.section]
        }
      >
        <div className={reusable ? 'container' : styles[className.div]}>
          {/* <img
            className={styles['hello']}
            src="/icons/PCMainVector.svg"
            alt="w2"
            width={200}
            height={200}
          /> */}
          {!reusable && <ReactMarkdown>{data.benefits}</ReactMarkdown>}
          {reusable && (
            <>
              <div className={styles['universalWrapper']}>
                <div>
                  <SectionTitle title={data.heading} />
                </div>
                {/* <ReactMarkdown>{data.heading}</ReactMarkdown> */}
                <div>
                  <ReactMarkdown>{data.description}</ReactMarkdown>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};
