import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import s from './ReusableSection.module.css';
import classNames from 'classnames';
import { Container } from '..';

const CustomComponent = ({ caseName, whatido }) => {
  switch (caseName) {
    case 'whatido':
      return (
        <section className={s.utilityFinder}>
          {/* Section component */}
          <Container>
            <h2 className={classNames(s.whatido, s.title)}>
              <span>
                <ReactMarkdown>{whatido.heading}</ReactMarkdown>
              </span>
            </h2>
            <ReactMarkdown>{whatido.title}</ReactMarkdown>
            <div
              className={s.flexWrapper}
              role="container for flex"
              aria-label="wrapper for list and image"
            >
              <div>
                <ul className={s.whatidoList}>
                  {whatido.list.map(({ content, id }) => {
                    return (
                      <li key={id} className={s.plashka}>
                        <ReactMarkdown>{content}</ReactMarkdown>
                        <ReactMarkdown>{whatido.subtitle}</ReactMarkdown>
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
                  className={classNames(s.img, s.whatido, s.imgLarge)}
                  src="/main/Psychotherapy@2x.png"
                  alt="something"
                  width={320}
                  height={246}
                />
              </div>
            </div>
          </Container>
        </section>
      );
    case 'two':
      return <div></div>;
    default:
      return null;
  }
};

export default CustomComponent;
