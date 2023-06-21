import PropTypes from 'prop-types';
import { BlueSectionComponent } from '@/components';

export const ReusableBlueView = ({ data, className }) => {
  return <BlueSectionComponent data={data} className={className} />;
};

ReusableBlueView.propTypes = {
  data: PropTypes.shape({
    benefits: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    list: PropTypes.string,
  }).isRequired,
  className: PropTypes.shape({
    section: PropTypes.string.isRequired,
  }).isRequired,
};
