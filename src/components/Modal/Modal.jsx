import * as Dialog from '@radix-ui/react-dialog';
import PropTypes from 'prop-types';
import CloseSVG from 'public/icons/close.svg';
import s from './Modal.module.css';

export const Modal = ({ children }) => {
  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay}>
          <div className={s.modalWrap}>
            <Dialog.Content className={s.DialogContent}>
              {children}

              <Dialog.Close className={s.buttonClose} aria-label="Close">
                <CloseSVG className={s.iconClose} />
              </Dialog.Close>
            </Dialog.Content>
          </div>
        </Dialog.Overlay>
      </Dialog.Portal>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
