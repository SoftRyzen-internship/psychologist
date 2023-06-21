import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import {
  Container,
  SectionTitle,
  OffsetImageBorder,
  ModalButton,
} from '@/components';
import { TrainingsList } from './TrainingsList';
import * as st from './HomeTrainings.module.css';

export const HomeTrainings = ({ trainings }) => {
  return (
    <section className={st.section}>
      <Container>
        <div className={st.descr}>
          <SectionTitle title={trainings.heading} centered />
          <ReactMarkdown className={st.variant}>
            {trainings.variantFirst}
          </ReactMarkdown>
          <TrainingsList />
          <div className={st.contentWrapper}>
            <OffsetImageBorder className={st.imageBorder}>
              <Image
                alt="фото Юлії Сулаєвої"
                src="/images/home_trainings.png"
                className={st.image}
                priority
                width={308}
                height={345}
                quality={100}
              />
            </OffsetImageBorder>
            <div>
              <ReactMarkdown className={st.variant}>
                {trainings.variantSecond}
              </ReactMarkdown>
              <ReactMarkdown className={st.listMasters}>
                {trainings.content}
              </ReactMarkdown>

              <ModalButton />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

HomeTrainings.propTypes = {
  trainings: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    variantFirst: PropTypes.string.isRequired,
    variantSecond: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
