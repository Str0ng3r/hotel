import styles from "./footer.module.css";
import apart1 from '../../img/appartment1.png'
import apart2 from '../../img/appartment2.png'
import apart3 from '../../img/appartment3.png'
export const Footer = () => {
  return (
    <footer>
      <div className={styles.cont}>
        <h2 className={styles.best_deals}>Best deals</h2>
        <ul className={styles.list_deals}>
          <li className={styles.li_deals}>
            <img className={styles.mini_img} src={apart1} alt="room" />
            <div className={styles.mini_wrapper}>
                <h4 className={styles.hotel_text_name}>Premium King</h4>
              <h3 className={styles.price_text}>100$</h3>
              <button className={styles.button_book}>book</button>
            </div>
          </li>
          <li className={styles.li_deals}>
            <img className={styles.mini_img} src={apart2} alt="room" />
            <div className={styles.mini_wrapper}>
                <h4 className={styles.hotel_text_name}>Exclusive King</h4>
              <h3 className={styles.price_text}>200$</h3>
              <button className={styles.button_book}>book</button>
            </div>
          </li>
          <li className={styles.li_deals}>
            <img className={styles.mini_img} src={apart3} alt="room" />
            <div className={styles.mini_wrapper}>
                <h4 className={styles.hotel_text_name}>Star King</h4>
              <h3 className={styles.price_text}>300$</h3>
              <button className={styles.button_book}>book</button>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};
