import Image from 'next/image';
import { Container } from '@/components';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import NewsText from '@/components/NewsText/NewsText';
import OffsetImageBorder from '@/components/OffsetImageBorder/OffsetImageBorder';
import s from './NewsView.module.css';

function NewsView({ allNews }) {
  return (
    <section className={s.newsSection}>
      <Container>
        <SectionTitle h1 className={s.hidden} title={'Новини'} />
        <ul className={s.newsList}>
          {allNews.length > 0 &&
            allNews.map(news => (
              <li key={news.id} className={s.newsItem}>
                <SectionTitle h2 title={news.title} />
                <NewsText newsTextProp={news.text} />
                <OffsetImageBorder>
                  <Image
                    src={news.image.url}
                    alt={news.image.alt}
                    width={308}
                    height={193}
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

export default NewsView;
