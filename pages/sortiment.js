import SectionRenderer from "@/components/Sections/SectionRenderer";
import Shop from '@/public/Musikhuset-Odense-168.jpg'

const Sections = [
    {
        type: 'half',
        align: 'right',
        heading: 'Lokal instrumentforretning, i hjertet af Odense',
        image: {
            url: Shop,
            alt: 'Musikhuset-Odense'
        },
        text: [
            'I vores sortiment finder du et bredt udvalg af elektriske og akkustiske guitarer, violiner og celli — også i venstrehåndede, 1/2, 3/4 og 1/4 modeller — samt et særligt udvalg af alternative folkeinstrumenter og specialinstrumenter.',
            'Vi har desuden et godt udvalg af markedets bedste strenge, buer, slagtøjstilbehør, nodebøger, pedaler og forstærkere.',
            'Vi inviterer dig ned forbi butikken for at afprøve dit nye instrument — kun sådan ved du, om kemien mellem dig og instrument er tilstede. Inden da, kan du læse mere om vores sortiment herunder.',
        ],
        cta: [
            {
                type: 'link',
                href: 'tel:+4540165490',
                text: 'Kontakt os her: +45 4016 5490'
            }
        ]
    },
    {
        type: 'bullets',
        heading: 'Instrumentforretning, med et bredt og nøje udvalgt sortiment af speciel,- strenge- og strygerinstrumenter',
        subheader:
            'Herunder kan du læse mere om vores brede sortiment. Vi inviterer dig ' +
            'ned i butikken for at føle og afprøve instrumenterne, og for at se, hvad ' +
            'vi har på lager. Vi har ikke resurser til at drive en webshop — og vil desuden ' +
            'heller ikke sælge instrumenter online — så du er velkommen til at kigge ned i butikken, ' +
            'for at se det aktuelle udvalg. Der er altid kaffe på kanden.',
        inners: [
            {
                inner: 'Strengeinstrumenter',
                content: [
                    {
                        heading: 'Guitarer — Akkustiske, elektriske, spanske og western',
                        text:
                            <p>
                                I vores sortiment af instrumenter, finder du et bredt udvalg af <strong>elektriske</strong> og akkustiske guitarer — også til venstrehåndede musikere — akkustiske og elektriske violiner og celi, samt et særligt udvalg af alternative folkeinstrumenter og specialinstrumenter.
                            </p>
                    },
                    {
                        heading: 'Basguitarer — Akkustiske og elektriske',
                        text:
                            <p>
                                I vores sortiment af instrumenter, finder du et bredt udvalg af elektriske og akkustiske guitarer — også til venstrehåndede musikere — akkustiske og elektriske violiner og celi, samt et særligt udvalg af alternative folkeinstrumenter og specialinstrumenter.
                            </p>
                    },
                    {
                        heading: 'Guitartilbehør — Forstærkere, strenge, kabler, pedaler, kasser m.m.',
                        text:
                            <p>
                                I vores sortiment af instrumenter, finder du et bredt udvalg af elektriske og akkustiske guitarer — også til venstrehåndede musikere — akkustiske og elektriske violiner og celi, samt et særligt udvalg af alternative folkeinstrumenter og specialinstrumenter.
                            </p>
                    },
                    {
                        heading: 'Folk — Mandolin, banjo, ukulele, tilbehør',
                        text:
                            <p>
                                I vores sortiment af instrumenter, finder du et bredt udvalg af elektriske og akkustiske guitarer — også til venstrehåndede musikere — akkustiske og elektriske violiner og celi, samt et særligt udvalg af alternative folkeinstrumenter og specialinstrumenter.
                            </p>
                    },
                ]
            },
            {
                inner: 'Strygerinstrumenter',
                content: [
                    {
                        heading: 'Violiner — Akkustiske og elektriske',
                        text:
                            <p>
                                I vores sortiment af instrumenter, finder du et bredt udvalg af elektriske og akkustiske guitarer — også til venstrehåndede musikere — akkustiske og elektriske violiner og celi, samt et særligt udvalg af alternative folkeinstrumenter og specialinstrumenter.
                            </p>
                    },
                    {
                        heading: 'Celi — Akkustiske og elektriske',
                        text:
                            <p>
                                I vores sortiment af instrumenter, finder du et bredt udvalg af elektriske og akkustiske guitarer — også til venstrehåndede musikere — akkustiske og elektriske violiner og celi, samt et særligt udvalg af alternative folkeinstrumenter og specialinstrumenter.
                            </p>
                    },
                    {
                        heading: 'Stryger tilbehør — Strenge, buer, tasker, kasser m.m.',
                        text:
                            <p>
                                I vores sortiment af instrumenter, finder du et bredt udvalg af elektriske og akkustiske guitarer — også til venstrehåndede musikere — akkustiske og elektriske violiner og celi, samt et særligt udvalg af alternative folkeinstrumenter og specialinstrumenter.
                            </p>
                    }
                ]
            },
            {
                inner: 'Andet',
                content: [
                    {
                        heading: 'Blæs og tilbehør',
                        text:
                            <p>
                                I vores sortiment af instrumenter, finder du et bredt udvalg af elektriske og akkustiske guitarer — også til venstrehåndede musikere — akkustiske og elektriske violiner og celi, samt et særligt udvalg af alternative folkeinstrumenter og specialinstrumenter.
                            </p>
                    },
                    {
                        heading: 'Digitalpiano og tilbehør',
                        text:
                            <p>
                                I vores sortiment af instrumenter, finder du et bredt udvalg af elektriske og akkustiske guitarer — også til venstrehåndede musikere — akkustiske og elektriske violiner og celi, samt et særligt udvalg af alternative folkeinstrumenter og specialinstrumenter.
                            </p>
                    },
                    {
                        heading: 'Andet tilbehør — Kabler, mikrofoner, slagtøjstilbehør',
                        text:
                            <p>
                                I vores sortiment af instrumenter, finder du et bredt udvalg af elektriske og akkustiske guitarer — også til venstrehåndede musikere — akkustiske og elektriske violiner og celi, samt et særligt udvalg af alternative folkeinstrumenter og specialinstrumenter.
                            </p>
                    }
                ]
            }
        ]
    }
]

export default function Page() {
    return (
        <>
            <SectionRenderer sections={Sections} />
        </>
    )
}