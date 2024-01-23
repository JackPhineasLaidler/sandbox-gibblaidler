import Breadcrumbs from './Breadcumbs';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <>
        <NavigationBar />
        <main>
            <Breadcrumbs />
            { children }
        </main>
        <Footer />

        </>
    )
}

export default Layout;