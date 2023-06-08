import Head from 'next/head';
// import { FirstView } from '@/views';
import SectionSelect from '@/components/SectionSelectSection/SectionSelect';
import { folderPaths } from '@/utils/folderPaths';
import { getData } from '@/lib/getData';

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
  const main = getData(folderPaths.INDEX);
  const { study, whatido } = main;
  return {
    props: {
      // Will be passed to the page component as props
      study,
      whatido,
    },
  };
}
