import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import s from './ReusableSection.module.css';
import classNames from 'classnames';
// import MarkSvg from '../../../public/main/Vector.svg';

const CustomComponent = ({ caseName, whatido }) => {
  switch (caseName) {
    case 'one':
      return (
        <section>
          {' '}
          <div className="container">
            <h2 className={classNames(s.whatido, s.title)}>
              {' '}
              <ReactMarkdown>{whatido.heading}</ReactMarkdown>
            </h2>
            <span className={s.spanTitle}>
              <ReactMarkdown>{whatido.title}</ReactMarkdown>
            </span>
            {whatido.list.map(({ content }) => {
              return (
                <>
                  {' '}
                  <div className={s.plashka}>
                    {' '}
                    <span className={classNames(s.whatidoList)}>
                      {/* <MarkSvg /> */}
                      {/* ul was here */}
                      <ReactMarkdown>{content}</ReactMarkdown>
                    </span>
                    <span className={s.spanSubtitle}>
                      <ReactMarkdown>{whatido.subtitle}</ReactMarkdown>
                    </span>
                    {/* <div className={s.plashkaLine}></div> */}
                  </div>
                </>
              );
            })}
            <button type="button" className={s.buttonTest}>
              REGISTRATION
            </button>
            <Image
              className="img"
              src="/main/Psychotherapy.png"
              alt="something"
              width={320}
              height={246}
              // layout="responsive"
            />
          </div>
        </section>
      );
    case 'two':
      return <div></div>;
    default:
      return null;
  }
};

export default CustomComponent;
