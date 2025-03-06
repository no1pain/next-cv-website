import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const basePath =
    process.env.NODE_ENV === "production" ? "/next-cv-website" : "";

  return (
    <Html lang="en">
      <Head>
        {/* Add explicit link to CSS file */}
        <link rel="stylesheet" href={`${basePath}/_next/static/css/app.css`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
