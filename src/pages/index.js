import Head from 'next/head';
import { FirstView } from '@/views';
import { getNewsList } from '@/utils/request';
import { ActionButton, ContactForm } from '@/components';
import * as Dialog from '@radix-ui/react-dialog';
// import s from '../components/Modal/Modal.module.css';
// import { ContactForm } from '@/components';
import { useState } from 'react';
import { Modal } from '@/components/Modal/Modal';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Головна</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main">
        <FirstView />

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <ActionButton is404={false} clickHandler={setOpen} />
          </Dialog.Trigger>

          <Dialog.Portal>
            <Modal>
              <ContactForm />
            </Modal>
          </Dialog.Portal>
        </Dialog.Root>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { allNews } = await getNewsList();
  if (!allNews) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allNews,
    },
  };
}
