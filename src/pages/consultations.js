import Head from 'next/head';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { DependsCard } from '@/views';
// import { useState } from 'react';
// import { Dialog } from '@radix-ui/react-dialog';
// import { Modal } from '@/components';

const ConsultationsPage = props => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Консультації</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DependsCard data={props.factors} />

      {/* <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <p>Читати більше</p>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Modal />
        </Dialog.Portal>
      </Dialog.Root> */}
    </>
  );
};

export const getStaticProps = async () => {
  const consults = getData(folderPaths.CONSULTATIONS);

  const { individual, online, requirements, faq1, factors, method } = consults;

  return {
    props: { individual, online, requirements, faq1, factors, method },
  };
};

export default ConsultationsPage;
