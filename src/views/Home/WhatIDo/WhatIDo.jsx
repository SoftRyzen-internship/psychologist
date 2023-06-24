import PropTypes from 'prop-types';
import Image from 'next/image';
import { ReusableSection } from '@/components';
import s from './WhatIDO.module.css';

export const WhatIDo = ({ whatIDo }) => {
  return (
    <>
      {whatIDo && (
        <ReusableSection
          data={whatIDo}
          mdClassName={s.mdContent}
          sectionClassName={s.section}
          flexBoxClassName={s.flexBox}
        >
          <div className={s.imgWrapper}>
            <Image
              src="/icons/whatIDo.svg"
              width={642}
              height={511}
              alt="Контурне зображення процесу проведення психологічної консультації"
            />
          </div>
        </ReusableSection>
      )}
    </>
  );
};

WhatIDo.propTypes = {
  whatIDo: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }),
};
