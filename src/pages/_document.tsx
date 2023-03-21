import  Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head />
      <body>
        
          <GlobalStyles />
 
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};



