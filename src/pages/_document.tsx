import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document'

export default class MainDocument extends Document<DocumentInitialProps> {
  public render(): JSX.Element {
    return (
      <Html lang="en" className="h-full">
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
