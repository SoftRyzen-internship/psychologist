import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Container, SectionTitle } from '@/components';
import homeTrainingsData from 'src/data/homeTrainingsData.json';
import Trainitem1 from 'public/icons/home-tren-item-1.svg';
import Trainitem2 from 'public/icons/home-tren-item-2.svg';
import Trainitem3 from 'public/icons/home-tren-item-3.svg';
import Trainitem4 from 'public/icons/home-tren-item-4.svg';
import Trainitem5 from 'public/icons/home-tren-item-5.svg';
import * as st from './HomeTrainings.module.css';

export const HomeTrainings = ({ trainings }) => {
  const Trainitems = {
    1: <Trainitem1 />,
    2: <Trainitem2 />,
    3: <Trainitem3 />,
    4: <Trainitem4 />,
    5: <Trainitem5 />,
  };
  const trainingsList = homeTrainingsData?.map(el => {
    return (
      <>
        <li key={el.id.toString()} className={st.item}>
          <span className={st.itemImg}>{Trainitems[el.id]}</span>
          <span className={st.itemText}>{el.text}</span>
        </li>
      </>
    );
  });
  return (
    <section className={st.section}>
      <Container>
        <div className={st.descr}>
          <SectionTitle title={trainings.heading} />
          <ReactMarkdown className={st.variant}>
            {trainings.variantFirst}
          </ReactMarkdown>
          <ul className={st.list}>{trainingsList}</ul>
          <Image
            alt="фото Юлії Сулаєвої"
            src="/images/home_trainings.jpg"
            className={st.image}
            priority
            width={458}
            height={734}
            quality={100}
          />

          <ReactMarkdown className={st.variant}>
            {trainings.variantSecond}
          </ReactMarkdown>
          <ReactMarkdown className={st.list}>{trainings.content}</ReactMarkdown>
        </div>
      </Container>
    </section>
  );
};

HomeTrainings.propTypes = {
  trainings: PropTypes.object.isRequired,
};
