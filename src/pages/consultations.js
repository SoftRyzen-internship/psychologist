import PropTypes from 'prop-types';
import Head from 'next/head';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { PersonalConsultationMethodView } from '@/views';
import { OnlineConsultationView } from '@/views';

const ConsultationsPage = props => {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Консультації</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PersonalConsultationMethodView data={props.method} />
      <OnlineConsultationView data={props.online} />
    </>
  );
};

export const getStaticProps = async () => {
  const consults = getData(folderPaths.CONSULTATIONS);

  if (!consults) {
    return {
      notFound: true,
    };
  }

  const { individual, online, requirements, faq1, factors, method } = consults;

  return {
    props: { individual, online, requirements, faq1, factors, method },
  };
};

export default ConsultationsPage;

ConsultationsPage.propTypes = {
  method: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  online: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    benefits: PropTypes.string.isRequired,
  }),
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
