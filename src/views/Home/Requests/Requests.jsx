import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { convertImage, toBase64 } from 'utils/blurDataURL';
import {
  Container,
  ModalButton,
  SectionTitle,
  OffsetImageBorder,
  BlueSectionComponent,
} from '@/components';
import * as s from './Requests.module.css';

export const Requests = ({ requests, mysection }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const [desktop, setDesktop] = useState(false);
  const [tablet, setTablet] = useState(false);
  useEffect(() => {
    isDesktop ? setDesktop(true) : setDesktop(false);
    isTablet ? setTablet(true) : setTablet(false);
  }, [isDesktop, isTablet]);

  return (
    <>
      {requests && (
        <section className={s.section}>
          <Container>
            <SectionTitle h2={true} title={requests?.heading} />

            <div className={s.flexBox}>
              <div>
                <ReactMarkdown className={s.mdContent}>
                  {requests?.content}
                </ReactMarkdown>

                {requests?.subtitle && (
                  <div className={s.blueText}>
                    <ReactMarkdown>{requests?.subtitle}</ReactMarkdown>
                  </div>
                )}

                <ModalButton />
              </div>

              <div className={s.imgWrapper}>
                {!tablet && !desktop && (
                  <OffsetImageBorder reverse className={s.aspRatio}>
                    <Image
                      src="/images/home_requests_mob.jpg"
                      width={480}
                      height={609}
                      alt="Юлія розповідає про запити з якими працює"
                      quality={100}
                      priority
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        convertImage(220, 392),
                      )}`}
                    />
                  </OffsetImageBorder>
                )}
                {tablet && !desktop && (
                  <OffsetImageBorder reverse className={s.aspRatio}>
                    <Image
                      src="/images/home_requests_tab.jpg"
                      width={324}
                      height={596}
                      alt="Юлія розповідає про запити з якими працює"
                      quality={100}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        convertImage(220, 392),
                      )}`}
                    />
                  </OffsetImageBorder>
                )}
                {tablet && desktop && (
                  <OffsetImageBorder reverse className={s.aspRatio}>
                    <Image
                      src="/images/home_requests_desk.jpg"
                      width={576}
                      height={572}
                      alt="Юлія розповідає про запити з якими працює"
                      quality={100}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        convertImage(220, 392),
                      )}`}
                    />
                  </OffsetImageBorder>
                )}
              </div>
            </div>
          </Container>
          <BlueSectionComponent
            data={mysection}
            className={{ section: 'mainPageSection' }}
          />
        </section>
      )}
    </>
  );
};

Requests.propTypes = {
  requests: PropTypes.object.isRequired,
  mysection: PropTypes.object.isRequired,
};
