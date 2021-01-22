import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Magnified Shipping Solutions" />
          <meta
            property="og:description"
            content="An essential shipping logistics company for small business owners."
          />
          <meta
            property="og:image"
            content="https://magnifiedship.vercel.app/img/magnified-logo.png"
          />
          <meta property="og:url" content="https://magnifiedship.vercel.app/" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
