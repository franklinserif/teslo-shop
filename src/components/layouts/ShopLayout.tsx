import { FC } from "react";
import Head from "next/head";
import { Navbar, SideMenu } from "../ui";

interface Props {
  title: string;
  pageDescription: string;
  children: React.ReactNode;
  imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = (props) => {
  const { title, pageDescription, children, imageFullUrl } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <Navbar />

      <SideMenu />

      <main
        style={{ margin: "80px auto", maxWidth: "1440px", padding: "0 30px" }}
      >
        {children}
      </main>

      <footer></footer>
    </>
  );
};
