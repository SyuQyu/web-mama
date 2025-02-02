import React, { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import axios from "axios";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import Slideshow from "../components/HeroSection/Slideshow";
import OverlayContainer from "../components/OverlayContainer/OverlayContainer";
import Card from "../components/Card/Card";
import TestiSlider from "../components/TestiSlider/TestiSlider";
import { apiProductsType, itemType } from "../context/cart/cart-types";
import LinkButton from "../components/Buttons/LinkButton";
import { msiData, mdData, sevenProData } from "../data/data";
// /bg-img/ourshop.png
import ourShop from "../public/bg-img/ourshop.png";

type Props = {
  products: itemType[];
};

const Home: React.FC<Props> = ({ products }) => {

  const [currentItems, setCurrentItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      img1: "https://picsum.photos/200/300 ",
      img2: "https://picsum.photos/200/300 ",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 149.99,
      img1: "https://picsum.photos/200/300 ",
      img2: "https://picsum.photos/200/300 ",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      img1: "https://picsum.photos/200/300 ",
      img2: "https://picsum.photos/200/300 ",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 59.99,
      img1: "https://picsum.photos/200/300 ",
      img2: "https://picsum.photos/200/300 ",
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 129.99,
      img1: "https://picsum.photos/200/300 ",
      img2: "https://picsum.photos/200/300 ",
    },
  ]);
  const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   if (!isFetching) return;
  //   const fetchData = async () => {
  //     const res = await axios.get(
  //       `${process.env.NEXT_PUBLIC_PROD_BACKEND_URL}/api/v1/products?order_by=createdAt.desc&offset=${currentItems.length}&limit=10`
  //     );
  //     const fetchedProducts = res.data.data.map((product: apiProductsType) => ({
  //       ...product,
  //       img1: product.image1,
  //       img2: product.image2,
  //     }));
  //     setCurrentItems((products) => [...products, ...fetchedProducts]);
  //     setIsFetching(false);
  //   };
  //   fetchData();
  // }, [isFetching, currentItems.length]);

  const handleSeemore = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsFetching(true);
  };

  return (
    <>
      {/* ===== Header Section ===== */}
      <Header />

      {/* ===== Carousel Section ===== */}
      <Slideshow />

      <main id="main-content" className="-mt-20">
        {/* ===== Category Section ===== */}
        <section className="w-full h-auto py-10 border border-b-2 border-gray100">
          <div className="app-max-width app-x-padding h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="w-full sm:col-span-2 lg:col-span-2">
              <OverlayContainer
                imgSrc="/image/MUDAHDIGITAL_BIG.png"
                imgSrc2="/image/1.png"
                imgAlt="New Arrivals"
              >
                <LinkButton
                  href="/product-category/mudahdigital"
                  extraClass="absolute bottom-10-per sm:right-10-per z-20"
                >
                  Mudahdigital
                </LinkButton>
              </OverlayContainer>
            </div>
            <div className="w-full">
              <OverlayContainer
                imgSrc="/image/3.png"
                imgAlt="Women Collection"
              >
                <LinkButton
                  href="/product-category/msi"
                  extraClass="absolute bottom-10-per z-20"
                >
                  MSI
                </LinkButton>
              </OverlayContainer>
            </div>
            <div className="w-full">
              <OverlayContainer
                imgSrc="/image/2.png"
                imgAlt="Men Collection"
              >
                <LinkButton
                  href="/product-category/seven-pro"
                  extraClass="absolute bottom-10-per z-20"
                >
                  SevenPro
                </LinkButton>
              </OverlayContainer>
            </div>
          </div>
        </section>

        {/* ===== Testimonial Section ===== */}
        <section className="w-full hidden h-full py-16 md:flex flex-col items-center bg-lightgreen">
          <h2 className="text-3xl">testimonial</h2>
          <TestiSlider />
        </section>

        {/* ===== Best Selling Section ===== */}
        <section className="app-max-width w-full h-full flex flex-col justify-center mt-16 mb-20">
          <div className="flex justify-center">
            <div className="w-3/4 sm:w-1/2 md:w-1/3 text-center mb-8">
              <h2 className="text-3xl mb-4">Mudahdigital</h2>
              <span>Produk Mudahdigital</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-12 gap-y-6 mb-10 app-x-padding">
            <Card key={mdData[1].id} item={mdData[1]} />
            <Card key={mdData[2].id} item={mdData[2]} />
            <Card key={mdData[3].id} item={mdData[3]} />
            <Card key={mdData[4].id} item={mdData[4]} />
          </div>
          <div className="flex justify-center">
            <Button
              value={!isFetching ? "See More" : "loading"}
              onClick={handleSeemore}
            />
          </div>
        </section>

        {/* ===== Best Selling Section ===== */}
        <section className="app-max-width w-full h-full flex flex-col justify-center mt-16 mb-20">
          <div className="flex justify-center">
            <div className="w-3/4 sm:w-1/2 md:w-1/3 text-center mb-8">
              <h2 className="text-3xl mb-4">SevenPro</h2>
              <span>Produk SevenPro</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-12 gap-y-6 mb-10 app-x-padding">
            <Card key={sevenProData[0].id} item={sevenProData[0]} />
            <Card key={sevenProData[1].id} item={sevenProData[1]} />
          </div>
          <div className="flex justify-center">
            <Button
              value={!isFetching ? "See More" : "loading"}
              onClick={handleSeemore}
            />
          </div>
        </section>

        {/* ===== Best Selling Section ===== */}
        <section className="app-max-width w-full h-full flex flex-col justify-center mt-16 mb-20">
          <div className="flex justify-center">
            <div className="w-3/4 sm:w-1/2 md:w-1/3 text-center mb-8">
              <h2 className="text-3xl mb-4">Mahkota Sukses Indonesia (MSI)</h2>
              <span>Produk MSI</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-12 gap-y-6 mb-10 app-x-padding">
            <Card key={msiData[1].id} item={msiData[1]} />
            <Card key={msiData[2].id} item={msiData[2]} />
            <Card key={msiData[3].id} item={msiData[3]} />
            <Card key={msiData[4].id} item={msiData[4]} />
          </div>
          <div className="flex justify-center">
            <Button
              value={!isFetching ? "See More" : "loading"}
              onClick={handleSeemore}
            />
          </div>
        </section>

        <div className="border-gray100 border-b-2"></div>

      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </>
  );
};

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   let products: itemType[] = [];
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products?order_by=createdAt.desc&limit=10`
//   );
//   const fetchedProducts = res.data;
//   fetchedProducts.data.forEach((product: apiProductsType) => {
//     products = [
//       ...products,
//       {
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         img1: product.image1,
//         img2: product.image2,
//       },
//     ];
//   });
//   return {
//     props: {
//       messages: {
//         // ...require(`../messages/index/${locale}.json`),
//         ...require(`../messages/common/${locale}.json`),
//       },
//       products,
//     }, // will be passed to the page component as props
//   };
// };

export default Home;
