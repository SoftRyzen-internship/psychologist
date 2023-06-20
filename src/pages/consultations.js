import Head from 'next/head';
import PropTypes from 'prop-types';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { ReusableBlueView } from '@/views';

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
      <ReusableBlueView
        data={props.online}
        className={{ section: 'personalConsSection', div: 'container' }}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const consults = getData(folderPaths.CONSULTATIONS);

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
  online: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    benefits: PropTypes.string.isRequired,
  }).isRequired,
  blue: PropTypes.shape({
    benefits: PropTypes.string.isRequired,
  }).isRequired,
};
