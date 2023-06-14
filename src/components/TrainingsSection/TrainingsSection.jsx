import PropTypes from 'prop-types';
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import { ActionButton, SectionTitle } from '@/components';
import { combineList } from '@/utils/combineList';

import s from './TrainingsSection.module.css';

export const TrainingsSection = ({
  markdown,
  img = null,
  isHeroSection = false,
  isTitleCentered = false,
  btnClickHandler,
}) => {
  const { heading, goal, timePeriod, list } = markdown;

  const mobileImgWidth = img?.SIZES.WIDTH.MOBILE
    ? `${img.SIZES.WIDTH.MOBILE}px`
    : '100%';
  const mobileImgHeight = img?.SIZES.HEIGHT.MOBILE
    ? `${img.SIZES.HEIGHT.MOBILE}px`
    : '100%';
  const tabletImgWidth = img?.SIZES.WIDTH.TABLET
    ? `${img.SIZES.WIDTH.TABLET}px`
    : '100%';
  const tabletImgHeight = img?.SIZES.HEIGHT.TABLET
    ? `${img.SIZES.HEIGHT.TABLET}px`
    : '100%';

  return (
    <>
      {isHeroSection && (
        <>
          <h1 className="visually-hidden">Тренінги</h1>
          <p className={`${s.textMargin} ${s.formatText}`}>
            Всі тренінги і майстер-класи проводжу в офлайн та онлайн форматах
          </p>
          <SectionTitle
            centered={isTitleCentered}
            title={heading}
            className="sectionTitleH1"
          />
          <div className={s.heroContentWrapper}>
            <ReactMarkdown
              className={`${s.goal} ${s.textMargin} ${s.goalHero}`}
            >
              {goal}
            </ReactMarkdown>
            <p className={`${s.timePeriodHero} ${s.textMargin}`}>
              {timePeriod}
            </p>
            <h3 className={s.programTitle}>Програма:</h3>
            <ReactMarkdown className={`${s.programList} ${s.heroProgramList}`}>
              {list[0].content}
            </ReactMarkdown>
          </div>
          <ActionButton clickHandler={btnClickHandler} />
        </>
      )}
      {!isHeroSection && (
        <>
          <SectionTitle centered={isTitleCentered} title={heading} />
          <ReactMarkdown className={`${s.goal} ${s.textMargin}`}>
            {goal}
          </ReactMarkdown>
          {img.PATH.MOBILE && (
            <div className={`${s.imageWrapper} dynamicImgWrapper`}>
              <style jsx>{`
                .dynamicImgWrapper {
                  width: ${mobileImgWidth};
                  height: ${mobileImgHeight};
                  @media screen and (min-width: 768px) {
                    width: ${tabletImgWidth};
                    height: ${tabletImgHeight};
                  }
                }
              `}</style>
              <Image
                className={s.image}
                src={img.PATH.MOBILE}
                fill
                alt={img.ALTERNATIVETEXT}
              />
            </div>
          )}
          <p className={`${s.timePeriod} ${s.textMargin}`}>{timePeriod}</p>
          <h3 className={s.programTitle}>Програма:</h3>
          <ReactMarkdown className={s.programList}>
            {list.length > 1 ? combineList(list) : list[0].content}
          </ReactMarkdown>
          <ActionButton clickHandler={btnClickHandler} />
        </>
      )}
    </>
  );
};

TrainingsSection.propTypes = {
  markdown: PropTypes.object,
  img: PropTypes.object,
  isHeroSection: PropTypes.bool,
  isTitleCentered: PropTypes.bool,
  btnClickHandler: PropTypes.func,
};
