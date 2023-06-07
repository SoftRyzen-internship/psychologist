import Head from 'next/head';
// import { FirstView } from '@/views';
import { getMainData } from '@/lib/main';
import CustomComponent from '@/components/ReusableTestSection/ReusableSection';

export default function Home({ whatido, study }) {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Головна</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main">
        {/* <FirstView /> */}
        {/* <CustomComponent caseName="whatido" study={study} whatido={whatido} /> */}
        <CustomComponent caseName="study" study={study} whatido={whatido} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const main = getMainData();

  const { study, whatido } = main;
  return {
    props: {
      // Will be passed to the page component as props
      study,
      whatido,
    },
  };
}
