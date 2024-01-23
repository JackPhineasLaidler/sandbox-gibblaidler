import Link from 'next/link';
// import Image from 'next/image';


const Footer = () => {
    return (
        <footer>
            <div className="site-footer">
                <div className="site-footer__inner">
                    <div className='site-footer__contact-info'>
                    <Link href="/">
                        <a><img src="/icons/GibbsLaidler-logo.svg" alt="Gibbs Laidler Logo"/></a>
                    </Link>

                    <span>8a The Old Yard,<br/> 
                    Rectory Lane, Brasted, Westerham, TN16 1JP</span>
                    <a href="tel:01959562242">+44 (0) 01959 562242</a>
                    </div>
                    <div className="site-footer__nav">
                        <div>
                            <span  className="heading--small">Links</span>
                            <ul>
                                <li>
                                    <Link href="/"><a>Home</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>Our Services</a></Link>
                                </li>
                                <li>
                                    <Link href="/about"><a>About us</a></Link>
                                </li>
                                <li>
                                    <Link href="/team"><a>Meet the team</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <span className="heading--small">Company</span>
                            <ul>
                                <li>
                                    <Link href="/terms"><a>T&Cs</a></Link>
                                </li>
                                <li>
                                    <Link href="/privacy"><a>Privacy policy</a></Link>
                                </li>
                                <li>
                                    <Link href="/about#company-values">
                                        <a>Our values</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact"><a>Contact us</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <span className="heading--small">Other</span>
                            <ul>
                                <li>
                                    <Link href="/conference"><a>Annual Conference</a></Link>
                                </li>
                                <li>
                                    <Link href="/contact"><a>General Enquiries</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-footer__legal">
                <div className="site-footer__inner">
                    ©{new Date().getFullYear()} GIBBS LAIDLER LLP. All Rights Reserved. Company Registration: OC322760 -
                    Gibbs Laidler is a trading name of Gibbs Laidler Consulting LLP. Gibbs Laidler Consulting LLP is directly authorised and regulated by the Financial Conduct Authority (FCA), under registration 489233. You can verify our status by visiting the FCA website www.fca.org.uk or by telephoning them on 0800 111 6768. 
                    8a The Old Yard, Rectory Lane, Brasted, Westerham, TN16 1JP
                </div>
            </div>

        </footer>
    )
}

export default Footer;