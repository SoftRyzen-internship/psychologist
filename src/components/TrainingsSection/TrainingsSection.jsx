import PropTypes from 'prop-types';
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import s from './TrainingsSection.module.css';
import { ActionButton } from '@/components';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export const TrainingsSection = ({
  markdown,
  img,
  isHeroSection = false,
  isTitleCentered = false,
  btnClickHandler,
}) => {
  const { heading, goal, timePeriod, list } = markdown;
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
          <ReactMarkdown className={`${s.goal} ${s.textMargin}`}>
            {goal}
          </ReactMarkdown>
          <em className={`${s.timePeriodHero} ${s.textMargin}`}>
            {timePeriod}
          </em>
          <h3 className={s.programTitle}>Програма:</h3>
          <ReactMarkdown className={`${s.programList} ${s.heroProgramList}`}>
            {list[0].content}
          </ReactMarkdown>
          <ActionButton clickHandler={btnClickHandler} />
        </>
      )}
      {!isHeroSection && (
        <>
          <SectionTitle centered={isTitleCentered} title={heading} />
          <ReactMarkdown className={`${s.goal} ${s.textMargin}`}>
            {goal}
          </ReactMarkdown>
          {img.PATH && (
            <div className={`${s.imageWrapper} dynamicImgWrapper`}>
              <style jsx>{`
                .dynamicImgWrapper {
                  width: ${img.SIZES.WIDTH.MOBILE || '100%'};
                  height: ${img.SIZES.HEIGHT.MOBILE || '100%'};
                  @media screen and (min-width: 768px) {
                    width: ${img.SIZES.WIDTH.TABLET};
                    height: ${img.SIZES.HEIGHT.TABLET || '100%'};
                  }
                }
              `}</style>
              <Image
                className={s.image}
                src={img.PATH}
                fill
                alt={img.ALTERNATIVETEXT}
              />
            </div>
          )}
          <em className={`${s.timePeriod} ${s.textMargin}`}>{timePeriod}</em>
          <h3 className={s.programTitle}>Програма:</h3>
          <ReactMarkdown className={s.programList}>
            {list[0].content}
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
