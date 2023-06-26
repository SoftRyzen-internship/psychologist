import PropTypes from 'prop-types';
import Image from 'next/image';

import { Container, ModalButton, SectionTitle } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import vs from './SelfHelpView.module.css';
import s from '@/components/TrainingsSection/TrainingsSection.module.css';

export const SelfHelpView = ({ markdown, img, isDesktop }) => {
  const { heading, goal, timePeriod, list } = markdown;

  return (
    <>
      {markdown && (
        <section className={`trainingSection ${vs.selfHelpSection}`}>
          <Container>
            {isDesktop && (
              <>
                <SectionTitle title={heading} />
                <div className={s.contentDesktopContainer}>
                  <div>
                    <ReactMarkdown className={`${s.goal} ${s.textMargin}`}>
                      {goal}
                    </ReactMarkdown>

                    <Image
                      className={vs.image}
                      src={img.PATH.DESKTOP}
                      width={img.SIZES.WIDTH.DESKTOP}
                      height={img.SIZES.HEIGHT.DESKTOP}
                      alt={img.ALTERNATIVETEXT}
                    />
                  </div>

                  <div>
                    <p className={`${s.timePeriod} ${s.textMargin}`}>
                      {timePeriod}
                    </p>
                    <h3 className={s.programTitle}>Програма:</h3>
                    <ReactMarkdown className={s.programList}>
                      {list[0].content}
                    </ReactMarkdown>
                    <ModalButton />
                  </div>
                </div>
              </>
            )}
            {!isDesktop && <TrainingsSection markdown={markdown} img={img} />}
          </Container>
        </section>
      )}
    </>
  );
};

SelfHelpView.propTypes = {
  markdown: PropTypes.object.isRequired,
  imgPath: PropTypes.string,
  isDesktop: PropTypes.bool.isRequired,
};
