import Image from 'next/image';
import PropTypes from 'prop-types';
import {
  Container,
  SectionTitle,
  OffsetImageBorder,
  NewsText,
} from '@/components';

import s from './NewsView.module.css';

export function NewsView({ allNews }) {
  return (
    <section className={s.newsSection}>
      <Container>
        <SectionTitle h1 className={s.visuallyHidden} title={'Новини'} />
        <ul className={s.newsList}>
          {allNews.length > 0 &&
            allNews.map(news => (
              <li key={news.id} className={s.newsItem}>
                <SectionTitle
                  h2
                  title={news.title}
                  className={'sectionTitleH1'}
                />
                <NewsText newsTextProp={news.text} />
                <OffsetImageBorder className={s.aspectRatio}>
                  <Image
                    src={news.image.url}
                    alt={news.image.alt}
                    width={1200}
                    height={748}
                    unoptimized={true}
                    className={s.imageStyle}
                  />
                </OffsetImageBorder>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
}

NewsView.propTypes = {
  allNews: PropTypes.shape([
    {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
      _publishedAt: PropTypes.string.isRequired,
    },
  ]),
};
