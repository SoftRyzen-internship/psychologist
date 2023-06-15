import { Container, SectionTitle } from '@/components';
import st from './Consult.module.css';

export const Consult = () => {
  const data = [
    { id: 1, text: 'Тривалість сесії: 50 – 55 хвилин' },
    {
      id: 2,
      text: 'Працюю очно та онлайн з дорослими та підлітками (від 15 років)',
    },
    { id: 3, text: 'Строго дотримуюсь принципу конфіденційності' },
  ];
  return (
    <section className={st.section}>
      <Container>
        <SectionTitle
          title={'Індивідуальні психологічні консультації, психотерапія:'}
          className={st.title}
        />
        <ul className={st.list}>
          {data.map(el => {
            return (
              <li className={st.item} key={el.id}>
                {el.text}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
