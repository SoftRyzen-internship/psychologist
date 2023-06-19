import Head from 'next/head';
import { getData } from '@/lib/getData';
import { folderPaths } from '@/utils/folderPaths';
import { BlueSectionComponent } from '@/components';

const ConsultationsPage = props => {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Консультації</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <BlueSectionComponent
        data={props.online}
        className={{ section: 'personalConsSection', div: 'container' }}
      /> */}
      <BlueSectionComponent
        data={props.blue}
        className={{ section: 'mainPageSection', div: 'containerX' }}
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
