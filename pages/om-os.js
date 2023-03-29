import SectionRenderer from "@/components/Sections/SectionRenderer";

const Sections = [{
    type: 'fullwidth',
    align: 'left',
    heading: 'Om Musikhuset-Odense',
    image: {
        url: '/Musikhuset-Odense-101-2.jpg',
        height: 1067,
        width: 1600
    },
    text: [
        'Musikhuset-Odense er en noget så sjældent som en "rigtig" musikinstrumentforretning.',
        'I disse tider, hvor megen handel stille og roligt flytter sig over til nethandel, trodser vi tendensen, simpelthen fordi vi ikke tror, at musikinstrumenter er noget man kan købe før man har haft det i hænderne – og derved fundet ud af, om ”kemien” mellem instrument og én selv passer.',
        'Derfor kan du heller ikke handle online hos Musikhuset, - det lader vi andre om.',
        'Claus Vang er indehaver, og har været med til at starte musikhuset i 2012. – Indtil da var jeg nok mest kendt i folk-kredse, spiller selv violin, mandolin m.m. Min rolle i Musikhuset-Odense er primært kundebetjening , varebestilling og det store forkromede overblik.',
        'På værkstedet har jeg Claus Christiansen som har en fortid i Musik Danmark, og som reparerer keyboards, elektronik og guitarer. Han er i øvrigt en fremragende keyboardspiller.',
        'Fælles for os begge er, at vi er passionerede musikmennesker – som ikke kan lade være med at gøre det som vi mener er vigtigt for Odenses musikliv, nemlig at videreføre en tradition med at have en rigtig instrumentbutik i landets 3.største by.',
        'Udover vores 1.klasses instrumentværksted har vi nu fået indrettet en flot og velassorteret butik, med hovedvægt på de akustiske strengeinstrumenter; el-guitarer & basser har vi dog også et fint udvalg i. Lidt digitalkeyboards har også sneget sig ind.',
        'Uanset hvilket instrument du spiller har vi også et endog meget stort udvalg i tilbehør. Strenge, buer, skulderstøtter, ventilolie, dæmpere, mundstykker, skind, trommestikker, tasker, etuier, kabler, remme  m.m.',
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