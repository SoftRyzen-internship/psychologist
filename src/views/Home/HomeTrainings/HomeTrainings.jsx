import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import {
  Container,
  SectionTitle,
  OffsetImageBorder,
  ModalButton,
} from '@/components';
import { convertImage, toBase64 } from 'utils/blurDataURL';
import { TrainingsList } from './TrainingsList';
import * as st from './HomeTrainings.module.css';

export const HomeTrainings = ({ trainings }) => {
  return (
    <>
      {trainings && (
        <section className={`section ${st.section}`}>
          <Container>
            <div className={st.descr}>
              <SectionTitle title={trainings?.heading} centered />

              <p className={st.variant}>{trainings?.variantFirst}</p>

              <TrainingsList />

              <div className={st.contentWrapper}>
                <OffsetImageBorder className={st.imageBorder}>
                  <Image
                    alt="фото Юлії Сулаєвої"
                    src="/images/home_trainings.png"
                    className={st.image}
                    width={308}
                    height={345}
                    quality={100}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      convertImage(220, 392),
                    )}`}
                  />
                </OffsetImageBorder>

                <div>
                  <p className={st.variant}>{trainings?.variantSecond}</p>

                  <ReactMarkdown className={st.listMasters}>
                    {trainings?.content}
                  </ReactMarkdown>

                  <ModalButton />
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
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
