import * as Dialog from '@radix-ui/react-dialog';
import s from './Modal.module.css';
// import { ContactForm } from '..';
import CloseSVG from 'public/icons/close.svg';

export const Modal = ({ children }) => {
  return (
    <>
      <Dialog.Overlay className={s.DialogOverlay} />

      <Dialog.Content className={s.DialogContent}>
        {/* <ContactForm /> */}

        {children}

        <Dialog.Close className={s.closeButton} aria-label="Close">
          {/* <button className={s.closeButton} aria-label="Close"> */}
          <CloseSVG className={s.iconClose} />
          {/* </button> */}
        </Dialog.Close>
      </Dialog.Content>
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
