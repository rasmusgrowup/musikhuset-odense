import sections from '@/styles/sections.module.scss'
import type from "@/styles/type.module.scss";

export default function Bullets({ section, i }) {
    console.log(section)
    return (
        <section className={sections.bullets}>
            { i === 0
                ? <h1 className={`${type.h1} ${sections.h1}`}>{section.heading}</h1>
                : <h2 className={`${type.h2} ${sections.h2}`}>{section.heading}</h2>
            }
            {section.subheader && <div className={`${type.p} ${sections.subheader}`} dangerouslySetInnerHTML={{__html: `${section.subheader.html}`}}/>}
            {section.inners && section.inners.map((inner, i) => (
                <div key={i} className={sections.inner}>
                    <h3 className={`${type.h3} ${sections.h3}`}>{inner.heading}</h3>
                    {inner.content.map((c, i) => (
                        <div key={i} className={sections.content}>
                            <h4 className={`${type.h4} ${sections.h4}`}>{c.heading}</h4>
                            <div className={`${type.p} ${sections.bulletText}`}dangerouslySetInnerHTML={{__html: `${c.text.html}`}} />
                        </div>
                    ))}
                </div>
            ))}
        </section>
    )
}