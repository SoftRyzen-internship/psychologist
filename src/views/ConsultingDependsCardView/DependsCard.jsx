import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Container, Modal, SectionTitle } from '@/components';
import s from './DependsCard.module.css';

export const DependsCard = ({ data }) => {
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
                <button onClick={() => handleOpen(i)}>
                  <p>Читати більше</p>
                </button>
                {openIndex === i && (
                  <Modal data={item} onClose={handleClose} isOpen={openIndex} />
                )}
              </li>
            ))}
            <Image
              className={s.image}
              src="/image/JuliaConsultationPage.jpg"
              alt="Юлія в процесі консультації"
              width={592}
              height={396}
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
