import PropTypes from 'prop-types';
import classNames from 'classnames';
import { convertImage, toBase64 } from 'utils/blurDataURL';
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
        placeholder={blur}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          convertImage(1200, 748),
        )}`}
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
