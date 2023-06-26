import Image from 'next/image';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Container, SectionTitle } from '@/components';
import s from './PersonalConsultationMethodView.module.css';

export const PersonalConsultationMethodView = ({ data }) => {
  return (
    <>
      {data && (
        <section className={s.section}>
          <Container>
            <SectionTitle title={data?.heading} />

            <div className={s.wrapper}>
              <div className={s.textWrapper}>
                <ReactMarkdown>{data?.description[0].content}</ReactMarkdown>
              </div>

              <Image
                className={classNames(s.image1, s.image)}
                src="/icons/consultations-method1.svg"
                alt="Векторний малюнок руки, яка вказує на синю лампочку"
                width={320}
                height={284}
              />
            </div>

            <div className={s.wrapper}>
              <div className={s.textWrapper}>
                <ReactMarkdown>{data?.description[1].content}</ReactMarkdown>
              </div>

              <Image
                className={classNames(s.image2, s.image)}
                src="/icons/consultations-method2.svg"
                alt="Векторно - абстрактна голова людини, у якої мозок підсвічений особливим синім кольором. Праворуч від людини - синя лампочка, що горить"
                width={320}
                height={249}
              />
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

PersonalConsultationMethodView.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
