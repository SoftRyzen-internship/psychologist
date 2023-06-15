import s from './ThankYou.module.css';
import CorrectSVG from 'public/icons/correct.svg';
export const ThankYou = () => {
  return (
    <div className={s.wrap}>
      <div className={s.titleWrap}>
        <CorrectSVG className={s.correctIcon} />

        <h3 className={s.title}>Дякую за вашу заявку!</h3>
      </div>
      <div className={s.textWrap}>
        <p className={s.text}>Ваші дані були успішно відправлені.</p>
        <p className={s.text}>
          Будь ласка, очікуйте: я зв`&apos;`яжусь з вами найближчим часом для
          обговорення деталей.
        </p>
      </div>
    </div>
  );
};
