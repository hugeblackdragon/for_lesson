import styles from "./movie.module.css"

export default function Movie(props){
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={props.img} className={styles.img} />
                <div className={styles.time}>
                    {props.time}
                </div>
            </div>
            <div className={styles.word}>
                <a>{props.content}</a><br/>
                {props.comment_amount}次观看
                <a>{props.author}</a>
            </div>
        </div>
    )
}