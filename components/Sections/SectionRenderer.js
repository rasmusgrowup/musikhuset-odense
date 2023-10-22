import FullWidth from "@/components/Sections/FullWidth";
import Half from "@/components/Sections/Half";
import Fourths from "@/components/Sections/Fourths";
import Bullets from "@/components/Sections/Bullets";
import News from "@/components/Sections/News";
import Products from "@/components/Sections/Products";

export default function SectionRenderer({ sections }) {

    return (
        <>
            { sections && sections.map((section, i) => {
                switch (section.__typename) {
                    case 'FullWidthSection':
                        return <FullWidth key={i} section={section} i={i} />
                    case 'HalfSection':
                        return <Half key={i} section={section} i={i} />
                    case 'FourthSection':
                        return <Fourths key={i} section={section} i={i} />
                    case 'BulletsSection':
                        return <Bullets key={i} section={section} i={i} />
                    case 'ProductsSection':
                        return <Products key={i} section={section} i={i} />
                    default:
                        return <section key={i}>default block</section>
                }
            })}
        </>
    )
}