import styles from "./search.module.css"
import Link from 'next/link'

export default function Search(){
    return(
        <div>
            <div>
                <Link href="/"><a>
                    <img
                    src='images/logo.6b93cb47.svg' 
                    />
                </a></Link>
            </div>
                <div>
                    <input className={styles.search} type='text'/>
                    <button className={styles.button_2}>
                        <img
                        src="images/search_icon.3dd08573.svg"
                        />  
                    </button>
            </div>
        </div>
    )
}