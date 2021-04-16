//作为头条网页头部分也就是图片
import styles from "./layout.module.css"
import Link from 'next/link'
import Wrapper from './wrapper.js'
import Detail from './detail.js'
import Search from './search.js'
import Footer from './footer'
import Fixheader from "./fixheader"
import Movie from "./movie"

export default function Layout({children}){
    return (
        <div id="root">
            <div className={styles.container}>
                <div className={styles.fix_header}>
                    {/*这里是下滑后会出现的工具条*/}
                    <Fixheader></Fixheader>
                </div>
                <div>
                    <img 
                    src="images/earth_v2.jpeg"
                    className={styles.img}
                    />
                </div>
                <div className={styles.toutiao_header}>
                    <div className={styles.header_right}>    
                            上海 小雨 17度
                         <a>发布作品</a>
                        <button className={styles.button_1}>登录</button>
                    </div>
                    <div className={styles.header_left}>
                        <a>下载头条</a>
                        <a>关于头条</a>
                        <a>反馈</a>
                        <a>侵权投诉</a>

                    </div>
                </div>
                <div className={styles.search_container}>
                    <Search></Search>
                </div>
                <div className={styles.main_content}>
                    <div className={styles.left_container}>
                        <Wrapper></Wrapper>
                        {children}
                    </div>
                    <div className={styles.right_container}>
                        <div>
                            <Movie time="12:23" content="震惊！惊讶！什么！竟然！" 
                            author="哈哈"
                            comment_amount="23456" img="https://p6.toutiaoimg.com/img/tos-cn-i-0004/28fb56b807b149f3b4714166016e7a84~tplv-tt-cs0:640:360.jpg"></Movie>
                            <Movie time="12:23" content="震惊！惊讶！什么！竟然！" 
                            author="哈哈"
                            comment_amount="23456" img="https://p6.toutiaoimg.com/img/tos-cn-i-0004/28fb56b807b149f3b4714166016e7a84~tplv-tt-cs0:640:360.jpg"></Movie>
                            <Movie time="12:23" content="震惊！惊讶！什么！竟然！" 
                            author="哈哈"
                            comment_amount="23456" img="https://p6.toutiaoimg.com/img/tos-cn-i-0004/28fb56b807b149f3b4714166016e7a84~tplv-tt-cs0:640:360.jpg"></Movie>
                            <Movie time="12:23" content="震惊！惊讶！什么！竟然！" 
                            author="哈哈"
                            comment_amount="23456" img="https://p6.toutiaoimg.com/img/tos-cn-i-0004/28fb56b807b149f3b4714166016e7a84~tplv-tt-cs0:640:360.jpg"></Movie>
                            <Movie time="12:23" content="震惊！惊讶！什么！竟然！" 
                            author="哈哈"
                            comment_amount="23456" img="https://p6.toutiaoimg.com/img/tos-cn-i-0004/28fb56b807b149f3b4714166016e7a84~tplv-tt-cs0:640:360.jpg"></Movie>
                        </div>
                        <div className={styles.detail}>
                            <Detail></Detail>
                        </div>                       
                    </div>
                </div>
                <div className={styles.footer_wrapper}>
                    <Footer></Footer>
                </div>
                <div className={styles.toolbar}>
                </div>
            </div>
        </div>
    )
}