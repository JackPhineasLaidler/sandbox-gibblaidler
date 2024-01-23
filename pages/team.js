import TeamMemberCard from "../components/TeamMemberCard";
import { createClient } from 'contentful';
import teamOrder from "../hooks/teamOrder";


const team = ({teamMembers}) => {

    const orderedTeam = teamOrder(teamMembers);

    return (
        <div className="stripe ">
            <div className="stripe__inner container text-centered">
                <div>
                    <h2>Meet Our Team</h2>
                    <p>Gibbs Laidler has a team of specialist insurance and risk consultants available to our clients, and you can expect all of them to be involved in one way or another in the provision of the services we provide. <b>Click on our team&#39;s portfolios below</b> and get to know the people behind the company.</p>
                </div>

                <div className="team__section">
                    {orderedTeam.map(teamMember => {
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
                    })}
                </div>
            </div>
        </div>
    )
}

export default team;

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
