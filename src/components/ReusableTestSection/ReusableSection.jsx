import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import s from './ReusableSection.module.css';
import classNames from 'classnames';

const CustomComponent = ({ caseName, whatido }) => {
  switch (caseName) {
    case 'one':
      return (
        <section className={s.utilityFinder}>
          {' '}
          <div className="container">
            <h2 className={classNames(s.whatido, s.title)}>
              {' '}
              <span>
                {' '}
                <ReactMarkdown>{whatido.heading}</ReactMarkdown>
              </span>
            </h2>
            <ReactMarkdown>{whatido.title}</ReactMarkdown>
            <ul className={s.whatidoList}>
              {whatido.list.map(({ content, index }) => {
                return (
                  <li key={index} className={s.plashka}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                    <ReactMarkdown>{whatido.subtitle}</ReactMarkdown>
                  </li>
                );
              })}
            </ul>
            <button type="button" className={s.buttonTest}>
              REGISTRATION
            </button>
            <Image
              className="img"
              src="/main/Psychotherapy.png"
              alt="something"
              width={320}
              height={246}
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
