import styles from "../components/song.module.css"

export default function Song(props){
    return(
        <li className={styles.li}>
            <p>{props.name}</p>
            <p className={styles.hide}>{props.avatar}</p>
            <p className={styles.right}>{props.time}</p>            
        </li>
    )
}