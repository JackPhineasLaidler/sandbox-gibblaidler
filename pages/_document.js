import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Faustina:ital,wght@0,300;0,400;0,500;0,600;0,700;1,800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}