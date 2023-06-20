import dynamic from 'next/dynamic';
import Image from 'next/image';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Container, ModalButton, SectionTitle } from '@/components';
import s from './EducationProgramView.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export const EducationProgramView = ({ program }) => {
  return (
    <section className={s.section}>
      <Container>
        <SectionTitle title={program.heading} />

        <div className={s.upperWrap}>
          <div className={s.imgWrap}>
            <MediaQuery maxWidth={1279}>
              <Image
                alt="Контурний малюнок трьох людей біля ноутбука"
                src="/images/education-team-small.svg"
                className={s.image}
                width="620"
                height="280"
              />
            </MediaQuery>

            <MediaQuery minWidth={1280}>
              <Image
                alt="Контурний малюнок трьох людей біля ноутбука"
                src="/images/education-team.svg"
                className={s.image}
                width="592"
                height="364"
              />
            </MediaQuery>
          </div>

          <div className={s.textWrap}>
            <p className={s.timing}>Курс складається із 4 занять по 3 години</p>
            <p className={s.programm}>Програма:</p>
            <ReactMarkdown>{program.list}</ReactMarkdown>
          </div>
        </div>

        <div className={s.lowerWrap}>
          <div className={s.textWrap}>
            <ReactMarkdown>{program.list2}</ReactMarkdown>

            <ModalButton />
          </div>

          <div className={s.imgWrap}>
            <MediaQuery maxWidth={1279}>
              <Image
                alt="Контурний малюнок жінки з книгою"
                src="/images/education-woman-small.svg"
                className={s.image}
                width="420"
                height="312"
              />
            </MediaQuery>

            <MediaQuery minWidth={1280}>
              <Image
                alt="Контурний малюнок жінки з книгою"
                src="/images/education-woman.svg"
                className={s.image}
                width="520"
                height="316"
              />
            </MediaQuery>
          </div>
        </div>
      </Container>
    </section>
  );
};

EducationProgramView.propTypes = {
  program: PropTypes.shape({
    heading: PropTypes.string,
    list: PropTypes.string.isRequired,
    list2: PropTypes.string.isRequired,
  }),
};
