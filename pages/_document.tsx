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
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-30237BTBY8"></script>
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-30237BTBY8');` }}></script>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9007133283762688" crossOrigin="anonymous"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
