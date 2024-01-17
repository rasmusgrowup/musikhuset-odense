async function fetchAPI(query, {variables} = {}) {
    const res = await fetch(process.env.HYGRAPH_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
        },
        body: JSON.stringify({query, variables}),
    })
    const json = await res.json();

    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data;
}

export async function getNewsPostSlugs() {
    const data = await fetchAPI(`
        {
            newsPosts { slug }
        }
    `)
    return data.newsPosts
}

export async function getNewsPostBySlug(slug) {
    return await fetchAPI(`
        query posts($slug: String!) {
            newsPost(where: {slug: $slug}) {
                id
                heading
                createdAt
                slug
                text {
                    html
                }
                image {
                    altText
                    url
                    height
                    width
                }
            }
        }
    `, { variables: { slug }})
}

export async function getNewsPosts() {
    return await fetchAPI(`
        query MyQuery {
            newsPosts {
                __typename
                heading
                createdAt
                slug
                text {
                    html
                }
                image {
                    altText
                    url
                    height
                    width
                }
            }
        }
    `)
}

export async function getPage(slug) {
    return await fetchAPI(`
        query page($slug: String!) {
            page(where: {slug: $slug}) {
                sections {
                    ... on HalfSection {
                        __typename
                        id
                        align
                        cta {
                          ctaText
                          href
                        }
                        heading
                        text {
                          html
                        }
                        image {
                          altText
                          url
                        }
                        review
                    }
                    ... on Banner {
                        __typename
                        id
                        bannerText {
                            html
                        }
                        theme
                    }
                    ... on ProductsSection {
                        __typename
                        id
                        heading
                        smallHeading
                        cta {
                            href
                            ctaText
                        }
                        images {
                            altText
                            height
                            url
                            width
                        }
                        text { html }
                    }
                    ... on BulletsSection {
                        __typename
                        id
                        heading
                        subheader {
                            html
                        }
                        inners {
                            heading
                            content {
                                heading
                                text {
                                  html
                                }
                            }
                        }
                    }
                    ... on FullWidthSection {
                        __typename
                        id
                        alignText
                        heading
                        text {
                            html
                        }
                        image {
                            url
                            height
                            width
                        }
                    }
                    ... on FourthSection {
                        __typename
                        id
                        halfSections {
                            heading
                            image {
                                height
                                width
                                url
                            }
                            text {
                                html
                            }
                            cta {
                                ctaText
                                href
                            }
                        }
                    }
                }
                slug
                pageTitle
                pageDescription
            }
        }
    `, {variables: {slug}});
}