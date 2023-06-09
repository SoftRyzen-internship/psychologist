import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import Image from 'next/image';
import s from './NewsView.module.css';
import { Container } from '@/components';
import NewsText from '@/components/NewsText/NewsText';
import OffsetImageBorder from '@/components/OffsetImageBorder/OffsetImageBorder';

function NewsView({ allNews }) {
  return (
    <section className={s.newsSection}>
      <Container>
        <ul className={s.newsList}>
          {allNews.length > 0 &&
            allNews.map(news => (
              <li key={news.id} className={s.newsItem}>
                <SectionTitle h1={true} title={news.title} />
                <NewsText newsTextProp={news.text} />
                <OffsetImageBorder>
                    <Image
                            src={news.image.url}
                            alt={news.image.alt}
                            width={308}
                            height={193}
                            className={s.imageStyle}
                            style={{display: "block"}}
                    />
                </OffsetImageBorder>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
}

export default NewsView