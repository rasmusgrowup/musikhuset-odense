import sections from "@/styles/sections.module.scss";
import type from "@/styles/type.module.scss";
import Image from "next/image";
import Moment from "react-moment";
import 'moment/locale/da';

export default function FullWidth({ section, i }) {
    return (
        <section key={i} className={sections.fullWidth}>
            {section.heading && i === 0
                ? <h1 className={`${type.h1} ${sections.h1}`}>{section.heading}</h1>
                : <h2 className={`${type.h2} ${sections.h2}`}>{section.heading}</h2>
            }
            { section.image &&
                <div className={sections.img}>
                    <Image src={section.image.url} alt={section.image.altText} priority={i === 0} width={section.image.width} height={section.image.height} quality='100'/>
                </div>
            }
            {section.text && <div className={`${type.p} ${sections.p}`} dangerouslySetInnerHTML={{__html: `${section.text.html}`}} />}
            {section.createdAt && <div className={`${type.p} ${sections.p}`} style={{ opacity: '0.5'}}>Udgivet d. <Moment date={section.createdAt} locale='da' format='ll'/></div>}
        </section>
    )
}