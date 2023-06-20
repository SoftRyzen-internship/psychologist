import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
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

BlueSectionComponent.propTypes = {
  data: PropTypes.shape({
    benefits: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    list: PropTypes.string,
  }).isRequired,
  className: PropTypes.shape({
    section: PropTypes.string.isRequired,
    div: PropTypes.string.isRequired,
  }).isRequired,
};
