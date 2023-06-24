import { Container, SectionTitle } from '@/components';
import data from 'src/data/consult.json';
import st from './Consult.module.css';

export const Consult = () => {
  return (
    <>
      {data && (
        <section className={st.section}>
          <Container>
            <SectionTitle
              title={'Індивідуальні психологічні консультації, психотерапія:'}
              className={st.title}
            />

            <ul className={st.list}>
              {data?.map(el => {
                return (
                  <li className={st.item} key={el?.id}>
                    <span className={st.content}>{el?.text}</span>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
};
