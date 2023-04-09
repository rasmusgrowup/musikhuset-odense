import SectionRenderer from "@/components/Sections/SectionRenderer";
import ClausHolm from '@/public/Musikhuset-Odense-282.jpg'

const Sections = [{
    type: 'half',
    align: 'right',
    heading: 'Reparation og justering af musikinstrumenter',
    image: {
        url: ClausHolm,
        alt: 'Claus Holm i værkstedet i Musikhuset-Odense'
    },
    text: [
        'Claus Christiansen reparerer musikinstrumenter i vores værksted. Vi kan både servicere nye og gamle instrumenter, uanset om der skal kigges på justering, reperation eller intonation af strengeinstrumenter, eller udskiftning af elektronik i pedaler, pickupper og lignende.',
        'Kommer du forbi butikken, giver vi et uforpligtende tilbud på reperation eller justering af dit instrument.',
    ],
    cta: [
        {
            type: 'link',
            href: 'tel:+4540165490',
            text: 'Kontakt butikken her'
        }
    ]
}]

export default function Page() {
    return (
        <>
            <SectionRenderer sections={Sections} />
        </>
    )
}