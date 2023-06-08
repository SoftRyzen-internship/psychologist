import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import s from './TrainingsSection.module.css';
import { ActionButton } from '@/components';

import classNames from 'classnames';
import Image from 'next/image';

export const TrainingsSection = ({
  markdown,
  img,
  isHeroSection = false,
  btnClickHandler,
}) => {
  const { heading, goal, timePeriod, list } = markdown;
  return (
    <>
      {isHeroSection && (
        <>
          <h1 className="visually-hidden">Тренінги</h1>
          <p className={s.textMargin}>
            Всі тренінги і майстер-класи проводжу в офлайн та онлайн форматах
          </p>
        </>
      )}
      <h2 className={s.heroTitle}>{heading}</h2>
      <ReactMarkdown className={classNames(s.textMargin, s.goal)}>
        {goal}
      </ReactMarkdown>
      {!isHeroSection && (
        <div className={s.imageWrapper}>
          <Image className={s.image} src={img} fill alt="conflict" />
        </div>
      )}
      <em className={classNames(s.timePeriod, s.textMargin)}>{timePeriod}</em>
      <h3 className={s.programTitle}>Програма:</h3>
      <ReactMarkdown className={s.programList}>{list[0].content}</ReactMarkdown>
      <ActionButton clickHandler={btnClickHandler} />
    </>
  );
};
