import dynamic from 'next/dynamic';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import * as Dialog from '@radix-ui/react-dialog';
import {
  ActionButton,
  ContactForm,
  Container,
  Modal,
  SectionTitle,
} from '@/components';
import s from './EducationProgramView.module.css';
import { useState } from 'react';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export const EducationProgramView = ({ program }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className={s.section}>
      <Container>
        <SectionTitle title={program.heading} centered={true} />

        <div className={s.upperWrap}>
          <div className={s.imgWrap}>
            <MediaQuery maxWidth={1279}>
              <Image
                alt="contour drawing of of team watching to laptop"
                src="/images/education-team-small.svg"
                className={s.image}
                fill
                priority
              />
            </MediaQuery>

            <MediaQuery minWidth={1280}>
              <Image
                alt="contour drawing of of team watching to laptop"
                src="/images/education-team.svg"
                className={s.image}
                fill
                priority
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

            {/* <ActionButton is404={false} /> */}
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <ActionButton is404={false} clickHandler={setOpen} />
              </Dialog.Trigger>
            </Dialog.Root>
          </div>
          <div className={s.imgWrap}>
            <MediaQuery maxWidth={1279}>
              <Image
                alt="contour drawing of wooman with a book"
                src="/images/education-woman-small.svg"
                className={s.image}
                fill
                priority
              />
            </MediaQuery>

            <MediaQuery minWidth={1280}>
              <Image
                alt="contour drawing of wooman with a book"
                src="/images/education-woman.svg"
                className={s.image}
                fill
                priority
              />
            </MediaQuery>
          </div>
        </div>
      </Container>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Modal>
          <ContactForm />
        </Modal>
      </Dialog.Root>
    </section>
  );
};
