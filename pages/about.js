import Card from "../components/Card";
import TeamMemberCard from "../components/TeamMemberCard";
import Link from 'next/link';
import { createClient } from "contentful";
import teamOrder from "../hooks/teamOrder";


const about = ({teamMembers}) => {

    const orderedTeam = teamOrder(teamMembers);

    return (
        <>
            <section className="stripe">
                    <div className="stripe__inner container container--aligned container--flexed ">
                        <div>
                            <h1>Our Story</h1>
                            <p>Jeff Laidler and Chris Gibbs started Gibbs Laidler in 1997 with the purpose of providing an impartial insurance and risk advisory service.</p>
                            <p>Gibbs Laidler has worked in a range of business sectors and clients including <b>Securicor</b>, <b>The Body Shop</b>, <b>British Waterways Board</b> and <b>Specsavers</b>. At present Gibbs Laidler&#39;s focus is assisting Housing Associations, providing independent advice on some of the largest Housing PFI contracts and managing insurance tenders. We continually develop tender management processes to source a compliant insurance service and adapt to industry regulations from the introduction of OJEU in 2003 to the UK&#39;s departure from the EU in 2020.</p>
                            <p>Gibbs Laidler have assisted numerous Housing Associations nationwide to ensure the service received from their broker or insurer is of an appropriate standard and fulfils their business needs. To facilitate our clients further, we produce several insurance guides and briefings, ranging from D&amp;O liability to the issues surrounding joint ventures. As well as bespoke insurance and risk services for clients who retain us long term, such as <b>The Guinness Partnership</b>, <b>L&Q</b>, <b>Network Homes</b> and <b>Southern Housing</b>.</p>
                        </div>
                        
                        <img src="/images/about-us-hero.webp" alt="Birds eye view of a group of colleagues having a meeting on a wooden desk" className="image-hero show-desktop"/>
                    </div>
            </section>

            <section className="stripe stripe--secondary" id="company-values">
                <div className="stripe__inner container">
                    <header>
                        <h2>Our Values</h2>
                        <p>Gibbs Laidler&#39;s independent services have helped many housing associations to choose a broker and insurer effectively, improve the standard of service and protection which they receive from their broker or insurer. We produce a number of insurance guides and briefings, ranging from Directors and Officers liability to the issues surrounding joint ventures.</p>
                    </header>
                        
                    <div className="container--flexed container--flexed-thirds text-centered">
                        <Card
                            isCentered={true}
                            header="Integrity"
                            cardContent="Offering independent advice to get the best possible outcome for Housing Associations. Every penny we save our clients is fed back into communities across the UK. "
                        />
                        <Card
                            isCentered={true}
                            header="Community"
                            cardContent="At Gibbs Laidler, our ethos promotes continuous learning, improvement and networking across our diverse portfolio of Housing Associations and insurance providers."
                        />

                        <Card
                            isCentered={true}
                            header="Innovation"
                            cardContent="As an independent advisory service, we encourage the inclusion of new insurers and brokers where possible to spur competition, diversity and innovation for the sector."
                        />
                    </div>
                </div>
            </section>

            <section className="stripe">
                <div className="stripe__inner container text-centered">
                    <header>
                        <h2>Meet Our Team</h2>
                        <p>Gibbs Laidler has a team of specialist insurance and risk consultants available to our clients, and you can expect all of them to be involved in one way or another in the provision of the services we provide. <b>Click on our team&#39;s portfolios below</b> and get to know the people behind the company.</p>
                    </header>

                    <div className="team__section">
                        {orderedTeam.map((teamMember, index) => {

                            if (index < 6) {
                                return (
                                    <TeamMemberCard
                                        key={teamMember.sys.id}
                                        id={teamMember.sys.id}
                                        jobTitle={teamMember.fields.jobTitle}
                                        name={teamMember.fields.staffMemberName}
                                        initials={teamMember.fields.staffMemberInitials}
                                        slug={teamMember.fields.slug}
                                    ></TeamMemberCard>
                                )
                            }
                        })}
                    </div>

                    <Link href="/team">
                        <a className="arrow-link"><span>View all team members</span></a>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default about;

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_ID
    })

    const res = await client.getEntries({content_type: 'staffMembers'});

    return {
        props: {
            teamMembers: res.items
        }
    }
}