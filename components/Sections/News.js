import sections from "@/styles/sections.module.scss";
import type from "@/styles/type.module.scss";
import Image from "next/image";
import Linker from "@/components/Linker";
import Moment from "react-moment";

function Heading({ props, i }) {
    return (
        <div className={sections.heading}>
            {props.createdAt && <div className={`${type.p} ${sections.p}`} style={{ opacity: '0.5'}}>D. <Moment date={props.createdAt} locale='da' format='ll'/></div>}
            { i === 0
                ? <h2 className={`${type.h2} ${sections.h2}`}>{props.heading}</h2>
                : <h3 className={`${type.h3} ${sections.h3}`}>{props.heading}</h3>
            }
            {props.text && <div className={`${type.p} ${sections.p}`} dangerouslySetInnerHTML={{__html: `${props.text.html.substring(0, 100)} ...`}}/>}
            {props.slug && <Linker href={`/nyheder/${props.slug}`} text={'Læs nyheden her'} arrow/>}
        </div>
    )
}

function ImageContainer({ props, i }) {
    return (
        <div className={sections.img}>
            <Image
                src={props.image.url}
                alt={props.image.altText}
                width={props.image.width}
                height={props.image.height}
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