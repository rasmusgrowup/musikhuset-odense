import Image from 'next/image'
import styles from '@/styles/layout.module.scss'
import ClausVang from '@/public/Musikhuset-Odense-251.jpg'
import SpanskeGuitarer from '@/public/Musikhuset-Odense-413.jpg'
import Violiner from '@/public/Musikhuset-Odense-190.jpg'
import ElektriskeGuitarer from '@/public/Musikhuset-Odense-171.jpg'
import Vaerksted from '@/public/Musikhuset-Odense-256.jpg'

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

const Sections = [
    {
        type: 'half',
        align: 'right',
        heading: 'Lokal instrumentforretning i centrum af odense',
        image: {
            url: ClausVang,
            alt: 'Claus Vang fra Musikehuset-Odense'
        },
        text: [
            'Med mange års erfaring i branchen er Musikhuset-Odense en af de førende instrumentforretninger i Danmark, med speciale i strenge- og strygerinstrumenter. Med vores helt særlige værksted og samarbejdspartnere er vi også med til at puste nyt liv i gamle instrumenter, der har tabt gnisten.'
        ],
        review: true
    },
    {
        type: 'products',
        heading: 'Stort udvalg af strenge- og strygerinstrumenter.',
        smallHeading: 'Samt tilbehør til slagtøj, blæs, strygere og guitarer.',
        images: [
            {
                url: SpanskeGuitarer,
                alt: 'Spanske Guitarer i Musikhuset-Odense'
            },
            {
                url: Violiner,
                alt: 'Akkustiske violiner i Musikhuset-Odense'
            },
            {
                url: ElektriskeGuitarer,
                alt: 'Elektriske Guitarer i Musikhuset-Odense'
            }
        ],
        text: [
            'Musikhuset-Odense er en af de førende instrumentforretninger i Danmark, med speciale i strenge- og strygerinstrumenter. I vores sortiment finder du et bredt udvalg af elektriske og akkustiske guitarer, violiner og celli — også i venstrehåndede, 1/2, 3/4 og 1/4 modeller — samt et særligt udvalg af alternative folkeinstrumenter og specialinstrumenter.',
            'Uanset hvilket instrument du spiller har vi også et endog meget stort udvalg i tilbehør. Strenge, buer, skulderstøtter, nodestativer, nodelamper, ventilolie, sordiner, blæserblade, skind, percussion, trommestikker, tasker, etuier, kabler, remme, forstærkere m.m.'
        ],
        cta: [
            {
                type: 'link',
                href: '/sortiment',
                text: 'Læs mere om vores sortiment',
            }
        ]
    },
    {
        type: 'half',
        align: 'left',
        heading: 'Reparation og justering af musikinstrumenter',
        image: {
            url: Vaerksted,
            alt: 'Claus fra værkstedet i Musikhuset-Odense'
        },
        text: [
            'Claus Christiansen reparerer musikinstrumenter i vores værksted i Odense C. Vi kan både servicere nye og gamle instrumenter, omend der skal kigges på justering, reperation eller intonation af strengeinstrumenter, eller udskiftning af elektronik i pedaler, pickupper og lignende.',
            'Kommer du forbi butikken, giver vi et uforpligtende tilbud på reperation eller justering af dit instrument.'
        ],
        cta: [
            {
                type: 'link',
                href: '/vaerksted',
                text: 'Læs mere om værkstedet',
                arrow: true
            }
        ]
    }
]

export default function Home() {
    return (
        <>
            <SectionRenderer sections={Sections} />
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
