import ReactMarkdown from 'react-markdown';
import { Container } from '@/components';
import s from './EducationProgramView.module.css';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import Image from 'next/image';

export const EducationProgramView = ({ program }) => {
  return (
    <section className={s.educationProgram}>
      <Container>
        <SectionTitle title={program.heading} centered={true} />

        <div className={s.educationProgrammUpperWrap}>
          <ReactMarkdown>{program.general}</ReactMarkdown>
          <ReactMarkdown>{program.title}</ReactMarkdown>
          <ReactMarkdown>{program.list}</ReactMarkdown>
          <Image
            alt="color drawing photo"
            src="/images/education-team.svg"
            width="592"
            height="364"
          />
        </div>

        <div className={s.educationProgrammLowerWrap}>
          <ReactMarkdown>{program.list2}</ReactMarkdown>
          <Image
            alt="color drawing photo"
            src="/images/education-woman.svg"
            width="520"
            height="316"
          />
        </div>
      </Container>
    </section>
  );
};
