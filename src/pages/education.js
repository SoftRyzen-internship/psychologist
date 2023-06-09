import Head from 'next/head';
import { getData } from '@/lib/getData';
import { EducationMethodView, EducationProgramView } from '@/views';

const EducationPage = ({ method, program }) => {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Навчання SEE FAR CBT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main">
        <EducationMethodView method={method} />
        <EducationProgramView program={program} />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const education = getData('education');
  const { method, program } = education;

  return {
    props: { method, program },
  };
};

export default EducationPage;
