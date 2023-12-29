import styles from './main.module.css'
import stars from '../../img/stars-wrapper.png'
export const Main = () => {
    return (
        <main>
            <div className={styles.cont}>
                <img src={stars} alt="stars" className={styles.stars}/>
                <h1 className={styles.main_text}>Hotel <br /> "IceBerg"</h1>
                <button className={styles.fast_book}>FAST BOOK</button>
            </div>
        </main>
    )
}