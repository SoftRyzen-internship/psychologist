import Head from 'next/head';
// import { FirstView } from '@/views';
import { getMainData } from '@/lib/main';
import SectionSelect from '@/components/SectionSelectSection/SectionSelect';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Головна</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main">
        {/* <FirstView /> */}
        <SectionSelect caseName="whatido" {...props} />
        {/* You can send props as an object data={{ study: study, whatido: whatido }} */}
        {/* <SectionSelect caseName="study" study={study} whatido={whatido} /> */}
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
