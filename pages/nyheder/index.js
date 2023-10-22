import SectionRenderer from "@/components/Sections/SectionRenderer";
import sections from '@/styles/sections.module.scss';
import type from "@/styles/type.module.scss";
import {getNewsPosts} from "@/lib/hygraph";
import News from "@/components/Sections/News";

export async function getStaticProps() {
    const posts = (await getNewsPosts()) || [];

    return {
        props: {
            posts
        },
    }
}

export default function Page({posts}) {
    console.log(posts.newsPosts)
    return (
        <section className={sections.newsSection}>
            <h1 className={`${type.h1} ${sections.h1}`}>Nyheder</h1>
            <div className={sections.newsContainer}>
                {posts.newsPosts.map((post, i) => (
                    <News key={post.id} section={post} i={i}/>
                ))}
            </div>
        </section>
    )
}