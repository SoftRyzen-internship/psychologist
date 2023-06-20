import Head from 'next/head';
import PropTypes from 'prop-types';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { ConsultationFAQComponent } from '@/components';

const ConsultationsPage = props => {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Консультації</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <ConsultationFAQComponent
        data={props.faq1}
        className={{ section: 'reusableSection', div: 'containerX' }}
      /> */}
      <ConsultationFAQComponent
        data={props.faq2}
        className={{ section: 'reusableSection2', div: 'containerX' }}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const consults = getData(folderPaths.CONSULTATIONS);

  const { individual, online, requirements, faq1, faq2, factors, method } =
    consults;

  return {
    props: { individual, online, requirements, faq1, faq2, factors, method },
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
};
