import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.cont}>
        <h2 className={styles.best_deals}>Best deals</h2>
        <ul className={styles.list_deals}>
          <li className={styles.li_deals}>
            <img className={styles.mini_img} src="rooms" alt="room" />
            <div className={styles.mini_wrapper}>
                <h4>Premium King</h4>
              <h3></h3>
            </div>
          </li>
          <li className={styles.li_deals}>
            <img className={styles.mini_img} src="rooms" alt="room" />
            <div className={styles.mini_wrapper}>
                <h4>Exclusive King</h4>
              <h3></h3>
            </div>
          </li>
          <li className={styles.li_deals}>
            <img className={styles.mini_img} src="rooms" alt="room" />
            <div className={styles.mini_wrapper}>
                <h4>Star King</h4>
              <h3></h3>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};
