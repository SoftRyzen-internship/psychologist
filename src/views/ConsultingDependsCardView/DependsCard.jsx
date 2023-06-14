import Image from 'next/image';
import PropTypes from 'prop-types';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
// import * as Dialog from '@radix-ui/react-dialog';
import { Container, Modal, SectionTitle } from '@/components';
import { useState } from 'react';
import s from './DependsCard.module.css';

export const DependsCard = ({ data }) => {
  // const [open, setOpen] = useState(false);
  // console.log(data);

  const [openIndex, setOpenIndex] = useState(-1);

  const handleOpen = index => {
    setOpenIndex(index);
  };

  const handleClose = () => {
    setOpenIndex(-1);
  };

  return (
    <>
      <section>
        <Container>
          <SectionTitle title={data.heading} />
          <ul className={s.cardBox}>
            {data.cards.map((item, i) => (
              <li className={s.cardWrapper} key={i}>
                <ReactMarkdown>{item.title}</ReactMarkdown>
                <div className={s.contentWrapper}>
                  <ReactMarkdown>{item.content}</ReactMarkdown>
                </div>
                {/* <Dialog.Root open={open} onOpenChange={setOpen}>
                  <Dialog.Trigger>
                    <p>Читати більше</p>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Modal data={item} />
                  </Dialog.Portal>
                </Dialog.Root> */}
                <button onClick={() => handleOpen(i)}>
                  <p>Читати більше</p>
                </button>
                {openIndex === i && <Modal data={item} onClose={handleClose} />}
              </li>
            ))}
            <Image
              className={s.image}
              src="/image/JuliaConsultationPage.jpg"
              alt="Julia in an consultation process"
              width={320}
              height={215}
            />
          </ul>
        </Container>
      </section>
    </>
  );
};

DependsCard.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
