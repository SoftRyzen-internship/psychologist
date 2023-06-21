import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { NewsText } from '@/components';
import s from './NewsCard.module.css';

export const NewsCard = ({ image, title, text }) => {
  const { url, alt } = image;
  return (
    <div className={s.cardWrapper}>
      <Image
        src={url}
        alt={alt}
        width={1200}
        height={748}
        unoptimized={true}
        className={s.imageStyle}
      />
      <h3 className={classNames(s.newsTitle)}>{title}</h3>
      <NewsText newsTextProp={text} section />
      <Link href="/news" className={s.readMoreLink}>
        Читати більше
      </Link>
    </div>
  );
};

NewsCard.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
