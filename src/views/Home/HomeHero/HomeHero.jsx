import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { Container, SectionTitle } from '@/components';
import * as st from './HomeHero.module.css';

export const HomeHero = ({ hero }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const [showElem, setShowElem] = useState(false);
  useEffect(() => {
    isTablet ? setShowElem(true) : setShowElem(false);
  }, [isTablet]);
  return (
    <section className={st.section}>
      <Container>
        {showElem && (
          <Image
            alt="фото Юлії Сулаєвої"
            src="/images/main_hero.png"
            className={st.image}
            priority
            width={458}
            height={734}
          />
        )}
        <div className={st.descr}>
          <SectionTitle title={hero.heading} h1={true} />

          <ReactMarkdown className={st.intro}>{hero.intro}</ReactMarkdown>
          <ReactMarkdown className={st.first}>{hero.first}</ReactMarkdown>
          <ReactMarkdown className={st.second}>{hero.second}</ReactMarkdown>
        </div>
      </Container>
    </section>
  );
};

HomeHero.propTypes = {
  hero: PropTypes.object.isRequired,
};
