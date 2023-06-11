import PropTypes from 'prop-types';
import Image from 'next/image';

import { ActionButton, Container, SectionTitle } from '@/components';
import { TrainingsSection } from '@/components/TrainingsSection/TrainingsSection';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import vs from './SelfHelpView.module.css';
import s from '@/components/TrainingsSection/TrainingsSection.module.css';

export const SelfHelpView = ({ markdown, img, btnClickHandler, isDesktop }) => {
  const { heading, goal, timePeriod, list } = markdown;
  return (
    <>
      {isDesktop && (
        <section className={`trainingSection ${vs.selfHelpSection}`}>
          <Container>
            <SectionTitle title={heading} />
            <div className={s.contentDesktopContainer}>
              <div>
                <ReactMarkdown className={`${s.goal} ${s.textMargin}`}>
                  {goal}
                </ReactMarkdown>{' '}
                <Image
                  className={vs.image}
                  src={img.PATH.DESKTOP}
                  width={img.SIZES.WIDTH.DESKTOP}
                  height={img.SIZES.HEIGHT.DESKTOP}
                  alt={img.ALTERNATIVETEXT}
                />
              </div>{' '}
              <div>
                {' '}
                <em className={`${s.timePeriod} ${s.textMargin}`}>
                  {timePeriod}
                </em>
                <h3 className={s.programTitle}>Програма:</h3>
                <ReactMarkdown className={s.programList}>
                  {list[0].content}
                </ReactMarkdown>
                <ActionButton clickHandler={btnClickHandler} />
              </div>
            </div>
          </Container>
        </section>
      )}
      {!isDesktop && (
        <section className={`trainingSection ${vs.selfHelpSection}`}>
          <Container>
            <TrainingsSection
              markdown={markdown}
              img={img}
              btnClickHandler={btnClickHandler}
            />
          </Container>
        </section>
      )}
    </>
  );
};

SelfHelpView.propTypes = {
  markdown: PropTypes.object.isRequired,
  imgPath: PropTypes.string,
  btnClickHandler: PropTypes.func.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};
