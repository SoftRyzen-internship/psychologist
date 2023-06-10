import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Container, SectionTitle } from '@/components';
import s from './PersonalConsultationMethodView.module.css';
import classNames from 'classnames';

export const PersonalConsultationMethodView = ({ data }) => {
  return (
    <section className={s.section}>
      <Container>
        <SectionTitle title={data.heading} />
        <div className={s.wrapper}>
          <div className={s.textWrapper}>
            <ReactMarkdown>{data.description[0].content}</ReactMarkdown>
          </div>
          <Image
            className={classNames(s.image1, s.image)}
            src="/icons/Method1.svg"
            alt="method1 img"
            width={320}
            height={284}
          />
        </div>
        <div className={s.wrapper}>
          <div className={s.textWrapper}>
            <ReactMarkdown>{data.description[1].content}</ReactMarkdown>
          </div>
          <Image
            className={classNames(s.image2, s.image)}
            src="/icons/Method2.svg"
            alt="method2 img"
            width={320}
            height={249}
          />
        </div>
      </Container>
    </section>
  );
};
