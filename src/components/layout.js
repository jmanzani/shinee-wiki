import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children, description, title }) => {
  return (
    <div className="relative min-h-screen text-black dark:text-white">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <title>{title}</title>
      </Head>

      {/* Background div */}
      <div
        className="fixed inset-0 z-[-2] w-full h-full bg-neutral-100 dark:bg-neutral-950
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(122,225,191,0.8),rgba(122,225,191,0.3))]
        dark:bg-[radial-gradient(125%_125%_at_50%_10%,rgba(0,0,0,0.4),rgba(122,225,191,0.6))]"
      ></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4"> {/* Limita el ancho máximo */}
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;