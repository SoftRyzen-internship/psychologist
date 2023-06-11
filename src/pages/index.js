import Head from 'next/head';
import { FirstView } from '@/views';
import { getNewsList } from '@/utils/request';
import { ActionButton } from '@/components';
import * as Dialog from '@radix-ui/react-dialog';
import s from '../components/Modal/Modal.module.css';
import { ContactForm } from '@/components';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  console.log(open);
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
            {/* Open */}
            <ActionButton is404={false} clickHandler={setOpen} />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className={s.DialogOverlay} />
            <Dialog.Content className={s.DialogContent}>
              <ContactForm />
              {/* <Dialog.Title className={s.DialogTitle}>
                Записатися на прийом
              </Dialog.Title> */}

              {/* <fieldset className="Fieldset">
                <label className="Label" htmlFor="name">
                  Name
                </label>
                <input
                  className="Input"
                  id="name"
                  defaultValue="Pedro Duarte"
                />
              </fieldset>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="username">
                  Username
                </label>
                <input
                  className="Input"
                  id="username"
                  defaultValue="@peduarte"
                />
              </fieldset> */}
              <div
                style={{
                  display: 'flex',
                  marginTop: 25,
                  justifyContent: 'flex-end',
                }}
              >
                <Dialog.Close asChild>
                  <button className="Button green">Save changes</button>
                </Dialog.Close>
              </div>
              <Dialog.Close asChild>
                <button className={s.IconButton} aria-label="Close">
                  x
                </button>
              </Dialog.Close>
            </Dialog.Content>
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
