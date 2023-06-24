import PropTypes from 'prop-types';
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import {
  Container,
  ModalButton,
  SectionTitle,
  TrainingsSection,
} from '@/components';

import vs from './TimeManagementView.module.css';
import s from '@/components/TrainingsSection/TrainingsSection.module.css';

export const TimeManagementView = ({ markdown, img, isDesktop }) => {
  const { heading, goal, timePeriod, list } = markdown;

  return (
    <>
      {markdown && (
        <section className={`trainingSection ${vs.timeManagementSection}`}>
          <Container>
            {isDesktop && (
              <>
                <SectionTitle title={heading} centered={true} />
                <div className={s.contentDesktopContainer}>
                  <div>
                    <ReactMarkdown className={`${s.goal} ${s.textMargin}`}>
                      {goal}
                    </ReactMarkdown>
                    <p className={`${s.timePeriod} ${s.textMargin}`}>
                      {timePeriod}
                    </p>
                    <h3 className={s.programTitle}>Програма:</h3>
                    <ReactMarkdown className={s.programList}>
                      {list[0].content}
                    </ReactMarkdown>
                  </div>
                  <div>
                    <Image
                      className={vs.image}
                      src={img.PATH.DESKTOP}
                      width={img.SIZES.WIDTH.DESKTOP}
                      height={img.SIZES.HEIGHT.DESKTOP}
                      alt={img.ALTERNATIVETEXT}
                    />
                    <ReactMarkdown className={s.programList}>
                      {list[1].content}
                    </ReactMarkdown>
                    <ModalButton />{' '}
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

TimeManagementView.propTypes = {
  markdown: PropTypes.object.isRequired,
  imgPath: PropTypes.string,
  isDesktop: PropTypes.bool.isRequired,
};
