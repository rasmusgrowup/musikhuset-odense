import type from "@/styles/type.module.scss";
import sections from "@/styles/sections.module.scss";

export default function Banner({ section, i }) {
    let theme = section.theme ? section.theme : undefined;

    return (
        <section className={sections.banner}>
            <div className={sections.inner} style={theme ? {backgroundColor: "#000", color: "#fff"} : {backgroundColor: "var(--yellow)", color: "#000"}}>
                {section.bannerText && <div className={`${type.p} ${sections.p}`} dangerouslySetInnerHTML={{__html: `${section.bannerText.html}`}}/>}
            </div>
        </section>
    )
}