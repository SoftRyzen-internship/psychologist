import Head from 'next/head';
import PropTypes from 'prop-types';
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

      <EducationMethodView method={method} />
      <EducationProgramView program={program} />
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

EducationPage.propTypes = {
  method: PropTypes.shape({
    heading: PropTypes.string,
    students: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }),
  program: PropTypes.shape({
    heading: PropTypes.string,
    list: PropTypes.string.isRequired,
    list2: PropTypes.string.isRequired,
  }),
};

export default EducationPage;
