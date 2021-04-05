import React from 'react';
import Head from 'next/head';

const siteName = 'sitename';

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  css?: string;
  js?: string;
  image?: string;
};

const Seo: React.FC<SeoProps> = ({ title, description, canonical, css, js, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width,maximum-scale=1,initial-scale=1" />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={description} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:url" content={`${canonical}`} />
    {image && <meta property="og:image" content={`${image}`} />}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content={siteName} />
    <meta name="twitter:creator" content={siteName} />
    {image && <meta name="twitter:image" content={`${image}`} />}
    {canonical && <link rel="canonical" href={`${canonical}`} />}
    {css && <link rel="stylesheet" href={`${css}`} />}
    {js && <script type="text/javascript" src={`${js}`}></script>}
  </Head>
);

export default Seo;
