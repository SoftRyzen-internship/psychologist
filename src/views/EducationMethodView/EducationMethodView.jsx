import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Container, SectionTitle } from '@/components';
import s from './EducationMethodView.module.css';

export const EducationMethodView = ({ method }) => {
  return (
    <section className={s.section}>
      <Container>
        <SectionTitle title={method.heading} h1={true} />
        <div className={s.wrap}>
          <div className={s.textWrap}>
            <ReactMarkdown>{method.students}</ReactMarkdown>
            <ReactMarkdown>{method.intro}</ReactMarkdown>
          </div>

          <div className={s.imgWrap}>
            <Image
              priority={true}
              alt="teacher on lection photo"
              src="/images/education_teacher.jpg"
              className={s.image}
              fill
            />
          </div>
        </div>

        <div className={s.lowerWrap}>
          <div className={s.textWrap}>
            <ReactMarkdown>{method.model}</ReactMarkdown>
          </div>

          <div className={s.imgWrap}>
            <Image
              alt="color drawing photo"
              src="/images/education_drawing.jpg"
              className={s.image}
              fill
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
