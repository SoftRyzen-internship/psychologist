import dynamic from 'next/dynamic';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import {
  Container,
  //  OffsetImageBorder,
  SectionTitle,
} from '@/components';
import s from './EducationMethodView.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export const EducationMethodView = ({ method }) => {
  return (
    <section className={s.section}>
      <Container>
        <SectionTitle title="Навчання роботі в методі SEE FAR CBT" h1={true} />
        <div className={s.wrap}>
          <div className={s.textWrap}>
            <ReactMarkdown>{method.fff}</ReactMarkdown>

            <div className={s.students}>
              <ReactMarkdown>{method.students}</ReactMarkdown>
            </div>
            <ReactMarkdown>{method.intro}</ReactMarkdown>
          </div>

          <div className={s.imgWrap}>
            <MediaQuery maxWidth={1279}>
              {/* <OffsetImageBorder> */}
              <Image
                alt="teacher on lection photo"
                src="/images/education-teacher-small.jpg"
                className={s.image}
                fill
                priority
              />
              {/* </OffsetImageBorder> */}
            </MediaQuery>

            <MediaQuery minWidth={1280}>
              <Image
                alt="teacher on lection photo"
                src="/images/education-teacher.jpg"
                className={s.image}
                fill
                priority
              />
            </MediaQuery>
          </div>
        </div>

        <div className={s.lowerWrap}>
          <div className={s.textWrap}>
            <ReactMarkdown>{method.model}</ReactMarkdown>
          </div>

          <div className={s.imgWrap}>
            <MediaQuery maxWidth={1279}>
              <Image
                alt="color drawing photo"
                src="/images/education-drawing-small.jpg"
                className={s.image}
                fill
                priority
              />
            </MediaQuery>

            <MediaQuery minWidth={1280}>
              <Image
                alt="color drawing photo"
                src="/images/education-drawing.jpg"
                className={s.image}
                fill
                priority
              />
            </MediaQuery>
          </div>
        </div>
      </Container>
    </section>
  );
};
