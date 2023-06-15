import Image from 'next/image';
import s from './ThankYou.module.css';
// import CorrectSVG from 'public/icons/correct.svg';

export const ThankYou = () => {
  return (
    <>
      {/* <div className={s.content}> */}
      <h3 className={s.title}>Дякую за вашу заявку!</h3>
      <div className={s.wrap}>
        <p className={s.text}>Ваші дані були успішно відправлені.</p>
        {/* <CorrectSVG className={s.correctIcon} /> */}

        <div className={s.textWrap}>
          <p className={s.text}>Будь ласка, очікуйте:</p>
          <p className={s.text}>я зв&apos;яжусь з вами </p>
          <p> найближчим часом для обговорення деталей.</p>
        </div>
        <Image
          className={s.strongImage}
          src="/images/modal-done.svg"
          alt="Контурний малюнок жінки біля ноутбука"
          width="360"
          height="200"
        />
      </div>
      {/* </div> */}
    </>
  );
};
