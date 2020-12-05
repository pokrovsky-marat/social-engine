import preloader from "../../assets/pics/126.svg";
import styles from "./Preloader.module.css"
let Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader}/>
        </div>
    )
}
export default Preloader