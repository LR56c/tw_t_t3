import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document"

class MyDocument extends Document
{
  static async getInitialProps( ctx: DocumentContext )
  {
    const initialProps = await Document.getInitialProps( ctx );
    return initialProps;
  }

  render()
  {
    return (
      <Html
        className="bg-gray-100"
      >
        <Head>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument;
