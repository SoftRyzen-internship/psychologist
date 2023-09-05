import Image from 'next/image';
import PropTypes from 'prop-types';
import { convertImage, toBase64 } from '@/utils/blurDataURL';
import {
  Container,
  SectionTitle,
  OffsetImageBorder,
  NewsText,
} from '@/components';

import s from './NewsView.module.css';
import classNames from 'classnames';

export function NewsView({ allNews }) {
  return (
    <div className={s.newsBackground}>
      <SectionTitle h1 className={s.visuallyHidden} title={'Новини'} />

      {allNews.length > 0 &&
        allNews.map(news => (
          <section key={news?.id} className={`section ${s.newsInstance}`}>
            <Container>
              <SectionTitle
                h2
                title={news?.title}
                className={classNames(
                  'sectionTitleH1',
                  s.newsTitleDesktopWidth,
                )}
              />

              <NewsText newsTextProp={news?.text} />

              <OffsetImageBorder className={s.aspectRatio}>
                <Image
                  src={news.image.url}
                  alt={news.image.alt}
                  width={1200}
                  height={748}
                  quality={100}
                  className={s.imageStyle}
                  placeholder={blur}
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    convertImage(1200, 748),
                  )}`}
                />
              </OffsetImageBorder>
            </Container>
          </section>
        ))}
    </div>
  );
}

NewsView.propTypes = {
  allNews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
      _publishedAt: PropTypes.string.isRequired,
    }),
  ),
};
