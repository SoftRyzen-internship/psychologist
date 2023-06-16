import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { ContactForm, Modal } from '..';
import s from './ModalButton.module.css';

export const ModalButton = () => {
  // const [open, setOpen] = useState(false);

  //* localStorage tryout

  let localData = false;
  if (typeof window !== 'undefined') {
    try {
      localData = JSON.parse(localStorage.getItem('modalOpen')) ?? false;
      console.log('localData', localData);
    } catch (error) {
      console.log(error.message);
    }
  }

  const [open, setOpen] = useState(localData);

  useEffect(() => {
    setOpen(JSON.parse(window.localStorage.getItem('modalOpen')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('modalOpen', open);
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={s.modalButton}>Залишити заявку</Dialog.Trigger>

      <Modal>
        <ContactForm />
      </Modal>
    </Dialog.Root>
  );
};
