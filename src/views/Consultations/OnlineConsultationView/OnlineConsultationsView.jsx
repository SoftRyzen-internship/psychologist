import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { Container, SectionTitle } from '@/components';
import s from './OnlineConsultationsView.module.css';

export const OnlineConsultationView = ({ data }) => {
  const [isDesktopShow, setIsDesktopShow] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {
    isDesktop ? setIsDesktopShow(true) : setIsDesktopShow(false);
  }, [isDesktop]);

  return (
    <section className={s.utilityFinder}>
      <Container>
        <SectionTitle title={data.heading} />
        <div
          className={s.flexWrapper}
          role="container for img and text content"
          aria-label="wrapper for list and image"
        >
          <Image
            className={s.image}
            src="/icons/OnlineConsultVector.svg"
            alt="Ілюстрація онлайн консультації"
            width={287}
            height={186}
          />
          <div className={s.textWrapper}>
            <ReactMarkdown>{data.description}</ReactMarkdown>
            {isDesktopShow && <ReactMarkdown>{data.list}</ReactMarkdown>}
          </div>
        </div>
        {!isDesktopShow && <ReactMarkdown>{data.list}</ReactMarkdown>}
      </Container>
    </section>
  );
};

OnlineConsultationView.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
  }).isRequired,
};
