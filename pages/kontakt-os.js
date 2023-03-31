import SectionRenderer from "@/components/Sections/SectionRenderer";
import ClausVang from '@/public//Musikhuset-Odense-122.jpg'
import ClausHolm from '@/public//Musikhuset-Odense-150.jpg'

const Sections = [{
    type: 'fourths',
    first: [{
        heading: 'Claus Vang',
        image: {
            url: ClausVang,
            alt: 'Claus Vang'
        },
        text: [
            'Claus Vang er butiksindehaver, og musiker gennem mange år.',
        ],
        cta: [
        {
            type: 'link',
            href: 'tel:+4540165490',
            text: '+45 4016 5490'
        },
        {
            type: 'link',
            href: 'mailto:cv@musikhuset-odense.dk',
            text: 'cv@musikhuset-odense.dk'
        },
        ]
    }],
    second: [{
        heading: 'Claus Christiansen',
        image: {
            url: ClausHolm,
            alt: 'Claus Holm'
        },
        text: [
            'Claus Christiansen arbejder på værkstedet, hvor han passioneret reparerer og justerer instrumenter.',
        ],
        cta: [
            {
                type: 'link',
                href: 'tel:+4529107940',
                text: '+45 2910 7940'
            },
        ],
    }],
}]

export default function Page() {
    return (
        <>
            <SectionRenderer sections={Sections} />
        </>
    )
}