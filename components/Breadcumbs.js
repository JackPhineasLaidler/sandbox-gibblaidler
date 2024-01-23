import Link from 'next/link';
import { useRouter } from 'next/router'

const Breadcrumbs = () => {

    const router = useRouter();
    const routes = router.pathname.split('/').filter(path => path);

    const lastRoute = routes[routes.length -1];

    if (lastRoute && lastRoute.includes('[')) {
        routes[routes.length -1] = lastRoute.slice(1, -1)
    }

    return (
        <div className="breadcrumbs">
            <ul>
                { routes.length ? 
                    ['home', ...routes].map((route, i) => {
                        return (
                            <li key={i}>
                                { i === 0 ?
                                    <Link href="/"><a>{route}</a></Link>
                                    :
                                    i === routes.length ? 
                                    <>{route.replaceAll("-", " ")}</>
                                    :
                                    <Link href={`/${route}`}><a>{route.replaceAll("-", " ")}</a></Link>
                                }
                            </li>
                        )
                    }) : null}
            </ul>
        </div>
    )
}

export default Breadcrumbs;