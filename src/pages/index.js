import Head from 'next/head';
import { SectionSelect } from '@/components/index';
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
        {/* <SectionSelect
          data={props.whatido}
          src={'/icons/whatidoVector.svg'}
          alt={'Psycho vector'}
          position="whatido"
        /> */}
        <SectionSelect
          data={props.study}
          src={'/icons/studyVector.svg'}
          alt={'Study vector'}
          position="study"
        />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const main = getData(folderPaths.INDEX);
  const { study, whatido } = main;
  // const { allNews } = await getNewsList();
  // if (!allNews) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      // Will be passed to the page component as props
      study,
      whatido,
    },
  };
}
