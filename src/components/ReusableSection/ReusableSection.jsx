import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { ActionButton, Container, SectionTitle } from '..';
import s from './ReusableSection.module.css';
import classNames from 'classnames';

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
        <section className={classNames(s.utilityFinder, sectionClassName)}>
          <Container>
            <SectionTitle h2={true} title={data?.heading} />

            <div className={flexBoxClassName}>
              <div>
                <ReactMarkdown className={mdClassName}>
                  {data?.content}
                </ReactMarkdown>

                {data?.subtitle && (
                  <span className={s.bluePlashka}>
                    <ReactMarkdown>{data?.subtitle}</ReactMarkdown>
                  </span>
                )}

                <ActionButton type="button" />
              </div>

              {children}
              {/* 
          {!boxForImage
          <div className={imgWrapperClassName}>
            <Image src={src} width={600} height={300} alt={alt} />
          </div>} */}
            </div>
          </Container>
        </section>
      )}
    </>
  );
};
