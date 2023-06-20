import { SpinnerMarkup } from '@/components';
import * as styles from './Spinner.module.css';

export const Spinner = ({ contain }) => {
  return (
    <>
      {contain && (
        <>
          <div className={styles['contain']}>
            <SpinnerMarkup />
          </div>
        </>
      )}
      {!contain && (
        <>
          <SpinnerMarkup />
        </>
      )}
    </>
  );
};
