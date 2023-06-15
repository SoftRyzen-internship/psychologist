import PropTypes from 'prop-types';
import Link from 'next/link';
import { routes } from 'routes';
import s from './ActionButton.module.css';

export const ActionButton = ({ clickHandler, is404 = true }) => {
  return (
    <>
      {is404 && (
        <Link className={s.actionLink404} href={routes.HOME}>
          Повернутись на головну
        </Link>
      )}

      {!is404 && (
        <button className={s.actionButton} type="submit" onClick={clickHandler}>
          Залишити заявку
        </button>
      )}
    </>
  );
};

ActionButton.propTypes = {
  clickHandler: PropTypes.func,
  is404: PropTypes.bool,
};
