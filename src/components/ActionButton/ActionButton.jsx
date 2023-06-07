import Link from 'next/link';
import s from './ActionButton.module.css';

export const ActionButton = ({
  clickHandler,
  inModalForm = true,
  is404 = true,
  text = 'Залишити заявку',
}) => {
  return is404 ? (
    <Link className={s.actionLink404} href={'/'}>
      {text !== 'Залишити заявку' ? text : 'Повернутись на головну'}
    </Link>
  ) : (
    <button
      className={inModalForm ? s.actionButtonModal : s.actionButton}
      type={inModalForm ? 'submit' : 'button'}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};
