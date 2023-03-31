import sections from "@/styles/sections.module.scss";
import type from "@/styles/type.module.scss";
import Image from "next/image";

export default function FullWidth({ section, i }) {
    return (
        <section key={i} className={sections.fullWidth}>
            { i === 0
                ? <h1 className={`${type.h1} ${sections.h1}`}>{section.heading}</h1>
                : <h2 className={`${type.h2} ${sections.h2}`}>{section.heading}</h2>
            }
            { section.image &&
                <div className={sections.img}>
                    <Image src={section.image.url} alt={section.image.alt} priority={i === 0} quality='100'/>
                </div>
            }
            { section.text.map((text, i) => (
                <p className={`${type.p} ${sections.p}`} key={i}>{text}</p>
            ))}
        </section>
    )
}