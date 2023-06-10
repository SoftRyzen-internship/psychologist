import Telegram from 'public/icons/soctelegram.svg';
import Facebook from 'public/icons/socfacebook.svg';
import Youtube from 'public/icons/socyoutube.svg';
import Instagram from 'public/icons/socinstagram.svg';
import * as st from './Socials.module.css';

export const Socials = ({ color = '#2361ab', direction = 'row' }) => {
  const iconStyle = {
    color: color,
    flexDirection: direction,
  };
  return (
    <>
      <ul className={st.list} style={iconStyle}>
        <li className={st.item}>
          <a href="#" target="_blank" rel="noreferrer noopener">
            <Telegram className={st.imgIcon} />
          </a>
        </li>
        <li className={st.item}>
          <a href="#" target="_blank" rel="noreferrer noopener">
            <Facebook className={st.imgIcon} />
          </a>
        </li>
        <li className={st.item}>
          <a href="#" target="_blank" rel="noreferrer noopener">
            <Youtube className={st.imgIcon} />
          </a>
        </li>
        <li className={st.item}>
          <a href="#" target="_blank" rel="noreferrer noopener">
            <Instagram className={st.imgIcon} />
          </a>
        </li>
      </ul>
    </>
  );
};
