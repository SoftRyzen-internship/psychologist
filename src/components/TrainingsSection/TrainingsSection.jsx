import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import s from './TrainingsSection.module.css';
import { ActionButton } from '@/components';

import classNames from 'classnames';
import Image from 'next/image';
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
          <ReactMarkdown className={classNames(s.textMargin, s.goal)}>
            {goal}
          </ReactMarkdown>
          <em className={classNames(s.timePeriod, s.textMargin)}>
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
          <ReactMarkdown className={classNames(s.textMargin, s.goal)}>
            {goal}
          </ReactMarkdown>
          <div className={s.imageWrapper}>
            <Image className={s.image} src={img} fill alt="conflict" />
          </div>
          <em className={classNames(s.timePeriod, s.textMargin)}>
            {timePeriod}
          </em>
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
