import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import AppHeader from "../components/Header/AppHeader";
import { GetStaticProps } from "next";

const Custom404 = () => {
  return (
    <>
      <AppHeader title="Page Not Found - Haru Fashion" />
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-2xl">Halaman tidak ditemukan</h1>
        <Image
          src="/bg-img/404.svg"
          alt="404 Page Not Found"
          width={400}
          height={300}
        />
        <span className="text-gray400">
          {"Kembali ke"}{" "}
          <Link href="/">
            <a className="underline font-bold hover:text-gray500">Homepage</a>
          </Link>
          ?
        </span>
      </div>
    </>
  );
};

export default Custom404;
