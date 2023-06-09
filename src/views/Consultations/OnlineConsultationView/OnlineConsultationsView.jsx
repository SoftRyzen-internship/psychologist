// import PropTypes from 'prop-types';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Container } from '@/components';
import { SectionTitle } from '@/components';
import { useEffect, useState } from 'react';
import s from './OnlineConsultationsView.module.css';

export const OnlineConsultationView = ({ data, src, alt }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      const screenWidth = window.innerWidth;
      setIsDesktop(screenWidth >= 1280);
    };

    checkIsDesktop();

    window.addEventListener('resize', checkIsDesktop);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, []);

  return (
    <section className={s.utilityFinder}>
      <Container>
        <SectionTitle title={data.heading} />
        <ReactMarkdown>{data.title}</ReactMarkdown>
        <div
          className={s.flexWrapper}
          role="container for img and text content"
          aria-label="wrapper for list and image"
        >
          <Image
            className={s.image}
            src={src}
            alt={alt}
            width={287}
            height={186}
          />
          <div className={s.textWrapper}>
            <ReactMarkdown>{data.description}</ReactMarkdown>
            {isDesktop && <ReactMarkdown>{data.list}</ReactMarkdown>}
          </div>
        </div>
        {!isDesktop && <ReactMarkdown>{data.list}</ReactMarkdown>}
      </Container>
    </section>
  );
};
