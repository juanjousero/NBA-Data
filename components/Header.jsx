import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header () {
    return (
        <div className={styles.container}> 
            <Link href='/'>
                <div className={styles.logo}>
                    <Image src="/NBA-Logo.png"
                        width={128}
                        height={70}/>
                </div>
            </Link>
            <nav className={styles.navBar}>
                <ul>
                    <Link href='/home'><li>Home</li></Link>
                    <Link href='/games'><li>Games</li></Link>
                    <Link href="/teams"><li>Teams</li></Link>
                </ul>
            </nav>

        </div>
    )
}