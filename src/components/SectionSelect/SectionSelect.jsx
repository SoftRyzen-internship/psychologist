import PropTypes from 'prop-types';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import { ActionButton, Container } from '..';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import s from './SectionSelect.module.css';

const SectionSelect = ({ data, src, alt, position }) => {
  return (
    <section
      className={position === 'study' ? s.utilityFinderStudy : s.utilityFinder}
    >
      {/* Section component */}
      <Container>
        <SectionTitle
          className={classNames(
            position === 'study' ? s.studyTitle : s.title,
            s.whatido,
          )}
          title={data.heading}
        />
        {position !== 'study' && <ReactMarkdown>{data.title}</ReactMarkdown>}
        <div
          className={
            position === 'study' ? s.flexWrapperReverse : s.flexWrapper
          }
          role="container for flex"
          aria-label="wrapper for list and image"
        >
          <div className={position === 'study' ? '' : s.subtitleFinder}>
            {position === 'study' && (
              <>
                <ReactMarkdown>{data.title}</ReactMarkdown>
                <ReactMarkdown>{data.subtitle}</ReactMarkdown>
              </>
            )}

            <ul
              className={
                position === 'study'
                  ? classNames(s.whatidoList, s.studyList)
                  : s.whatidoList
              }
            >
              {data.list.map(({ content, id }) => {
                return (
                  <li key={id} className={s.plashka}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                    {position !== 'study' && (
                      <ReactMarkdown>{data.subtitle}</ReactMarkdown>
                    )}
                  </li>
                );
              })}
            </ul>
            <ActionButton type="button" className={s.buttonTest}>
              REGISTRATION
            </ActionButton>
          </div>
          {/* This is must be as svg, not png */}
          <div>
            <Image
              className={
                position === 'study'
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

SectionSelect.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }),
    ),
  }).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['study', 'whatido']).isRequired,
};
