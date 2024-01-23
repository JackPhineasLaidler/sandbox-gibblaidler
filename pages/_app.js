import '../styles/styles.scss'
import Layout from '../components/Layout'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Head>
            <title>Gibbs Laidler Consulting</title>
            <meta name="description" content="Gibbs Laidler's website for insurance consultancy for Housing Associations" />
            <meta name="author" content="Jack Laidler Projects"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta charSet='utf-8' />
        </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
