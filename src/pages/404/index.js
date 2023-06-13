import { getRandom404 } from '@/lib/getRandom404';
import s from './404.module.css';

const NotFoundPage = ({ randomView }) => {
  console.log(randomView);
  return (
    <>
      {randomView === 1 && (
        <div className={s.firstView}>
          <h1>На жаль сторінку не знайдено.</h1>
        </div>
      )}
      {randomView === 2 && <h1>Сторінку не знайдено.</h1>}
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
