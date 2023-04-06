import SectionRenderer from "@/components/Sections/SectionRenderer";
import Shop from '@/public//Musikhuset-Odense-101-2.jpg'

const Sections = [{
    type: 'fullwidth',
    align: 'left',
    heading: 'Om Musikhuset-Odense',
    image: {
        url: Shop,
        alt: 'Claus Vang, fra Musikhuset-Odense'
    },
    text: [
        'Musikhuset-Odense er en noget så sjældent som en "rigtig" musikinstrumentforretning. Claus Vang er indehaver, og har været med til at starte Musikhuset i 2012.',
        "Indtil da var han nok mest kendt i folk-kredse, spiller selv violin, mandolin m.m. Claus' rolle i Musikhuset-Odense er primært kundebetjening, varebestilling og det store forkromede overblik.",
        'På værkstedet reparerer Claus Christiansen, som har en fortid i Musik Danmark, keyboards, elektronik og guitarer. Han er i øvrigt en fremragende keyboardspiller.',
        'Fælles for os begge er, at vi er passionerede musikmennesker – som ikke kan lade være med at gøre det, som vi mener er vigtigt for Odenses musikliv, nemlig at videreføre en tradition med at have en rigtig instrumentbutik i landets 3. største by.',
        'I disse tider, hvor megen handel stille og roligt flytter sig over til nethandel, trodser vi tendensen, simpelthen fordi vi ikke tror, at musikinstrumenter er noget man kan købe før man har haft det i hænderne – og derved fundet ud af, om ”kemien” mellem instrument og én selv passer.',
        'Derfor kan du heller ikke handle online hos Musikhuset — det lader vi andre om.',
        'Udover vores 1. klasses instrumentværksted har vi nu fået indrettet en flot og velassorteret butik, med hovedvægt på de akustiske strengeinstrumenter; el-guitarer & basser har vi dog også et fint udvalg i. Lidt digitalkeyboards har også sneget sig ind.',
        'Uanset hvilket instrument du spiller har vi også et endog meget stort udvalg i tilbehør. Strenge, buer, skulderstøtter, nodestativer, nodelamper, ventilolie, sordiner, blæseblade, skind, percussion, trommestikker, tasker, etuier, kabler, remme, forstærkere  m.m.',
        'Kig ind — du bliver ikke skuffet.'
    ]
}]

export default function Page() {
    return (
        <>
            <SectionRenderer sections={Sections} />
        </>
    )
}