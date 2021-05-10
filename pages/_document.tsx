// import { CriticalCssHead } from '@/components/common/CriticalCssHead';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { extractCritical } from '@emotion/server';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            data-emotion-css={(this.props as any).ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: (this.props as any).css }}
          />
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
