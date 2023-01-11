import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Spellbook" key="title"/>
        <meta property="og:description" content="summon your next campaign" key="description"/>
        <meta
          property="og:image"
          content="https://lexica.art/prompt/08d69408-1429-40cb-bbf5-e3d2599ef526"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
