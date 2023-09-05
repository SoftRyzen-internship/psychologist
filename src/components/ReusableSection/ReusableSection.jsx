import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Container, ModalButton, SectionTitle } from '..';
import s from './ReusableSection.module.css';

export const ReusableSection = ({
  data,
  sectionClassName,
  flexBoxClassName,
  mdClassName,
  children,
}) => {
  return (
    <>
      {data && (
        <section className={classNames('section', sectionClassName)}>
          <Container>
            <SectionTitle h2={true} title={data?.heading} />

            <div className={flexBoxClassName}>
              <div>
                <ReactMarkdown className={mdClassName}>
                  {data?.content}
                </ReactMarkdown>

                {data?.subtitle && (
                  <div className={s.blueText}>
                    <ReactMarkdown>{data?.subtitle}</ReactMarkdown>
                  </div>
                )}

                <ModalButton />
              </div>

              {/* put an image with or without wrapper inside the component  */}
              {children}
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

ReusableSection.propTypes = {
  data: PropTypes.object.isRequired,
  sectionClassName: PropTypes.string,
  flexBoxClassName: PropTypes.string,
  mdClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};
