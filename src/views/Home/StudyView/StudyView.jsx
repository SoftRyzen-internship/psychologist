import PropTypes from 'prop-types';
import Image from 'next/image';
import { ReusableSection } from '@/components';
import s from './StudyView.module.css';

export const StudyView = ({ study }) => {
  return (
    <>
      {study && (
        <ReusableSection
          data={study}
          mdClassName={s.mdContent}
          sectionClassName={s.section}
          flexBoxClassName={s.flexBox}
        >
          <div className={s.imgWrapper}>
            <Image
              src="/icons/study.svg"
              width={560}
              height={608}
              alt="Контурне зображення процесу розплутування клубка тривожних думок"
            />
          </div>
        </ReusableSection>
      )}
    </>
  );
};

StudyView.propTypes = {
  study: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }),
};
