import PropTypes from 'prop-types';
import Telegram from 'public/icons/soctelegram.svg';
import Facebook from 'public/icons/socfacebook.svg';
import Youtube from 'public/icons/socyoutube.svg';
import Instagram from 'public/icons/socinstagram.svg';
import links from 'src/data/socialsLinks.json';
import * as st from './Socials.module.css';

export const Socials = ({ component = 'panel' }) => {
  const listClass = {
    footer: st.listFooter,
    panel: st.listPanel,
    mobile: st.listMobile,
  };
  const itemClass = {
    footer: st.itemLinkFooter,
    panel: st.itemLinkPanel,
    mobile: st.itemLinkMobile,
  };
  return (
    <>
      <ul className={listClass[component]}>
        <li className={st.item}>
          <a
            href={links[0].telegram}
            target="_blank"
            rel="noreferrer noopener nofollow"
            className={itemClass[component]}
            aria-label="Телеграм"
          >
            <Telegram className={st.imgIcon} />
          </a>
        </li>
        <li className={st.item}>
          <a
            href={links[0].facebook}
            target="_blank"
            rel="noreferrer noopener nofollow"
            className={itemClass[component]}
            aria-label="Фейсбук"
          >
            <Facebook className={st.imgIcon} />
          </a>
        </li>
        <li className={st.item}>
          <a
            href={links[0].youtube}
            target="_blank"
            rel="noreferrer noopener nofollow"
            className={itemClass[component]}
            aria-label="Ютуб"
          >
            <Youtube className={st.imgIcon} />
          </a>
        </li>
        <li className={st.item}>
          <a
            href={links[0].instagram}
            target="_blank"
            rel="noreferrer noopener nofollow"
            className={itemClass[component]}
            aria-label="Інстаграм"
          >
            <Instagram className={st.imgIcon} />
          </a>
        </li>
      </ul>
    </>
  );
};

Socials.propTypes = {
  component: PropTypes.string,
};
