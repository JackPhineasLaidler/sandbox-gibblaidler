import { createClient } from 'contentful'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_ID
    })

    const res = await client.getEntries({content_type: 'annualConferencePage'});

    return {
        props: {
            page: res.items
        }
    }

}




const conference = ({page}) => {
    console.log(page)
    return (
        <>
            <section className="stripe">
                <div className="stripe__inner container">
                    <h1>Gibbs Laidler Risk and Insurance Annual Conference</h1>
                    <p>Details for the 2023 Gibbs Laidler annual conference will be coming soon.</p>
                    <picture>
                        <source media="(min-width: 768px)" srcSet="/images/conference-desktop.webp"/>
                        <img srcSet="/images/conference-mobile.webp" alt="Man giving speach at conference"/>
                    </picture>
                </div>
            </section>
        </>
    )
}

export default conference;