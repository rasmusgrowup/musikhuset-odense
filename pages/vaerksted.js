import SectionRenderer from "@/components/Sections/SectionRenderer";

const Sections = [{
    type: 'half',
    align: 'right',
    heading: 'Reparation og justering af musikinstrumenter',
    image: {
        url: '/Musikhuset-Odense-282.jpg',
        height: 1432,
        width: 1000
    },
    text: [
        'Claus Christiansen reparerer musikinstrumenter i vores værksted i Odense C. Vi kan både servicere nye og gamle instrumenter, omend der skal kigges på justering, reperation eller intonation af strengeinstrumenter, eller udskiftning af elektronik i pedaler, pickupper og lignende.',
        'Kommer du forbi butikken, giver vi et uforpligtende tilbud på reperation eller justering af dit instrument.',
    ],
    cta: [
        {
            type: 'link',
            href: 'tel:+4529107940',
            text: 'Kontakt værkstedet på: +45 2910 7940'
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