import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import * as styles from './PCReusableSection.module.css';

export const BlueSectionComponent = ({ data, className }) => {
  return (
    <>
      <section className={styles[className.section]}>
        <div className={'container'}>
          <>
            <div className={styles['universalWrapper']}>
              <div>
                <SectionTitle title={data.heading} />
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

BlueSectionComponent.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.shape({
    section: PropTypes.string.isRequired,
    div: PropTypes.string.isRequired,
  }).isRequired,
  reusable: PropTypes.bool.isRequired,
};
