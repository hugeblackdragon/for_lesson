import Link from 'next/link'
import styles from './fixheader.module.css'
import Wrapper from './wrapper.js'

export default function Fixheader(){
    return(
        <div>
            <Link href='/'><a>
                    <img className={styles.img}
                    src="images/logo_red.5761dbf0.svg"
                    />
                </a>
            </Link>
            <div className={styles.wrapper}>
            <Wrapper></Wrapper>
            </div>
            <input className={styles.search} type='text'/>
            <button className={styles.button}>
                <img
                src="images/search_icon_red.8cddc3e5.svg"
                />  
            </button>
        </div>

    )
}