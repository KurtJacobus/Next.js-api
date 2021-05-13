import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';


const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return ( 
        <>
        <Head>
        <title>404</title>
        <meta name="keywords" content="Kurt Jacobus"/>
        </Head>
    <div className="container">
        <div className="not-found">
        <h1>Oooops....</h1>
        <h2>That page is not found.</h2>
        <p>Go back to <Link href="/"><a>Homepage</a></Link></p>
    </div>
    </div>
    </>
        );
}
 
export default NotFound;