import PropTypes from 'prop-types';

import { Container } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';
import s from './PublicSpeakingView.module.css';
import Image from 'next/image';

export const PublicSpeakingView = ({
  markdown,
  img,
  btnClickHandler,
  isDesktop,
}) => {
  const setSpecialTitle = () => {
    if (markdown.heading.includes('\u00A0')) {
      return markdown;
    }
    const splittedTitle = markdown.heading.split(' ');
    const firstTwoWords = splittedTitle.slice(0, 2);
    const concatinatedWords = `${splittedTitle[2]}\u00A0${splittedTitle[3]}`;
    console.log(concatinatedWords);
    const specialTitle = [
      ...firstTwoWords,
      concatinatedWords,
      ...splittedTitle.slice(4),
    ].join(' ');
    markdown.heading = specialTitle;
    return markdown;
  };
  return (
    <section className={`trainingSection ${s.heroTrainingSection}`}>
      <Container>
        <TrainingsSection
          markdown={isDesktop ? setSpecialTitle() : markdown}
          isHeroSection={true}
          btnClickHandler={btnClickHandler}
        />
        <Image
          className={s.heroImg}
          src={isDesktop ? img.PATH.DESKTOP : img.PATH.MOBILE}
          priority
          width={isDesktop ? img.SIZES.WIDTH.DESKTOP : img.SIZES.WIDTH.TABLET}
          height={
            isDesktop ? img.SIZES.HEIGHT.DESKTOP : img.SIZES.HEIGHT.TABLET
          }
          alt={img.ALTERNATIVETEXT}
        />
      </Container>
    </section>
  );
};

PublicSpeakingView.propTypes = {
  markdown: PropTypes.object.isRequired,
  imgPath: PropTypes.string,
  btnClickHandler: PropTypes.func.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};
