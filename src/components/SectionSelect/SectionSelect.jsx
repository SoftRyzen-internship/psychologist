import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import { Container } from '..';
import s from './SectionSelect.module.css';

// const SectionSelect = ({ whatido, study }) => {
//   switch (true) {
//     case Boolean(whatido):
//       return (
//         <section className={s.utilityFinder}>
//           {/* Section component */}
//           <Container>
//             <h2 className={classNames(s.whatido, s.title)}>
//               <span>
//                 <ReactMarkdown>{whatido.heading}</ReactMarkdown>
//               </span>
//             </h2>
//             <ReactMarkdown>{whatido.title}</ReactMarkdown>
//             <div
//               className={s.flexWrapper}
//               role="container for flex"
//               aria-label="wrapper for list and image"
//             >
//               <div className={s.subtitleFinder}>
//                 <ul className={s.whatidoList}>
//                   {whatido.list.map(({ content, id }) => {
//                     return (
//                       <li key={id} className={s.plashka}>
//                         <ReactMarkdown>{content}</ReactMarkdown>
//                         <ReactMarkdown>{whatido.subtitle}</ReactMarkdown>
//                       </li>
//                     );
//                   })}
//                 </ul>
//                 <button type="button" className={s.buttonTest}>
//                   REGISTRATION
//                 </button>
//               </div>
//               {/* This is must be as svg, not png */}
//               <div>
//                 <Image
//                   className={classNames(s.img, s.whatido, s.imgLarge)}
//                   src="/main/Psychotherapy@2x.png"
//                   alt="something"
//                   width={320}
//                   height={246}
//                 />
//               </div>
//             </div>
//           </Container>
//         </section>
//       );
//     case Boolean(study):
//       return (
//         <section className={s.utilityFinderStudy}>
//           <Container>
//             <h2 className={s.studyTitle}>
//               <span>
//                 <ReactMarkdown>{study.heading}</ReactMarkdown>
//               </span>
//             </h2>
//             <div className={s.flexWrapperMain}>
//               <div>
//                 <Image
//                   className={classNames(s.img, s.whatido, s.imgLarge, s.study)}
//                   src="/main/Study2x.png"
//                   alt="something"
//                   width={256}
//                   height={281}
//                 />
//               </div>
//               <div>
//                 <ReactMarkdown>{study.title}</ReactMarkdown>
//                 <ReactMarkdown>{study.subtitle}</ReactMarkdown>
//                 <ul className={classNames(s.whatidoList, s.studyList)}>
//                   {study.list.map(({ content, id }) => {
//                     return (
//                       <li key={id} className={s.plashka}>
//                         <ReactMarkdown>{content}</ReactMarkdown>
//                       </li>
//                     );
//                   })}
//                 </ul>
//                 <button type="button" className={s.buttonTest}>
//                   REGISTRATION
//                 </button>
//               </div>
//             </div>
//           </Container>
//         </section>
//       );
//     default:
//       return null;
//   }
// };

const SectionSelect = ({ data, src, alt, pos }) => {
  return (
    <section
      className={pos === 'study' ? s.utilityFinderStudy : s.utilityFinder}
    >
      {/* Section component */}
      <Container>
        <h2
          className={classNames(
            pos === 'study' ? s.studyTitle : s.whatido,
            s.title,
          )}
        >
          <span>
            <ReactMarkdown>{data.heading}</ReactMarkdown>
          </span>
        </h2>
        {pos !== 'study' && <ReactMarkdown>{data.title}</ReactMarkdown>}
        <div
          className={pos === 'study' ? s.flexWrapperReverse : s.flexWrapper}
          role="container for flex"
          aria-label="wrapper for list and image"
        >
          <div className={pos === 'study' ? '' : s.subtitleFinder}>
            {pos === 'study' && (
              <>
                <ReactMarkdown>{data.title}</ReactMarkdown>
                <ReactMarkdown>{data.subtitle}</ReactMarkdown>
              </>
            )}

            <ul
              className={
                pos === 'study'
                  ? classNames(s.whatidoList, s.studyList)
                  : s.whatidoList
              }
            >
              {data.list.map(({ content, id }) => {
                return (
                  <li key={id} className={s.plashka}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                    {pos !== 'study' && (
                      <ReactMarkdown>{data.subtitle}</ReactMarkdown>
                    )}
                  </li>
                );
              })}
            </ul>
            <button type="button" className={s.buttonTest}>
              REGISTRATION
            </button>
          </div>
          {/* This is must be as svg, not png */}
          <div>
            <Image
              className={
                pos === 'study'
                  ? classNames(s.img, s.whatido, s.imgLarge, s.study)
                  : classNames(s.img, s.whatido, s.imgLarge)
              }
              src={src}
              alt={alt}
              width={320}
              height={246}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionSelect;
