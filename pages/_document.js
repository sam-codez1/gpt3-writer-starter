import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Spellbook" key="title"/>
        <meta property="og:description" content="summon your next campaign" key="description"/>
        <meta
          property="og:image"
          content="https://lexica-serve-encoded-images2.sharif.workers.dev/md/60ed3ca0-8fd7-4943-be40-fd6277aaeae3"
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
