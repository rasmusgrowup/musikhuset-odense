import Head from 'next/head'

function Meta({ title, description }) {
    return (
        <Head>
            <meta name="description" content={description} key='description'/>
            <meta name="og:title" content={title} key='title'/>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Musikhuset-Odense | Lokal musikforretning',
    description: 'Musikhuset-Odense er en af de førende instrumentforretninger i Danmark, med speciale i strenge- og strygerinstrumenter. Vi reparerer og justerer desuden instrumenter på vores værksted i butikken.'
}

export default Meta
