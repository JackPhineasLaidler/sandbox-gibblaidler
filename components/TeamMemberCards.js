import Link from 'next/link';

const TeamMemberCards = ({numberShown, teamMembers}) => {


    return (
        <div className="team__section">
            {numberShown ? 
                teamMembers.map((teamMember, i) => {
                    return (
                        <div key={i} className={i < numberShown ? "team__section__item" : "team__section__item--hidden"}>
                            <Link href={`https://www.gibbslaidler.co.uk/team/${teamMember.id}`}>
                                <a className="card">
                                    <span className="team__section__item__image-placeholder">{teamMember.initials}</span>
                                    <span className="heading--medium">{teamMember.name}</span>
                                    <span className="card__content">{teamMember.role}</span>
                                </a>
                            </Link>
                        </div>
                    )
                }) :
                teamMembers.map((teamMember, i) => {
                    return (
                        <div key={i} className="team__section__item">
                            <Link href={`https://www.gibbslaidler.co.uk/team/${teamMember.id}`}>
                                <a className="card">
                                    <span className="team__section__item__image-placeholder">{teamMember.initials}</span>
                                    <span className="heading--medium">{teamMember.name}</span>
                                    <span className="card__content">{teamMember.role}</span>
                                </a>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TeamMemberCards;