import PropTypes from 'prop-types';
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import {
  Container,
  ModalButton,
  SectionTitle,
  TrainingsSection,
} from '@/components';

import vs from './StrongSidesView.module.css';
import s from '@/components/TrainingsSection/TrainingsSection.module.css';

export const StrongSidesView = ({ markdown, img, isDesktop }) => {
  const { heading, goal, timePeriod, list } = markdown;

  return (
    <section
      className={
        isDesktop
          ? `trainingSection ${vs.strongSidesSection}`
          : `trainingSection`
      }
    >
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
                <ModalButton />{' '}
              </div>
              <div>
                <p className={`${s.timePeriod} ${s.textMargin}`}>
                  {timePeriod}
                </p>
                <h3 className={s.programTitle}>Програма:</h3>
                <ReactMarkdown
                  className={`${s.programList} ${vs.desktopProgramList}`}
                >
                  {list[0].content}
                </ReactMarkdown>
              </div>
            </div>
          </>
        )}
        {!isDesktop && <TrainingsSection markdown={markdown} img={img} />}
      </Container>
    </section>
  );
};

StrongSidesView.propTypes = {
  markdown: PropTypes.object.isRequired,
  imgPath: PropTypes.string,
  isDesktop: PropTypes.bool.isRequired,
};
