import {getNewsPostBySlug, getNewsPostSlugs} from "@/lib/hygraph";
import FullWidth from "@/components/Sections/FullWidth";

export async function getStaticProps({params}) {
    const {newsPost} = await getNewsPostBySlug(params.slug)

    return {
        props: {
            newsPost
        },
    }
}

export async function getStaticPaths() {
    const newsPosts = await getNewsPostSlugs()
    return {
        paths: newsPosts.map(({slug}) => ({
            params: {slug},
        })),
        fallback: true,
    }
}

export default function NewsPost({newsPost}) {
    console.log(newsPost)
    return (
        <section>
            <FullWidth section={newsPost} i={'0'}/>
        </section>
    )
}