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
            {props.text && <div className={`${type.p} ${sections.p}`} dangerouslySetInnerHTML={{__html: `${props.text.html}`}}/>}
            {props.cta &&<Linker key={i} href={props.cta.href} text={props.cta.ctaText} arrow={'true'}/>}
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

function ImageContainer({ image, i }) {
    return (
        <div className={sections.img}>
            <Image
                src={image.url}
                alt={image.alt}
                width={'1000'}
                height={'700'}
                quality='100'
                priority={ i === 0 }
                sizes="
                    (max-width: 844px) 100vw,
                    50vw"
            />
        </div>
    )
}

export default function Half({ section, i }) {
    return (
        <section key={i} className={section.align ? `${sections.half} ${sections.left}` : `${sections.half} ${sections.right}`}>
            { section.align
                ? <><Heading props={section} i={i} /><ImageContainer image={section.image} i={i} /></>
                : <><ImageContainer image={section.image} i={i} /><Heading props={section} i={i} /></>
            }
        </section>
    )
}