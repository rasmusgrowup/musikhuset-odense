import Image from "next/image";
import styles from "@/styles/navbar.module.scss"
import LOGO_ICON from "@/public/Icon_logo.png"
import Link from "next/link";
import { useRouter } from 'next/router';
import {useState} from "react";

const Links = [
    {
        text: 'Forside',
        href: '/'
    },
    {
        text: 'Sortiment',
        href: '/sortiment'
    },
    {
        text: 'Værksted',
        href: '/vaerksted'
    },
    {
        text: 'Nyheder',
        href: '/nyheder'
    },
    {
        text: 'Om os',
        href: '/om-os'
    },
    {
        text: 'Kontakt os',
        href: '/kontakt-os'
    }
]

export default function Navbar() {
    const router = useRouter();
    const [menuVisible, setMenuVisible] = useState(false);

    //console.log(router.pathname)
    return (
        <nav className={styles.nav}>
            <div className={styles.main}>
                <div className={styles.logo}>
                    <div><Image src={LOGO_ICON} alt="Logo ikon" quality='100'/></div>
                    <h1>
                        <strong>Musikhuset-Odense</strong><br />
                        Instrumenter<br />
                        Salg og Reparation
                    </h1>
                </div>
                <div className={styles.mobileMenuBtn} onClick={() => setMenuVisible(!menuVisible)}>
                    {menuVisible ? "Luk" : "Menu"}
                </div>
                <div className={ menuVisible ? `${styles.menuWrapper} ${styles.visible}` : `${styles.menuWrapper} ${styles.notVisible}`}>
                    <div className={styles.menu}>
                        <div className={styles.menuContainer}>
                            { Links && Links.map((link, i) => (
                                <div
                                    className={ router.pathname === link.href ? `${styles.item} ${styles.active}` : `${styles.item}`}
                                    key={i}
                                    onClick={() => setMenuVisible(false)}
                                >
                                    <Link href={link.href}>{link.text}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.flex}><span>Mandag-fredag</span><span>10.00-17.30</span></div>
                        <div className={styles.flex}><span>Lørdag</span><span>10.00-14.00</span></div>
                        { /* <div className={styles.flex}><span>Søndag / helligdage</span><span>Lukket</span></div> */ }
                        <div className={`${styles.flex} ${styles.mt}`}><span>Tlf.: </span><Link href='tel:+4540165490'>+45 4016 5490</Link></div>
                        <div className={styles.flex}><span>Mail: </span><Link href='mailto:cv@musikhusetodense.dk'>cv@musikhusetodense.dk</Link></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}