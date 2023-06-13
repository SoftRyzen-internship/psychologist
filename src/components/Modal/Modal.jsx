import * as Dialog from '@radix-ui/react-dialog';
import s from './Modal.module.css';
// import { ContactForm } from '..';
import CloseSVG from 'public/icons/close.svg';

export const Modal = ({ children }) => {
  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay} />

        <Dialog.Content className={s.DialogContent}>
          {children}

          <Dialog.Close className={s.closeButton} aria-label="Close">
            {/* <button className={s.closeButton} aria-label="Close"> */}
            <CloseSVG className={s.iconClose} />
            <svg className={s.iconClose} width="16" height="16">
              <use href="/icons/close.svg" />{' '}
            </svg>
            {/* </button> */}
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  );
};

// <Dialog.Root open={open} onOpenChange={setOpen}>
{
  /* <Dialog.Trigger asChild>
        <ActionButton is404={false} clickHandler={setOpen} />
      </Dialog.Trigger> */
}
// <Dialog.Portal>

// </Dialog.Portal>
// </Dialog.Root>
