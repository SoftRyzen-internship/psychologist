import Image from 'next/image';
import s from './ErrorNote.module.css';

export const ErrorNote = () => {
  return (
    <>
      {/* <div className={s.content}> */}
      <h3 className={s.title}>Нажаль, сталася помилка!</h3>
      <div className={s.wrap}>
        <p className={s.text}>Ваші дані не були відправлені.</p>

        <div className={s.textWrap}>
          <p className={s.text}>Повідомлення сервера про помилку</p>
          <p> перенаправлене адміністратору сайта.</p>
        </div>
        <Image
          className={s.strongImage}
          src="/images/error.svg"
          alt="Контурний малюнок людини з похиленою головою біля ноутбука"
          width="360"
          height="200"
        />
      </div>
      {/* </div> */}
    </>
  );
};
