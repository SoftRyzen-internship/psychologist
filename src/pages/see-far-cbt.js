import Head from 'next/head';
import { getData } from '@/lib/getData';
import { EducationMethodView, EducationProgramView } from '@/views';
import { folderPaths } from '@/utils/folderPaths';

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
  const { SEE_FAR_CBT } = folderPaths;
  const education = getData(SEE_FAR_CBT);

  if (!education) {
    return {
      notFound: true,
    };
  }
  const { method, program } = education;

  return {
    props: { method, program },
  };
};

export default EducationPage;
