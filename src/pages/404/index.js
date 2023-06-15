import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import { ActionButton, Container } from '@/components';

import secondS from './second404.module.css';

const NotFoundPage = () => {
  const isDesktopSize = useMediaQuery({ query: '(min-width: 1280px)' });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(isDesktopSize);
  }, [isDesktopSize]);

  return (
    <div className={secondS.view}>
      <Container>
        <div className={secondS.contentWrapper}>
          {isDesktop && (
            <>
              <div>
                <h1 className={secondS.title}>Сторінку не знайдено.</h1>
                <ActionButton is404 />
              </div>
              <Image
                className={secondS.image}
                src="images/404page/404secondView.svg"
                priority
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
      </Container>
    </div>
  );
};

export default NotFoundPage;
