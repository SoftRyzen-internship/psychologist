import dynamic from 'next/dynamic';
import Image from 'next/image';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { convertImage, toBase64 } from 'utils/blurDataURL';
import { Container, OffsetImageBorder, SectionTitle } from '@/components';
import s from './EducationMethodView.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export const EducationMethodView = ({ method }) => {
  return (
    <>
      {method && (
        <section className={`section ${s.section}`}>
          <Container>
            <SectionTitle
              title="Навчання роботі в методі SEE FAR CBT"
              h1={true}
            />

            <div className={s.wrap}>
              <div className={s.textWrap}>
                <div className={s.students}>
                  <ReactMarkdown>{method?.students}</ReactMarkdown>
                </div>

                <ReactMarkdown>{method?.intro}</ReactMarkdown>
              </div>

              <MediaQuery maxWidth={1279}>
                <OffsetImageBorder className={s.aspectRatioTeacherMob}>
                  <Image
                    alt="Вчитель з трибуни читає лекцію"
                    src="/images/education-teacher-small.jpg"
                    className={s.image}
                    width="690"
                    height="710"
                    quality={100}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      convertImage(690, 710),
                    )}`}
                    priority
                  />
                </OffsetImageBorder>
              </MediaQuery>

              <MediaQuery minWidth={1280}>
                <OffsetImageBorder className={s.aspectRatioTeacherDesk}>
                  <Image
                    alt="Вчитель з трибуни читає лекцію"
                    src="/images/education-teacher.jpg"
                    className={s.image}
                    width="472"
                    height="680"
                    quality={100}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      convertImage(472, 680),
                    )}`}
                    priority
                  />
                </OffsetImageBorder>
              </MediaQuery>
            </div>

            <div className={s.lowerWrap}>
              <div className={s.textLowerWrap}>
                <ReactMarkdown>{method?.model}</ReactMarkdown>
              </div>

              <MediaQuery maxWidth={1279}>
                <OffsetImageBorder className={s.aspectRatioTeacherMob}>
                  <Image
                    alt="Дитячий малюнок і кольорові олівці"
                    src="/images/education-drawing-small.jpg"
                    className={s.image}
                    width="688"
                    height="728"
                    quality={100}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      convertImage(688, 728),
                    )}`}
                    priority
                  />
                </OffsetImageBorder>
              </MediaQuery>

              <MediaQuery minWidth={1280}>
                <OffsetImageBorder reverse className={s.aspectRatioTeacherDesk}>
                  <Image
                    alt="Дитячий малюнок і кольорові олівці"
                    src="/images/education-drawing.jpg"
                    className={s.image}
                    width="472"
                    height="660"
                    quality={100}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      convertImage(472, 660),
                    )}`}
                    priority
                  />
                </OffsetImageBorder>
              </MediaQuery>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

EducationMethodView.propTypes = {
  method: PropTypes.shape({
    heading: PropTypes.string,
    students: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }),
};
