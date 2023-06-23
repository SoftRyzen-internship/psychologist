import { ReusableSection } from '@/components';
import Image from 'next/image';
import s from './StudyView.module.css';

export const StudyView = ({ study }) => {
  return (
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
  );
};
