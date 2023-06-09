import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { Socials } from '@/components';
import * as st from './FixedSocials.module.css';

export const FixedSocials = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const [showElem, setShowElem] = useState(false);
  useEffect(() => {
    isDesktop ? setShowElem(true) : setShowElem(false);
  }, [isDesktop]);
  return (
    <>
      {showElem && (
        <div className={st.fixed}>
          <Socials />
        </div>
      )}
    </>
  );
};
