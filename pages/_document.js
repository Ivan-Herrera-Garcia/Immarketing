import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="es-MX">
        <Head>
           
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}



export default CustomDocument