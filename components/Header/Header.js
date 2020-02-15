import Head from 'next/head';

const Header = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
      <meta
        name="description"
        content="Jessie Tabilisma Web Developer and Designer."
      />
      <meta
        name="keywords"
        content="Jessie Tabilisma, Portfolio, Developer, Web Development"
      />
      <meta property="og:site_name" content="Jessie Tabilisma" />
      <meta property="og:title" content="Works" />
      <meta
        property="og:description"
        content="List of Development projects of Jessie Tabilisma"
      />
      <meta property="og:image" content="" />
      <meta name="twitter:image:alt" content="Jessie Tabilisma" />
      <meta property="og:url" content="jessietabilisma.dev" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};
export default Header;
