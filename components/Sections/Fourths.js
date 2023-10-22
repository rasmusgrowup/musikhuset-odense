import Half from "@/components/Sections/Half";
import sections from "@/styles/sections.module.scss";

export default function Fourths({ section, i }) {
    return (
        <section className={sections.fourths}>
            <Half section={section.halfSections[0]} i='0'/>
            <Half section={section.halfSections[1]} i='1'/>
        </section>
    )
}