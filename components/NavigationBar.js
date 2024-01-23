import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';

const NavigationBar = () => {

    const [modalActive, setModalActive] = useState(false);

    const handleOnClick = () => {
        setModalActive(!modalActive);
    }

    const menuClose = () => {
        setModalActive(false);
    }




    return (
        <header>
            <nav className="navigation-bar">
                <div className="navigation-bar__inner">
                    <Link href="/">
                        <a><img src="/icons/GibbsLaidler-logo--dark.svg" alt="Gibbs Laidler Logo"/></a>
                    </Link>
                    <div className="navigation-bar__menu" onClick={() => handleOnClick()}>
                        <span></span>
                        <span></span>
                    </div>

                    <ul>
                        <li>
                            <Link href="/services"><a>Our services</a></Link>
                        </li>

                        <li>
                            <Link href="/about"><a>About us</a></Link>
                        </li>

                        <li>
                            <Link href="/contact"><a>Contact</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Menu active={modalActive} handleOnClick={menuClose}></Menu>
        </header>
    )
}

export default NavigationBar