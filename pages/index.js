import Card from '../components/Card';
import TestimonialWrapper from '../components/TestimonialWrapper';
import TeamMemberCard from "../components/TeamMemberCard";
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { createClient } from 'contentful';
import teamOrder from "../hooks/teamOrder";


export default function Home({teamMembers}) {

    const orderedTeam = teamOrder(teamMembers);


    return (
        <>
            <section className="site-hero">
                <div className="container--flexed container--flexed-half stripe__inner">
                    <div className="container--flexed container--flexed--column">
                        <div>
                            <h1>Consulting on Housing Associations&#39; Insurance and Risk since 1997</h1>
                            <p>We are the leading insurance consultancy for Housing Associations across England and Wales. Independent from Insurers &amp; Brokers, we offer truly impartial advice to ensure your insurance meets your organisation&#39;s risk needs.</p>
                        </div>
                        <div className="container--flexed container--flexed-thirds">
                            <div className="site-hero__stat">
                                <span>250+</span>
                                <span>Tenders Managed</span>
                            </div>

                            <div className="site-hero__stat">
                                <span>{new Date().getFullYear() - 1997}</span>
                                <span>Years of expertise</span>
                            </div>

                            <div className="site-hero__stat">
                                <span>120+</span>
                                <span>Retained clients</span>
                            </div>
                        </div>
                    </div>
                    <picture>
                        <source media="(min-width: 768px)" srcSet="/images/hero-image.webp"/>
                        <img srcSet="/images/hero-image-mobile.webp" alt="Blocks Rise Flats"/>
                    </picture>

                </div>
            </section>

            <section className="stripe stripe--secondary">
                <div className="stripe__inner container">
                    <header>
                        <h2>Gibbs Laidler Services</h2>
                        <p>Gibbs Laidler provide renewal negotiations, Tender Management and strategic direction as part of a retained service package. Our clients have access to over 100 years&#39; worth of collective specialist experience in the social housing market. Our retained service means we are on call all year round to consult on your risk and insurance needs, from regulated tender management duties to bespoke one-off risk incidents and property stock benchmarking.</p>
                    </header>
                        
                    <div className="container--flexed container--flexed-thirds">
                        <Card
                            header="Insurance Consultation"
                            cardContent="We offer bespoke long-term packages that include renewal support, market insight, cover reviews, specialist risk solutions."
                            linkText="View service"
                            linkUrl="/services#service-retained-consultancy"
                        />
                        <Card
                            header="Tender Management"
                            cardContent="We guide you through the intricacies of a regulated tender process for you to make an informed decision on the range of brokers and insurers available."
                            linkText="View service"
                            linkUrl="/services#service-tender-management"
                        />
                        <Card
                            header="Strategic Direction"
                            cardContent="We conduct detailed audits of your current, and proposed, insurance cover to ensure it is the best price and tailored to your specific service needs."
                            linkText="View service"
                            linkUrl="/services#strategic-direction"
                        />
                    </div>
                </div>
            </section>

            <section className="stripe">
                <div className="stripe__inner container">
                    <div>
                        <h2>Gibbs Laidler Annual Conference</h2>
                        <p>Gibbs Laidler&#39;s unique position in the Insurance market allows us oversight of the Housing Association&#39;s Insurance and risk issues, and to create a conference that reflects the issues the sector is facing. The 2023 conference will focus on key themes which are currently affecting the insurance arrangements of many housing associations, which we expect will continue into 2023 and beyond, including self-insurance, cyber, disrepair, flood, and of course the current state of the insurance market.</p>
                        <Link href="/conference">
                            <a className="arrow-link"><span>View conference details</span></a>
                        </Link>
                    </div>
                    <picture>
                        <source media="(min-width: 768px)" srcSet="/images/conference-desktop.webp"/>
                        <img srcSet="/images/conference-mobile.webp" alt="Man giving speach at conference"/>
                    </picture>
                </div>
            </section>

            <section className="stripe stripe--tertiary">
                <div className="stripe__inner container container--aligned container--flexed container--flexed-half ">
                    <div>
                        <h2>Our Story</h2>
                        <p>Jeff Laidler and Chris Gibbs started Gibbs Laidler in 1997 after identifying a need for independent and impartial advice. They established Gibbs Laidler to provide unbiased insurance and risk advisory service to meet the needs of organisations requiring a second opinion on what was, and still is, a significant business expense.</p>
                        <p>The business worked in a range of business sectors and clients e.g., Securicor, The Body Shop, British Waterways Board and Specsavers, all utilising the unique approach Gibbs Laidler provided...</p>

                        <Link href="/about">
                            <a className="arrow-link"><span>Continue reading</span></a>
                        </Link>
                    </div>
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/images/about-us-desktop.webp"/>
                            <img src="/images/about-us-mobile.webp" alt="Birds eye view of a group of colleagues having a meeting on a wooden desk"/>
                        </picture>
                </div>
            </section>

            <section className="stripe stripe--quaternary">
                <div className="stripe__inner container">
                    <h2>What Our Clients Say About Us</h2>
                    <TestimonialWrapper />
                </div>
            </section>

            <section className="stripe">
                <div className="stripe__inner container text-centered">
                    <div>
                        <h2>Meet Our Team</h2>
                        <p>Gibbs Laidler has a team of specialist insurance and risk consultants available to our clients, and you can expect all of them to be involved in one way or another in the provision of the services we provide. <b>Click on our team member&#39;s portfolios below</b> for their contact information and job description, or contact our office directly on <a href="tel:01959562242">01959 562242</a> or via <a href="mailto:info@gibbslaidler.co.uk">info@gibbslaidler.co.uk</a>.</p>
                    </div>
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

            <Analytics />
    </>
  )
}

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