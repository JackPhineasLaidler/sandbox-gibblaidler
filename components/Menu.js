import Link from 'next/link';

const Menu = ({active, handleOnClick}) => {
    return (
        <div className={active ? 'modal modal--active' : 'modal'} >
            <div className="modal__backdrop" onClick={() => handleOnClick()}/>
            <menu className="menu">
                <div className="menu__close" onClick={() => handleOnClick()}>
                    <span></span>
                    <span></span>
                </div>

                <img src="/icons/GibbsLaidler-logo--dark.svg" alt="Gibbs Laidler Logo"/>
                <nav>
                    <ul>
                        <li>
                            <Link href="/"><a onClick={() => handleOnClick()}>Home Page</a></Link>
                        </li>
                        <li>
                            <Link href="/services"><a onClick={() => handleOnClick()}>Our Services</a></Link>
                        </li>

                        <li>
                            <Link href="/team"><a onClick={() => handleOnClick()}>Our Team</a></Link>
                        </li>
                        <li>
                            <Link href="/about"><a onClick={() => handleOnClick()}>About Us</a></Link>
                        </li>

                        <li>
                            <Link href="/conference"><a onClick={() => handleOnClick()}>Annual Conference</a></Link>
                        </li>

                        <li>
                            <Link href="/about#company-values">
                                <a onClick={() => handleOnClick()}>Our values</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact"><a onClick={() => handleOnClick()}>Contact Us</a></Link>
                        </li>
                    </ul>
                </nav>
            </menu>
        </div>
    )
}

export default Menu;