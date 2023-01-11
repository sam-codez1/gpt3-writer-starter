import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Spellbook" key="title"/>
        <meta property="og:description" content="summon your next campaign" key="description"/>
        <meta
          property="og:image"
          content="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/0da3158e-5599-48cc-bfd6-fc67c09e642c"
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
