import { OffsetImageBorder, ReusableSection } from '@/components';
import Image from 'next/image';
import s from './GetPersonalConsultView.module.css';

export const GetPersonalConsultView = ({ data }) => {
  return (
    <ReusableSection
      data={data}
      mdClassName={s.mdContent}
      sectionClassName={s.section}
      flexBoxClassName={s.flexBox}
    >
      <OffsetImageBorder className={s.imageWrapper}>
        {/* <div className={s.imgWrapper}> */}
        <Image
          src="/images/JuliaGetPersonalConsult.jpg"
          width={308}
          height={386}
          alt="Julia img"
        />
        {/* </div> */}
      </OffsetImageBorder>
    </ReusableSection>
  );
};
