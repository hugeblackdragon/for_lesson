import styles from "./mhead.module.css"

export default function Mhead(props){
    return(
        <div className={styles.container}>
            <img src={props.img} className={styles.img}/>
            <div className={styles.information}>
                <div>
                <p className={styles.center}>{props.name}</p>
                <p className={styles.hide}>
                <img className={styles.avatar_img}  src={props.av_img} />
                {props.av_name}
                </p>
                <p className={styles.hide}>{props.year} {props.time} {props.song_account}</p>
                </div>
                <div>
                    <i> &nbsp;Play all</i>
                    <i> &nbsp;Add to</i>
                    <i>&nbsp;&nbsp;More</i>
                </div>
            </div>      
        </div>
    )
}