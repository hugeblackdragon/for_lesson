import styles from './wrapper.module.css'

export default function Wrapper(){
    return(
        <div className={styles.wrapper}>
            <button>推荐</button>
            <button>热点</button>
            <a href="https://www.ixigua.com/">西瓜视频</a>
            <button>财经</button>
            <button>科技</button>
            <button>娱乐</button>
            <button>体育</button>
            <button>直播</button>
            <button>更多</button>
        </div>
)
}