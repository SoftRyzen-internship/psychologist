import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { ContactForm, Modal } from '..';
import s from './ModalButton.module.css';

export const ModalButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={s.modalButton}>Залишити заявку</Dialog.Trigger>

      <Modal>
        <ContactForm />
      </Modal>
    </Dialog.Root>
  );
};
