import Document, { Html, Head, Main, NextScript } from "next/document";
import { sheet } from "candy-moon";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const css = sheet.extractCSS();

    return { ...initialProps, css };
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            id="__candy"
            // And defined it in here
            dangerouslySetInnerHTML={{ __html: " " + this.props.css }}
          />
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
