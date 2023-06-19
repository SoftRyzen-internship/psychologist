import Head from 'next/head';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';

const ConsultationsPage = () => {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Консультації</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
