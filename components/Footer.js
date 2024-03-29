import styles from '@/styles/footer.module.scss';
import type from '@/styles/type.module.scss';
import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

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

export default function Footer() {
    const router = useRouter();
    const mapUrl = 'https://www.google.dk/maps/place/st,+Overgade+52,+5000+Odense/@55.3979563,10.3917346,17z/data=!3m1!4b1!4m6!3m5!1s0x464d20071f7aa88b:0x58f6cbfa3cd8c1!8m2!3d55.3979563!4d10.3943095!16s%2Fg%2F11bw4nps1m?entry=ttu'

    return (
        <footer className={styles.main}>
            <div className={styles.top}>
                <div className={styles.about}>
                    <p className={styles.p}><strong>Om Musikhuset-Odense</strong></p>
                    <p className={styles.p}>Musikhuset-Odense er en af de førende instrumentforretninger i Danmark, med speciale i strenge- og strygerinstrumenter. Vi reparerer og justerer desuden instrumenter på vores værksted i butikken.</p>
                </div>
                <div className={styles.contact}>
                    <p className={type.p}><strong>Kontaktoplysninger</strong></p>
                    <p className={styles.name}>Claus Vang</p>
                    <Link href='tel:+4540165490'>+45 4016 5490</Link>
                    { /* <p className={styles.name}>Claus Christiansen</p>
                    <Link href='tel:+4529107940'>+45 2910 7940</Link> */ }
                    <p className={styles.name}>Bogholder</p>
                    <Link href='mailto:ebh@Musikhuset-Odense.dk'>ebh@musikhuset-odense.dk</Link>
                </div>
                <div className={styles.info}>
                    <p className={styles.p}><strong>Åbningstider</strong></p>
                    <div><span>Mandag-fredag</span><span>10.00-17.30</span></div>
                    <div><span>Lørdag</span><span>10.00-14.00</span></div>
                </div>
                <div className={styles.nav}>
                    <p className={styles.p}><strong>Navigation</strong></p>
                    { Links && Links.map((link, i) => (
                        <Link key={i} className={ router.pathname === link.href ? `${styles.active}` : ``} href={link.href}>{link.text}</Link>
                    ))}
                </div>
            </div>
            <div className={styles.bottom}>
                <div>©{new Date().getFullYear()} Musikhuset-Odense v/ Claus Vang</div>
                <div><Link href={mapUrl} target='_blank'>Overgade 52, 5000 Odense C</Link></div>
                <div>Udviklet af <Link href='https://rasmusholberg.dk' target='_blank'>rasmusholberg.dk</Link></div>
            </div>
        </footer>
    )
}