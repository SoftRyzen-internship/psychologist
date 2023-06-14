import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Container, SectionTitle } from '@/components';
import st from './HomeHero.module.css';

export const HomeHero = ({ hero }) => {
  return (
    <section className={st.section}>
      <Container>
        <div className={st.wrapper}>
          <div className="">
            <Image
              alt="main hero photo"
              src="/images/main_hero_desk.png"
              height={734}
              width={458}
              className={st.image}
            />
          </div>
          <div className={st.descr}>
            <SectionTitle title={hero.heading} h1={true} />

            <ReactMarkdown>{hero.intro}</ReactMarkdown>
            <ReactMarkdown>{hero.first}</ReactMarkdown>
            <ReactMarkdown>{hero.second}</ReactMarkdown>
          </div>
        </div>
      </Container>
    </section>
  );
};
