import PropTypes from 'prop-types';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { getRandom404 } from '@/lib/getRandom404';

import { ActionButton } from '@/components';
import firstS from './first404.module.css';
import secondS from './second404.module.css';

const NotFoundPage = ({ randomView }) => {
  const isDesktopSize = useMediaQuery({ query: '(min-width: 1280px)' });
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(isDesktopSize);
  }, [isDesktopSize]);
  return (
    <>
      {randomView === 1 && (
        <div className={firstS.view}>
          <div className={firstS.contentWrapper}>
            <Image
              className={firstS.image}
              src="images/404page/404firstView.svg"
              width={256}
              height={124}
              alt="404, неіснуюча сторінка"
            />{' '}
            <h1 className={firstS.title}>На жаль сторінку не знайдено.</h1>
            <ActionButton is404 />
          </div>
        </div>
      )}
      {randomView === 2 && (
        <div className={secondS.view}>
          <div className={secondS.contentWrapper}>
            {isDesktop && (
              <>
                <div>
                  <h1 className={secondS.title}>Сторінку не знайдено.</h1>
                  <ActionButton is404 />
                </div>{' '}
                <Image
                  className={secondS.image}
                  src="images/404page/404secondView.svg"
                  width={316}
                  height={150}
                  alt="404, неіснуюча сторінка"
                />
              </>
            )}
            {!isDesktop && (
              <>
                <Image
                  className={secondS.image}
                  src="images/404page/404secondView.svg"
                  width={316}
                  height={150}
                  alt="404, неіснуюча сторінка"
                />
                <h1 className={secondS.title}>Сторінку не знайдено.</h1>
                <ActionButton is404 />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

NotFoundPage.propTypes = {
  randomView: PropTypes.number.isRequired,
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
