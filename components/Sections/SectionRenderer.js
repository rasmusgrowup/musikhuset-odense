import FullWidth from "@/components/Sections/FullWidth";
import Half from "@/components/Sections/Half";
import Fourths from "@/components/Sections/Fourths";
import Bullets from "@/components/Sections/Bullets";
import News from "@/components/Sections/News";

export default function SectionRenderer({ sections }) {
    return (
        <>
            { sections && sections.map((section, i) => {
                switch (section.type) {
                    case 'fullwidth':
                        return <FullWidth key={i} section={section} i={i} />
                    case 'half':
                        return <Half key={i} section={section} i={i} />
                    case 'fourths':
                        return <Fourths key={i} section={section} i={i} />
                    case 'bullets':
                        return <Bullets key={i} section={section} i={i} />
                    case 'news':
                        return <News key={i} section={section} i={i} />
                    default:
                        return <section key={i}>default block</section>
                }
            })}
        </>
    )
}