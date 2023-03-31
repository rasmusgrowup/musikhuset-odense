import sections from "@/styles/sections.module.scss";
import type from "@/styles/type.module.scss";
import Image from "next/image";
import Linker from "@/components/Linker";
import styles from "@/styles/layout.module.scss";
import STAR from "@/public/star.png";

function Heading({ props, i }) {
    return (
        <div className={sections.heading}>
            { i === 0
                ? <h1 className={`${type.h1} ${sections.h1}`}>{props.heading}</h1>
                : <h2 className={`${type.h2} ${sections.h2}`}>{props.heading}</h2>
            }
            { props.text.map((text, i) => (
                <p className={`${type.p} ${sections.p}`} key={i}>{text}</p>
            ))}
            { props.cta && props.cta.map((cta, i) => (
                <Linker key={i} href={cta.href} text={cta.text} arrow={cta.arrow}/>
            ))}
            { props.review &&
                <div className={styles.review}>
                    <p className={styles.p}>4.9 i Google Reviews</p>
                    <div className={styles.stars}>
                        <Image src={STAR} alt='star'/>
                        <Image src={STAR} alt='star'/>
                        <Image src={STAR} alt='star'/>
                        <Image src={STAR} alt='star'/>
                        <Image src={STAR} alt='star'/>
                    </div>
                </div>
            }
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
                width={props.image.width}
                height={props.image.height}
            />
        </div>
    )
}

export default function Half({ section, i }) {
    return (
        <section key={i} className={section.align === 'left' ? `${sections.half} ${sections.left}` : `${sections.half} ${sections.right}`}>
            { section.align === 'left'
                ? <><Heading props={section} i={i} /><ImageContainer props={section} i={i} /></>
                : <><ImageContainer props={section} i={i} /><Heading props={section} i={i} /></>
            }
        </section>
    )
}