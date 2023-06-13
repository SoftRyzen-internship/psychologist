import Image from 'next/image';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { SectionTitle } from '@/components';
import { Container } from '@/components';
import s from './PersonalConsultationsView.module.css';

export const PersonalConsultationsView = ({ data }) => {
  return (
    <>
      <section className={s.sectionBG}>
        <Container>
          <SectionTitle title={data.heading} />
          <div className={s.subtitle}>
            <Image
              className={s.image}
              src="/icons/personalConsult.svg"
              alt="Пісочний годинник"
              width={218}
              height={89}
            />
            <ReactMarkdown>{data.format}</ReactMarkdown>
          </div>
          <div className={s.listWrapper}>
            <ReactMarkdown>{data.requests}</ReactMarkdown>
            <ul className={s.mainList}>
              {data.list.map(({ id, content }) => {
                return (
                  <li key={id} className={s.mainListItem}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

PersonalConsultationsView.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    requests: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
