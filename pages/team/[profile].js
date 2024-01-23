import { createClient } from 'contentful';
import team from '../team';

const client = createClient({
    space: 'il2yafkx79ep',
    accessToken: 'KgWvXVxAh8OMLZCXV5EkvZdeEBmzYjyOcFYRmCRFKhA'
})


export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'staffMembers'
    })

    const paths = res.items.map(item => {
        return {
            params: {profile: item.sys.id}
        }
    })

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({params}) {

    const res = await client.getEntries({
        content_type: 'staffMembers',
        'sys.id': params.profile
    });

    return {
        props: {
            teamMember: res.items[0]
        }
    }

}

const EmployeeProfilePage = ({teamMember}) => {

    return (
        <>
            <div className="stripe">
                <div className="stripe__inner team__details">
                    <h2>{teamMember.fields.staffMemberName} {teamMember.fields.certifications}</h2>
                    {teamMember.fields.emailAddress ?
                        <div>
                            <span>E</span>: <a href={`mailto:${teamMember.fields.emailAddress}`}>{ teamMember.fields.emailAddress }</a>
                        </div> :null
                    }

                    {teamMember.fields.phoneNumber ?
                        <div>
                            <span>P</span>: <a href={`tel:${teamMember.fields.phoneNumber}`}>{ teamMember.fields.phoneNumber }</a>
                        </div> :null
                    }
                    {teamMember.fields.employeeOutline.content.map((outline, index) => {
                        return (
                            <p key={index}>{outline.content[0].value}</p>
                        )
                    })}
                </div>
            </div>
        </>

    )
}

export default EmployeeProfilePage