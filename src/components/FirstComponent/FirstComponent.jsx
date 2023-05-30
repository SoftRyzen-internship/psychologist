import NextSVG from 'public/next.svg';
import s from './FirstComponent.module.css';

export const FirstComponent = () => {
  return (
    <>
      <p>My first component</p>
      <NextSVG className={s.svg} />
    </>
  );
};
