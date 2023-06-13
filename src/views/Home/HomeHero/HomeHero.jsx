import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Container, SectionTitle } from '@/components';
import st from './HomeHero.module.css';

export const HomeHero = ({ hero }) => {
  return (
    <section className={st.section}>
      <Container>
        <div className={st.wrapper}>
          <Image
            alt="main hero photo"
            src="/images/main_hero.png"
            className={st.image}
            priority
            width={458}
            height={745}
          />
          <div className={st.descr}>
            <SectionTitle title={hero.heading} h1={true} />

            <ReactMarkdown className={st.intro}>{hero.intro}</ReactMarkdown>
            <ReactMarkdown className={st.first}>{hero.first}</ReactMarkdown>
            <ReactMarkdown className={st.second}>{hero.second}</ReactMarkdown>
          </div>
        </div>
      </Container>
    </section>
  );
};
