import * as st from './Socials.module.css';
import Telegram from '../../../public/icons/soctelegram.svg';
import Facebook from '../../../public/icons/socfacebook.svg';
import Youtube from '../../../public/icons/socyoutube.svg';
import Instagram from '../../../public/icons/socinstagram.svg';

export const Socials = () => {
  return (
    <>
      <ul className={st.list}>
        <li className={st.item}>
          <a href="#">
            <Telegram className={st.imgIcon} />
          </a>
        </li>
        <li className={st.item}>
          <a href="#">
            <Facebook className={st.imgIcon} />
          </a>
        </li>
        <li className={st.item}>
          <a href="#">
            <Youtube className={st.imgIcon} />
          </a>
        </li>
        <li className={st.item}>
          <a href="#">
            <Instagram className={st.imgIcon} />
          </a>
        </li>
      </ul>
    </>
  );
};
