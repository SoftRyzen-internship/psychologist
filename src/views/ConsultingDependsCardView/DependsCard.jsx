import { Container, SectionTitle } from '@/components';
import s from './DependsCard.module.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Image from 'next/image';

export const DependsCard = ({ data }) => {
  return (
    <>
      <section>
        <Container>
          <SectionTitle title={data.heading} />
          <ul className={s.cardBox}>
            {data.cards.map((item, i) => (
              <>
                <li className={s.cardWrapper} key={i}>
                  <ReactMarkdown>{item.title}</ReactMarkdown>
                  <div className={s.contentWrapper}>
                    <ReactMarkdown>{item.content}</ReactMarkdown>
                  </div>
                  <p>Читати більше</p>
                </li>
              </>
            ))}
            <Image
              className={s.image}
              src="/image/JuliaConsultationPage.jpg"
              alt="Julia in an consultation process"
              width={320}
              height={215}
            />
          </ul>
        </Container>
      </section>
    </>
  );
};
