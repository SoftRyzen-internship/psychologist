import { ReusableSection } from '@/components';
import s from './WhatIDO.module.css';
import Image from 'next/image';

export const WhatIDo = ({ whatIDo }) => {
  return (
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
          alt="Чим займаюсь картинка"
        />
      </div>
    </ReusableSection>
  );
};
