import SectionRenderer from "@/components/Sections/SectionRenderer";
import ClausVang from '@/public//Musikhuset-Odense-122.jpg'
import ClausHolm from '@/public//Musikhuset-Odense-150.jpg'
import {getPage} from "@/lib/hygraph";

const Sections = [{
    type: 'fourths',
    first: [{
        heading: 'Claus Vang',
        image: {
            url: ClausVang,
            alt: 'Claus Vang'
        },
        text: [
            'Claus Vang er butiksindehaver, står for den daglige drift i butikken, og har været udøvende musiker gennem 5 årtier.',
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
            'Claus Christiansen arbejder på værkstedet, hvor han passioneret reparerer og justerer instrumenter og elektronik.',
        ]
    }],
}]

export async function getStaticProps() {
    const {page} = await getPage("kontakt-os");

    return {
        props: {
            page
        },
    }
}

export default function Page({ page }) {
    console.log(page)
    return (
        <>
            <SectionRenderer sections={page.sections} />
        </>
    )
}