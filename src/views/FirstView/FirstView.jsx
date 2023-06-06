import { Container, FirstComponent } from '@/components';
import s from './FirstView.module.css';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';

export const FirstView = () => {
  return (
    <section className={s.firstView}>
      <Container>
        <SectionTitle title="Перша секція" h1={true} centered={true} />

        <FirstComponent />
      </Container>
    </section>
  );
};
