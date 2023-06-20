import PropTypes from 'prop-types';
import Head from 'next/head';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import {
  GetPersonalConsultView,
  PersonalConsultationMethodView,
  OnlineConsultationView,
} from '@/views';

const ConsultationsPage = props => {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Консультації</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <ReusableBlueView
        data={props.blue}
        className={{ section: 'mainPageSection', div: 'containerX' }}
      /> */}
      {/* <ReusableBlueView
        data={props.online}
        className={{ section: 'personalConsSection', div: 'container' }}
      /> */}
      <GetPersonalConsultView data={props.requirements} />
      <PersonalConsultationMethodView data={props.method} />
      <OnlineConsultationView
        data={props.online}
        bluesection={props.blue}
        mysection={props.online}
      />
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

  const {
    individual,
    online,
    requirements,
    faq1,
    faq2,
    factors,
    method,
    blue,
  } = consults;

  return {
    props: {
      individual,
      online,
      requirements,
      faq1,
      faq2,
      factors,
      method,
      blue,
    },
  };
};

export default ConsultationsPage;

ConsultationsPage.propTypes = {
  requirements: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
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
  }).isRequired,
  blue: PropTypes.shape({
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
