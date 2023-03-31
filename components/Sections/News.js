import sections from "@/styles/sections.module.scss";
import type from "@/styles/type.module.scss";
import Image from "next/image";
import Linker from "@/components/Linker";

function Heading({ props, i }) {
    return (
        <div className={sections.heading}>
            { i === 0
                ? <h2 className={`${type.h2} ${sections.h2}`}>{props.heading}</h2>
                : <h3 className={`${type.h3} ${sections.h3}`}>{props.heading}</h3>
            }
            { props.text.map((text, i) => (
                <p className={`${type.p} ${sections.p}`} key={i}>{text.substring(0, 100)}...</p>
            ))}
            { props.cta && props.cta.map((cta, i) => (
                <Linker key={i} href={cta.href} text={cta.text} arrow/>
            ))}
        </div>
    )
}

function ImageContainer({ props, i }) {
    return (
        <div className={sections.img}>
            <Image
                src={props.image.url}
                alt={props.image.alt}
                quality='100'
                priority={ i === 0 }
            />
        </div>
    )
}

export default function News({ section, i }) {
    return (
        <>
            { i === 0 ?
                <div key={i} className={`${sections.inner} ${sections.newNews}`}>
                    <ImageContainer props={section} i={i} />
                    <Heading props={section} i={i} />
                </div>
                :
                <div key={i} className={`${sections.inner} ${sections.oldNews}`}>
                    <ImageContainer props={section} i={i} />
                    <Heading props={section} i={i} />
                </div>
            }
        </>
    )
}