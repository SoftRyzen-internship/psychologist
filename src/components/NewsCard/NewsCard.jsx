import Image from "next/image";
import NewsText from "../NewsText/NewsText";

export const NewsCard = ({ image, title, text}) => {
  return (
    <div>
      <Image src={image.url} alt={image.alt} width={592} height={396} />
      <h3>{title}</h3>
      <NewsText newsTextProp={text} />
    </div>
  );
};
