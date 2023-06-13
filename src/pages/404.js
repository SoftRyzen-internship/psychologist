import { getRandom404 } from '@/lib/getRandom404';

const NotFoundPage = ({ randomView }) => {
  console.log(randomView);
  return (
    <>
      {randomView === 1 && <h1>first</h1>}
      {randomView === 2 && <h2>second</h2>}
    </>
  );
};

export const getStaticProps = async () => {
  const randomView = getRandom404(1, 3);

  return {
    props: {
      randomView,
    },
  };
};
export default NotFoundPage;
