// import { HashLink as Link } from 'react-router-hash-link';
import Link from 'next/link';


const Card = ({header, linkText, linkUrl, cardContent, isVisible=true, isCentered=false}) => {

    return (
        <div className={`card ${!isVisible ? "card card--clear" : ""} ${isCentered ? "card--centered" : ""}`}>
            <h3>{header}</h3>
            <p>{cardContent}</p>
            {linkText ? <Link href={linkUrl}>
                <a className="arrow-link"><span>{linkText}</span></a>
            </Link> : ''}
        </div>
    )
}

export default Card;