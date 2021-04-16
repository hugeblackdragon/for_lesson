import styles from "./footer.module.css"

export default function Footer(){
    return(<div>
            <div className={styles.left_footer}>
                <a>加入头条</a>
                <a>用户协议</a>
                <a>隐私政策</a>
                <a>廉洁举报</a>
                <a>媒体合作</a>
                <a>友情链接</a>
                <a>更多</a>
            </div>
            <div className={styles.right_footer}>
                北京字节跳动科技有限公司
                违法和不良信息举报：400-140-2108
                举报邮箱：jubao@toutiao.com
            </div>
           </div>
    )
}