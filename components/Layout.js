import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className=" bg-[#5F5C9B] p-4 ">
        <Link className="flex justify-center gap-3 relative" href="/">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            }
            width={300}
            height={180}
          ></Image>
        </Link>
      </header>

      <main className=" mx-auto bg-[#5F5C9B]">{children}</main>

      <footer className="sticky top-[100vh] pt-2 text-center bg-slate-700">
        <div className="mx-auto max-w-screen-xl px-10 pb-2 sm:w-full lg:w-full ">
          <div className="mx-auto max-w-5xl space-y-4  ">
            <span className="block text-xs text-gray-200">
              &copy; Made with 🖤 by Tony
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
