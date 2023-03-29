import SectionRenderer from "@/components/Sections/SectionRenderer";
import sections from '@/styles/sections.module.scss'
import type from "@/styles/type.module.scss";

const News = [
    {
        type: 'news',
        heading: 'Vi har endelig fået en ny hjemmeside',
        image: {
            url: '/Musikhuset-Odense-251.jpg',
            height: 1432,
            width: 1000
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
            url: '/Musikhuset-Odense-168.jpg',
            height: 1432,
            width: 1000
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
            url: '/Musikhuset-Odense-413.jpg',
            height: 1432,
            width: 1000
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