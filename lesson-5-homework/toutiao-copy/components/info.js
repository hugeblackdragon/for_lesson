//本组件用来制定对应的新闻div
import styles from './info.module.css'

export default function Info(props){
    let img_1;
    if(props.has_img==="true"){
        img_1=(<div className={styles.img_position}>
            <img src={props.img_src} className={styles.img} />
        </div>
    )
    }

    return(
        <div className={styles.info}>
            <div className={styles.word}>
            <a className={styles.content}>{props.content}</a>
            <div className={styles.fonter}>
                    <a>{props.author}</a>
                    <a>{props.comment_amount}评论</a>
                    {props.time}
            </div>
            </div>
            {img_1}
        </div>

    )
}