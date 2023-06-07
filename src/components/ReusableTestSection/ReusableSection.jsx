import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import s from './ReusableSection.module.css';
import classNames from 'classnames';
import { Container } from '..';
import { Racing_Sans_One } from 'next/font/google';

const CustomComponent = ({ caseName, whatido, study }) => {
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
    case 'study':
      return (
        <section className={s.utilityFinderStudy}>
          <Container>
            <h2 className={s.studyTitle}>
              <span>
                <ReactMarkdown>{study.heading}</ReactMarkdown>
              </span>
            </h2>
            <Image
              className={classNames(s.img, s.whatido, s.imgLarge, s.study)}
              src="/main/Study2x.png"
              alt="something"
              width={256}
              height={281}
            />
            <ReactMarkdown>{study.title}</ReactMarkdown>
            <ReactMarkdown>{study.subtitle}</ReactMarkdown>

            <ul className={classNames(s.whatidoList, s.studyList)}>
              {study.list.map(({ content, id }) => {
                return (
                  <li key={id} className={s.plashka}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </li>
                );
              })}
            </ul>
            <button type="button" className={s.buttonTest}>
              REGISTRATION
            </button>
          </Container>
        </section>
      );
    default:
      return null;
  }
};

export default CustomComponent;
