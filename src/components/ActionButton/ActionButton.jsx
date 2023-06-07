import s from './ActionButton.module.css';

export const ActionButton = ({
  clickHandler,
  isRenderInModal = true,
  is404 = false,
}) => {
  return (
    <button
      className={
        isRenderInModal
          ? s.actionButtonModal
          : is404
          ? s.actionButton404
          : s.ActionButton
      }
      type="button"
      onClick={clickHandler}
    >
      {is404 ? 'Повернутись на головну' : 'Залишити заявку'}
    </button>
  );
};
