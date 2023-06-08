import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';

const ConsultationsPage = ({ individual, online, requirements, factors }) => {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Консультації</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {console.log(individual, online, requirements, factors)}
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
