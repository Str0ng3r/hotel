import styles from './headersect.module.css'
import telegram from '../../img/telegram.png'
import vk from '../../img/vk.png'
import logo from '../../img/booking-logo.png'
export const Headersect = () => {
  return (
    <header>
      <div className={styles.cont}>
        <img src={logo} alt="logo" className={styles.logo} />
        <ul className={styles.nav}>
          <li className={styles.nav_teg}>Main</li>
          <li className={styles.nav_teg}>Apartments</li>
          <li className={styles.nav_teg}>About</li>
          <li className={styles.nav_teg}>Transfer</li>
          <li className={styles.nav_teg}>Contacts</li>
        </ul>
        <div className={styles.socialcont}>
            <img src={telegram} alt="telegramm" />
            <img src={vk} alt="vkontakte" />
        </div>
        <div className={styles.cont_book}>
            <button>Book</button>
        </div>
      </div>
    </header>
  );
};
