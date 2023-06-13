import PropTypes from 'prop-types';
import Link from 'next/link';

import { routes } from 'routes';
import s from './ActionButton.module.css';

export const ActionButton = ({
  clickHandler,
  inModalForm = false,
  is404 = false,
}) => {
  return (
    <>
      {is404 && (
        <Link className={s.actionLink404} href={routes.HOME}>
          Повернутись на головну
        </Link>
      )}
      {!is404 && (
        <button
          className={inModalForm ? s.actionButtonModal : s.actionButton}
          type={inModalForm ? 'submit' : 'button'}
          onClick={clickHandler}
        >
          Залишити заявку
        </button>
      )}
    </>
  );
};

ActionButton.propTypes = {
  clickHandler: PropTypes.func,
  inModalForm: PropTypes.bool,
  is404: PropTypes.bool,
};
