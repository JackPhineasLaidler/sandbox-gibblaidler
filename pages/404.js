import Link from 'next/link';


const NotFound = () => {
    return (
        <div className="stripe">
        <div className="stripe__inner container container--aligned container--flexed">
            <div>
                <h1>Page Not Found</h1>
                <p>Apologies, we could not locate the page you were searching for. Click <Link href="/"><a>here</a></Link> to return to our homepage.</p>
            </div>
        </div>
    </div>
    )
}

export default NotFound;