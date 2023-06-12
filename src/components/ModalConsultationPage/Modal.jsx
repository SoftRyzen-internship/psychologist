import {
  DialogClose,
  DialogContent,
  DialogOverlay,
} from '@radix-ui/react-dialog';
import s from './Modal.module.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import CloseBtn from 'public/icons/closeModalBTN.svg';
import { Container } from '..';

// export const Modal = ({ data }) => {
//   // console.log(data);
//   return (
//     <>
//       {/* <Container> */}
//       <DialogOverlay className={s.DialogOverlay} />
//       <DialogContent className={s.DialogContent}>
//         <ReactMarkdown>{data.title}</ReactMarkdown>
//         <ReactMarkdown>{data.content}</ReactMarkdown>
//         <DialogClose asChild>
//           <button className={s.closeButton} aria-label="Close">
//             <CloseBtn className={s.iconClose} />
//             {/* <svg className={s.iconClose}>
//               <use xlinkHref="../../../public/icons/closeModalBTN.svg" />
//             </svg> */}
//           </button>
//         </DialogClose>
//       </DialogContent>
//       {/* </Container> */}
//     </>
//   );
// };

export const Modal = ({ data, onClose }) => {
  // console.log(data);
  return (
    <>
      <div className={s.overlay}>
        <div className={s.modalWrapper}>
          <button className={s.closeButton} onClick={onClose}>
            <CloseBtn className={s.closeVector} aria-label="close button" />
          </button>
          <ReactMarkdown>{data.title}</ReactMarkdown>
          <div className={s.contentWrapper}>
            <ReactMarkdown>{data.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};
