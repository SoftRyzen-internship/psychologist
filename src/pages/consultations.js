import PropTypes from 'prop-types';
import Head from 'next/head';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { PersonalConsultationsView } from '@/views';

const ConsultationsPage = props => {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Консультації</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PersonalConsultationsView data={props.individual} />
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

ConsultationsPage.propTypes = {
  individual: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    requests: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
