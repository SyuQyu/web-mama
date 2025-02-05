import Link from "next/link";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Menu } from "@headlessui/react";
import { useTranslations } from "next-intl";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Util/Pagination";
import { apiProductsType, itemType } from "../../context/cart/cart-types";
import DownArrow from "../../public/icons/DownArrow";
import { msiData, mdData, sevenProData } from "../../data/data";
import TestiSlider from "../../components/TestiSlider2/TestiSlider2";
import Button from "../../components/Buttons/Button";
import LinkButton from "../../components/Buttons/LinkButton";
type OrderType = "latest" | "price" | "price-desc";
import Image from "next/image";
type Props = {
  items1: itemType[];
};

const ProductCategory: React.FC<Props> = ({
  items1,
}) => {
  const numberOfProducts = 20;
  const page = 1;


  const router = useRouter();
  const { category } = router.query;
  const lastPage = Math.ceil(numberOfProducts / 10);

  const safeCategory = typeof category === "string" ? category : "default";
  const capitalizedCategory = category
    ? category
      .toString()
      .split("-") // Split by hyphen
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" ") // Join words with spaces
    : "Category"; // Default value

  const data = category === "msi" ? msiData : category === "mudahdigital" ? mdData : sevenProData;
  const imagesSevenPro = [
    '/image/sevenPro/testi/1.jpg',
    '/image/sevenPro/testi/2.jpg',
    '/image/sevenPro/testi/3.jpg',
    '/image/sevenPro/testi/4.jpg',
    '/image/sevenPro/testi/5.jpg',
    '/image/sevenPro/testi/6.jpg',
  ];

  const imagesMD = [
    '/image/sevenPro/testi/1.jpg',
    '/image/sevenPro/testi/2.jpg',
    '/image/sevenPro/testi/3.jpg',
    '/image/sevenPro/testi/4.jpg',
    '/image/sevenPro/testi/5.jpg',
    '/image/sevenPro/testi/6.jpg',
  ];

  const imagesMSI = [
    '/image/sevenPro/testi/1.jpg',
    '/image/sevenPro/testi/2.jpg',
    '/image/sevenPro/testi/3.jpg',
    '/image/sevenPro/testi/4.jpg',
    '/image/sevenPro/testi/5.jpg',
    '/image/sevenPro/testi/6.jpg',
  ];

  const images = category === "msi" ? imagesMSI : category === "mudahdigital" ? imagesMD : imagesSevenPro;
  const link = category === "msi" ? "https://t.me/joinbisnis250k" : category === "mudahdigital" ? "https://t.me/+-rNL61Mnn8I1OGM9" : "https://t.me/joinbisnis100ribu";
  return (
    <div>
      {/* ===== Head Section ===== */}
      <Header title={`${capitalizedCategory} - Erni Products`} />

      <main id="main-content">
        {/* ===== Breadcrumb Section ===== */}
        <div className="bg-lightgreen h-16 w-full flex items-center">
          <div className="app-x-padding app-max-width w-full">
            <div className="breadcrumb">
              <Link href="/">
                <a className="text-gray400">home</a>
              </Link>{" "}
              / <span className="capitalize">{category as string}</span>
            </div>
          </div>
        </div>

        {/* ===== Heading & Filter Section ===== */}
        <div className="app-x-padding app-max-width w-full mt-8">
          <h3 className="text-4xl mb-2 capitalize">{category as string}</h3>
          <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-0 justify-between mt-4 sm:mt-6">
          </div>
        </div>

        {/* ===== Testimonial Section ===== */}
        <div className="w-full py-5">
          <div className="app-x-padding app-max-width w-full mt-8 border-b-2 border-gray100">
            {/* <TestiSlider /> */}
            <h2 className="text-xl md:text-3xl text-center mb-4">Testimonial</h2>
            <div className="max-w-screen-2xl mx-auto px-4 pb-12 bg-gray-50">
              <div className="md:flex hidden flex-col md:flex-row gap-2">
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex flex-1">
                    <Image src={images[0]} alt="Image 1" width={600} height={400} className="object-cover w-full h-full" />
                  </div>
                  <div className="hidden md:flex flex-1 flex-row gap-2">
                    <Image src={images[1]} alt="Image 2" width={300} height={200} className="object-cover w-full h-full" />
                    <Image src={images[2]} alt="Image 3" width={300} height={200} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="hidden md:flex flex-1 flex-row gap-2">
                    <Image src={images[3]} alt="Image 4" width={300} height={200} className="object-cover w-full h-full" />
                    <Image src={images[4]} alt="Image 5" width={300} height={200} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-1">
                    <Image src={images[5]} alt="Image 6" width={600} height={400} className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
              <div className="md:hidden flex flex-col gap-2">
                {images.map((src, index) => (
                  <div key={index} className="flex flex-1">
                    <Image src={src} alt={`Image ${index + 1}`} width={600} height={400} className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== Main Content Section ===== */}
        <div className="app-x-padding app-max-width my-16">
          <h2 className="text-xl md:text-3xl text-center mb-4">Produk</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-6 mb-10">
            {data.map((item: any) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>

      <div className="bg-lightgreen h-full py-4 w-full flex items-center">
        <div className="app-x-padding app-max-width w-full">
          <div className="w-full text-center flex flex-col justify-center items-center gap-6">
            <div>
              <h2 className="text-xl md:text-3xl mb-4">Join Grup Telegram</h2>
              <span className="text-base md:text-lg">Join grup telegram untuk mendapatkan info lebih detail dan cara bergabung</span>
            </div>
            <LinkButton href={link}>Join</LinkButton>
          </div>
        </div>
      </div>

      {/* ===== Footer Section ===== */}
      <Footer />
    </div>
  );
};


export default ProductCategory;
