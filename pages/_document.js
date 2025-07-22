import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="es-MX">
        <Head>
          <Script id='claritydef' strategy="lazyOnload">
            {
              `(function(c,l,a,r,i,t,y){
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sj3x5y0t75");`}
          </Script>
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