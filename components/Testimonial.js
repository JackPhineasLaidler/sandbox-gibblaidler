const Testimonial = ({title, content, iconPath, iconAltText, companyName, reviewer, reviewerPosition}) => {
    return (
        <div className="card__carousel">
            <div className="card card--clear card__testimonial">
                <h3>{title}</h3>
                <p>{content}</p>

                <div className="card__testimonial__footer">
                    <img src={iconPath} alt={iconAltText}/>
                    <div>
                        <span>{reviewer} {`- ${reviewerPosition}`}</span>
                        <span>{companyName}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;