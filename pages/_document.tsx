import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Displai - Wallpapers with tasty!"
          />
          <meta
            property="og:description"
            content="Displai - Wallpapers with tasty!"
          />
          <meta property="og:title" content="Displai - Wallpapers with tasty!" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Displai - Wallpapers with tasty!" />
          <meta
            name="twitter:description"
            content="Displai - Wallpapers with tasty!"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
