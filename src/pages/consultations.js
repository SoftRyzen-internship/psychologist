import PropTypes from 'prop-types';
import Head from 'next/head';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { ConsultationFAQComponent } from '@/components';
import {
  GetPersonalConsultView,
  PersonalConsultationMethodView,
  OnlineConsultationView,
  ReusableBlueView,
  DependsCard,
} from '@/views';

const ConsultationsPage = props => {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Консультації</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DependsCard data={props.factors} />
      {/* <ConsultationFAQComponent
        data={props.faq1}
        className={{ section: 'reusableSection', div: 'containerX' }}
      /> */}
      <ConsultationFAQComponent
        data={props.faq2}
        className={{ section: 'reusableSection2', div: 'containerX' }}
      />
      {/* <ReusableBlueView
        data={props.blue}
        className={{ section: 'mainPageSection', div: 'containerX' }}
      /> */}
      <ReusableBlueView
        data={props.online}
        className={{ section: 'personalConsSection', div: 'container' }}
      />
      <GetPersonalConsultView data={props.requirements} />
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
  faq1: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  faq2: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
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
