import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import * as styles from './ConsultationFAQ.module.css';

export const ConsultationFAQComponent = ({ data, className }) => {
  return (
    <>
      <section className={`section ${styles[className.section]}`}>
        <div className="container">
          <>
            <div className={styles['universalWrapper']}>
              <div>
                <SectionTitle title={data.heading} className={styles.title} />
              </div>

              <div>
                <ReactMarkdown>{data.description}</ReactMarkdown>
              </div>
            </div>
          </>
        </div>
      </section>
    </>
  );
};

ConsultationFAQComponent.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.shape({
    section: PropTypes.string.isRequired,
    div: PropTypes.string.isRequired,
  }).isRequired,
};
