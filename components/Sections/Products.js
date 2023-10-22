import sections from "@/styles/sections.module.scss";
import type from "@/styles/type.module.scss";
import Image from "next/image";
import styles from "@/styles/layout.module.scss";
import Linker from "@/components/Linker";

export default function Products({section, i}) {
    return (
        <>
            <section key={i} className={sections.products}>
                {i === 0
                    ? <h1 className={`${type.h1} ${sections.h1}`}>{section.heading}</h1>
                    : <h2 className={`${type.h2} ${sections.h2}`}>{section.heading}</h2>
                }
                <h3 className={`${type.h3} ${sections.h3}`}>{section.smallHeading}</h3>
                <div className={sections.images}>
                    { section.images && section.images.map((image, i) => (
                        <div key={i} className={sections.img}>
                            <Image src={image.url} alt='Alt text' width={image.width} height={image.height}/>
                        </div>
                    ))}
                </div>
                {section.text && <div className={`${type.p} ${sections.p}`} dangerouslySetInnerHTML={{__html: `${section.text.html}`}}/>}
                {section.cta &&<Linker key={i} href={section.cta.href} text={section.cta.ctaText} arrow={'true'}/>}
            </section>
        </>
    )
}