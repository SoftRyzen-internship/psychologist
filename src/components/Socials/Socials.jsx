import Telegram from 'public/icons/soctelegram.svg';
import Facebook from 'public/icons/socfacebook.svg';
import Youtube from 'public/icons/socyoutube.svg';
import Instagram from 'public/icons/socinstagram.svg';
import * as st from './Socials.module.css';

export const Socials = ({ component = 'panel' }) => {
  const listClass = {
    footer: st.listFooter,
    panel: st.listPanel,
    mobile: st.listMobile,
  };
  const itemClass = {
    footer: st.itemFooter,
    panel: st.itemPanel,
    mobile: st.itemMobile,
  };
  const links = {
    telegram: 'https://t.me/+380677397931',
    facebook: 'https://www.facebook.com/profile.php?id=100001683785591',
    youtube:
      'https://www.youtube.com/channel/UCx0aFiPFq_PMaz9V0MX7Yng?app=desktop&fbclid=PAAaajmSKSxY6Mq05SX2LqsqYgKqSlTyw75XYD-bYfTjxGw6w0ke3N7zacXu0_aem_th_Aflr_5AUfa6dZ7d5mX5vX1X5LAvW3L4yMJ276euRuH-N7dtP1X6gTs1opIQrJkBwewc',
    instagram:
      'https://instagram.com/psychologist.sulaeva.julia?igshid=MjEwN2IyYWYwYw==',
  };
  return (
    <>
      <ul className={listClass[component]}>
        <li className={itemClass[component]}>
          <a href={links.telegram} target="_blank" rel="noreferrer noopener">
            <Telegram className={st.imgIcon} />
          </a>
        </li>
        <li className={itemClass[component]}>
          <a href={links.facebook} target="_blank" rel="noreferrer noopener">
            <Facebook className={st.imgIcon} />
          </a>
        </li>
        <li className={itemClass[component]}>
          <a href={links.youtube} target="_blank" rel="noreferrer noopener">
            <Youtube className={st.imgIcon} />
          </a>
        </li>
        <li className={itemClass[component]}>
          <a href={links.instagram} target="_blank" rel="noreferrer noopener">
            <Instagram className={st.imgIcon} />
          </a>
        </li>
      </ul>
    </>
  );
};
