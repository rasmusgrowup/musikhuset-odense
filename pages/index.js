import Image from 'next/image'
import styles from '@/styles/layout.module.scss'

import ALTA from '@/public/brands/Admira-Logo.png'
import GEWA from '@/public/brands/Gewa-Guitars-Logo.png'
import HOFNER from '@/public/brands/Hofner_Logo.png'
import IBANEZ from '@/public/brands/Ibanez-Logo.png'
import ORTEGA from '@/public/brands/Ortega-Guitars-Logo.png'
import SANTANA from '@/public/brands/Santana-Logo.png'
import WALDEN from '@/public/brands/Walden_logo.png'
import TYMA from '@/public/brands/Tyma-Logo.png'
import TANGLEWOOD from '@/public/brands/Tanglewood_logo.png'
import GOLDTONE from '@/public/brands/Goldtone_logo.jpg'
import BEATON from '@/public/brands/Beaton_Logo.png'
import STERLING from '@/public/brands/Sterling_Logo.png.webp'
import FIDELIUS from '@/public/brands/fidelius.webp'
import DADDARIO from '@/public/brands/Daddario_Logo.jpg'
import LARSEN from '@/public/brands/Larsen_Logo.png'
import ACUS from '@/public/brands/Acus_Logo.png'
import ERNIE from '@/public/brands/Ernie-Ball-logo.png'
import CARL from '@/public/brands/Carl-Martin_Logo.png'
import KONIG from '@/public/brands/Koenig_meyer_Logo.png'
import CASIO from '@/public/brands/Casio_Logo.png'
import PEAVEY from '@/public/brands/Peavey_logo.png'
import ELECTRO from '@/public/brands/Electro-Harmonix-logo.jpeg'
import CORDIAL from '@/public/brands/Cordial_Logo.png'
import VOX from '@/public/brands/Vox_Logo.jpg'
import BLACKSTAR from '@/public/brands/Blackstart_Logo.png'
import NUX from '@/public/brands/Nux_Logo.png'
import ASHBURY from '@/public/brands/Ashbury_Logo.jpg'
import DG from '@/public/brands/DG-electronics-logo.jpg'
import THOMASTIK from '@/public/brands/Thomastik_Logo.png'
import PIRASTRO from '@/public/brands/Pirastro.jpg'
import SHUBB from '@/public/brands/Shubb_logo.png'
import MXR from '@/public/brands/MXR_Logo.png'
import DUNLOP from '@/public/brands/DUNLOP_Logo.png'
import GODIN from '@/public/brands/Godin_Logo.png'
import VANDOREN from '@/public/brands/Vandoren_Logo.jpg'
import EVERDEEN from '@/public/brands/Everdeen_Logo.jpg'

import SectionRenderer from "@/components/Sections/SectionRenderer";
import {getPage} from "@/lib/hygraph";
import Meta from "@/components/Meta";

export async function getStaticProps() {
    const {page} = await getPage("forside");

    return {
        props: {
            page
        },
    }
}

export default function Home({page}) {

    return (
        <>
            <Meta description={page.pageDescription}/>
            <SectionRenderer sections={page.sections} />
            <section className={styles.brands}>
                <div className={styles.inner}>
                    <div className={styles.img}><Image src={ALTA} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={GEWA} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={HOFNER} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={IBANEZ} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={ORTEGA} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={SANTANA} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={WALDEN} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={TYMA} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={TANGLEWOOD} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={GOLDTONE} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={BEATON} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={STERLING} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={FIDELIUS} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={DADDARIO} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={LARSEN} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={ACUS} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={ERNIE} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={CARL} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={KONIG} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={CASIO} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={PEAVEY} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={ELECTRO} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={CORDIAL} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={VOX} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={BLACKSTAR} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={NUX} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={ASHBURY} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={DG} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={THOMASTIK} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={PIRASTRO} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={SHUBB} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={MXR} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={DUNLOP} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={GODIN} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={VANDOREN} alt='LOGO' /></div>
                    <div className={styles.img}><Image src={EVERDEEN} alt='LOGO' /></div>
                </div>
            </section>
        </>
    )
}
