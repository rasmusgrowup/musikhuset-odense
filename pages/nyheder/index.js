import SectionRenderer from "@/components/Sections/SectionRenderer";
import sections from '@/styles/sections.module.scss';
import type from "@/styles/type.module.scss";
import Image1 from '@/public/Musikhuset-Odense-251.jpg';
import Image2 from '@/public/Musikhuset-Odense-168.jpg';
import Image3 from '@/public/Musikhuset-Odense-413.jpg';

const News = [
    {
        type: 'news',
        heading: 'Vi har endelig fået en ny hjemmeside',
        image: {
            url: Image1,
            alt: 'Claus Vang fra Musikhuset-Odense'
        },
        text: [
            'Claus Christiansen reparerer musikinstrumenter i vores værksted i Odense C. Vi kan både servicere nye og gamle instrumenter, omend der skal kigges på justering, reperation eller intonation af strengeinstrumenter, eller udskiftning af elektronik i pedaler, pickupper og lignende.',
        ],
        cta: [
            {
                type: 'link',
                href: '/nyheder',
                text: 'Læs nyheden'
            }
        ]
    },
    {
        type: 'news',
        heading: 'Vi har endelig fået en ny hjemmeside',
        image: {
            url: Image2,
            alt: 'Elektriske guitarer i Musikhuset-Odense'
        },
        text: [
            'Claus Christiansen reparerer musikinstrumenter i vores værksted i Odense C. Vi kan både servicere nye og gamle instrumenter, omend der skal kigges på justering, reperation eller intonation af strengeinstrumenter, eller udskiftning af elektronik i pedaler, pickupper og lignende.',
        ],
        cta: [
            {
                type: 'link',
                href: '/nyheder',
                text: 'Læs nyheden'
            }
        ]
    },
    {
        type: 'news',
        heading: 'Vi har endelig fået en ny hjemmeside',
        image: {
            url: Image3,
            alt: 'Spanske guitarer i Musikhuset-Odense'
        },
        text: [
            'Claus Christiansen reparerer musikinstrumenter i vores værksted i Odense C. Vi kan både servicere nye og gamle instrumenter, omend der skal kigges på justering, reperation eller intonation af strengeinstrumenter, eller udskiftning af elektronik i pedaler, pickupper og lignende.',
        ],
        cta: [
            {
                type: 'link',
                href: '/nyheder',
                text: 'Læs nyheden'
            }
        ]
    }
]

export default function Page() {
    return (
        <section className={sections.newsSection}>
            <h1 className={`${type.h1} ${sections.h1}`}>Nyheder</h1>
            <div className={sections.newsContainer}>
                <SectionRenderer sections={News} />
            </div>
        </section>
    )
}