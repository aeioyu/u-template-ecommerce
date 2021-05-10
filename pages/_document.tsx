// import { CriticalCssHead } from '@/components/common/CriticalCssHead';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        {/* <CriticalCssHead /> */}
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
