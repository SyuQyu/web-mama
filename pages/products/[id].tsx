import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useTranslations } from "next-intl";
import DownArrow from "../../public/icons/DownArrow";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaWhatsapp } from "react-icons/fa";

// swiperjs
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import { apiProductsType, itemType } from "../../context/cart/cart-types";
import { useWishlist } from "../../context/wishlist/WishlistProvider";
import { useCart } from "../../context/cart/CartProvider";
import HeartSolid from "../../public/icons/HeartSolid";
import { useRouter } from "next/router";
import { msiData, mdData, sevenProData } from "../../data/data";
import { formatRupiah } from "../../components/Util/utilFunc";
import WhatsAppLogo from "../../public/icons/Whatsapp";
// install Swiper modules
SwiperCore.use([Pagination]);

type Props = {
  product1: itemType;
  products1: itemType[];
};

const Product: React.FC<Props> = () => {
  const router = useRouter();
  const { id } = router.query;

  let name = "";
  let numericId = "";

  if (typeof id === "string") {
    const parts = id.split("-");
    name = parts.slice(0, -1).join("-");
    numericId = parts[parts.length - 1];
  }

  const findProductData = (id: number, name: string) => {
    const sources = [
      { name: "msiData", data: msiData },
      { name: "mdData", data: mdData },
      { name: "sevenProData", data: sevenProData },
    ];

    for (const source of sources) {
      const found = source.data.find(item => item.id === id && item.product === name);
      if (found) {
        return { source: source.name, product: found };
      }
    }
    return null;
  };

  const result = findProductData(Number(numericId), name);
  const product: any = useMemo(() => result?.product || {
    id: "0",
    name: "Unknown Product",
    price: 0,
    detail: "No details available",
    description: "Product not found",
    img1: "/default-image.jpg",
    img2: "/default-image.jpg",
    categoryName: "unknown",
  }, [result]);

  const [mainImg, setMainImg] = useState(product.img1);

  useEffect(() => {
    setMainImg(product.img1);
  }, [product]);

  return (
    <div>
      {/* ===== Head Section ===== */}
      <Header title={`${product.name} - Erni Products`} />

      <main id="main-content">
        {/* ===== Breadcrumb Section ===== */}
        <div className="bg-lightgreen h-16 w-full flex items-center border-t-2 border-gray200">
          <div className="app-x-padding app-max-width w-full">
            <div className="breadcrumb">
              <Link href="/">
                <a className="text-gray400">home</a>
              </Link>{" "}
              /{" "}
              <Link href={`/product-category/${product.product}`}>
                <a className="text-gray400 capitalize">
                  {product.product as string}
                </a>
              </Link>{" "}
              / <span>{product.name}</span>
            </div>
          </div>
        </div>
        {/* ===== Main Content Section ===== */}
        <div className="itemSection app-max-width app-x-padding flex flex-col md:flex-row">
          <div className="imgSection w-full md:w-1/2 h-full flex">
            <div className="hidden sm:block w-full sm:w-1/4 h-full space-y-4 my-4">
              <Image
                className={`cursor-pointer ${mainImg === product.img1
                  ? "opacity-100 border border-gray300"
                  : "opacity-50"
                  }`}
                onClick={() => setMainImg(product.img1)}
                src={product.img1 as string}
                alt={product.name}
                width={1000}
                height={1282}
              />
              <Image
                className={`cursor-pointer ${mainImg === product.img2
                  ? "opacity-100 border border-gray300"
                  : "opacity-50"
                  }`}
                onClick={() => setMainImg(product.img2)}
                src={product.img2 as string}
                alt={product.name}
                width={1000}
                height={1282}
              />
            </div>
            <div className="w-full sm:w-3/4 h-full m-0 sm:m-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper sm:hidden"
              >
                <SwiperSlide>
                  <Image
                    className="each-slide w-full"
                    src={product.img1 as string}
                    width={1000}
                    height={1282}
                    alt={product.name}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="each-slide w-full"
                    src={product.img2 as string}
                    width={1000}
                    height={1282}
                    alt={product.name}
                  />
                </SwiperSlide>
              </Swiper>
              <div className="hidden sm:block h-full">
                <Image
                  className="w-full"
                  src={mainImg as string}
                  width={1000}
                  height={1282}
                  alt={product.name}
                />
              </div>
            </div>
          </div>
          <div className="infoSection w-full md:w-1/2 h-auto py-8 sm:pl-4 flex flex-col">
            <h1 className="text-3xl mb-4">{product.name}</h1>
            {
              product?.price && (
                <span className="text-2xl text-gray400 mb-2">
                  {formatRupiah(product.price)}
                </span>
              )
            }
            <span className="mb-2 text-justify">{product.description}</span>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 focus:outline-none text-left mb-4 border-b-2 border-gray200 flex items-center justify-between">
                    <span>details</span>
                    <DownArrow
                      extraClass={`${open ? "" : "transform rotate-180"
                        } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`text-gray400 animate__animated animate__bounceIn`}
                  >
                    {product.details}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <a href={`https://wa.me/+6281210033714?text=Hi%2C%20saya%20tertarik%20terhadap%20${encodeURIComponent(product.name)}%20produk.`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 mt-4">
              <span className="font-semibold">Hubungi</span>
              <FaWhatsapp className="text-xl cursor-pointer text-green font-bold hover:text-gray500" />
            </a>
          </div>
        </div>
        {/* ===== Horizontal Divider ===== */}
        <div className="border-b-2 border-gray200"></div>

        {/* ===== You May Also Like Section ===== */}
        {/* <div className="recSection my-8 app-max-width app-x-padding">
          <h2 className="text-3xl mb-6">you_may_also_like</h2>
          <Swiper
            slidesPerView={2}
            // centeredSlides={true}
            spaceBetween={10}
            loop={true}
            grabCursor={true}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            className="mySwiper card-swiper sm:hidden"
          >
            {products.map((item: any) => (
              <SwiperSlide key={item.id}>
                <div className="mb-6">
                  <Card key={item.id} item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-6 mb-10">
            {products.map((item: any) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div> */}
      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </div>
  );
};

export default Product;
