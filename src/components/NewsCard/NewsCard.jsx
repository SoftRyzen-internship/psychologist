import Image from "next/image";
import NewsText from "../NewsText/NewsText";
import s from './NewsCard.module.css';
import Link from "next/link";

export const NewsCard = ({ image, title, text}) => {
  return (
    <div>
      <Image src={image.url} alt={image.alt} width={592} height={396} />
      <h3 className={s.newsTitle}>{title}</h3>
      <NewsText newsTextProp={text} section />
      <Link href="/news" className={s.readMoreLink}>Читати більше</Link>
    </div>
  );
};
