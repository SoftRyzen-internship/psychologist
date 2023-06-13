import Head from 'next/head';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { GetPersonalConsultView } from '@/views';

const ConsultationsPage = props => {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Консультації</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GetPersonalConsultView data={props.requirements} />
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
