import styles from "./footer.module.css"

export default function Footer(props){
    return(
        <div className={styles.fixed}>
        <div className={styles.footer}>
            <div className={styles.track}>
            <img className={styles.img} src={props.img}/>
            <div className={styles.info}>
                <p>{props.name}</p>
                <p>{props.avatar}</p>
            </div>
            </div>
            <div className={styles.control}>
            {props.children}
            </div>
        </div>
        <audio src={props.music} autoPlay></audio>
        </div>
    )

}