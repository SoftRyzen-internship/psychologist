import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Container, ModalDependsCards, SectionTitle } from '@/components';
import { convertImage, toBase64 } from '@/utils/blurDataURL';
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
      {data && (
        <section className={s.utilFinder}>
          <Container>
            <SectionTitle title={data?.heading} />

            <div className={s.contentAbsolute}>
              <ul className={s.cardBox}>
                {data?.cards?.map((item, i) => (
                  <li className={s.cardWrapper} key={i}>
                    <ReactMarkdown>{item.title}</ReactMarkdown>

                    <div className={s.contentWrapper}>
                      <ReactMarkdown>{item.content}</ReactMarkdown>
                    </div>

                    <button onClick={() => handleOpen(i)}>
                      <p>Читати більше</p>
                    </button>

                    {openIndex === i && (
                      <ModalDependsCards
                        data={item}
                        onClose={handleClose}
                        isOpen={openIndex}
                      />
                    )}
                  </li>
                ))}
              </ul>

              <Image
                className={s.image}
                src="/images/consultation_modal-author.jpg"
                alt="Юлія в процесі консультації"
                width={592}
                height={396}
                quality={100}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  convertImage(220, 392),
                )}`}
              />
            </div>
          </Container>
        </section>
      )}
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
