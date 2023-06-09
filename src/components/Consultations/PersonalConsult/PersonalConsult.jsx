import { Container } from '@/components';
import s from './PersonalConsult.module.css';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const PersonalConsult = ({ data }) => {
  return (
    <>
      <section className={s.sectionBG}>
        <Container>
          <SectionTitle title={data.heading} />
          <div className={s.subtitle}>
            <Image
              className={s.image}
              src="/icons/personalConsult.svg"
              alt="1"
              width={218}
              height={89}
            />
            <ReactMarkdown>{data.format}</ReactMarkdown>
          </div>
          <div className={s.listWrapper}>
            <ReactMarkdown>{data.requests}</ReactMarkdown>
            <ul className={s.mainList}>
              {data.list.map(({ id, content }) => {
                return (
                  <li key={id} className={s.mainListItem}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </li>
                );
              })}
            </ul>
            {/* <ReactMarkdown>{data.list[0].content}</ReactMarkdown>
          <ReactMarkdown>{data.list[1].content}</ReactMarkdown> */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default PersonalConsult;
