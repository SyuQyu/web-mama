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
type OrderType = "latest" | "price" | "price-desc";

type Props = {
  items1: itemType[];
};

const ProductCategory: React.FC<Props> = ({
  items1,
}) => {

  const items = [
    {
      "id": 1,
      "name": "Classic White T-Shirt",
      "price": 150000,
      "category": "t-shirts",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-01T12:00:00Z"
    },
    {
      "id": 2,
      "name": "Denim Jacket",
      "price": 350000,
      "category": "jackets",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-02T12:00:00Z"
    },
    {
      "id": 3,
      "name": "Casual Sneakers",
      "price": 500000,
      "category": "shoes",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-03T12:00:00Z"
    },
    {
      "id": 4,
      "name": "Leather Wallet",
      "price": 250000,
      "category": "accessories",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-04T12:00:00Z"
    },
    {
      "id": 5,
      "name": "Summer Dress",
      "price": 300000,
      "category": "dresses",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-05T12:00:00Z"
    },
    {
      "id": 6,
      "name": "Black Hoodie",
      "price": 200000,
      "category": "hoodies",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-06T12:00:00Z"
    },
    {
      "id": 7,
      "name": "Leather Boots",
      "price": 600000,
      "category": "shoes",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-07T12:00:00Z"
    },
    {
      "id": 8,
      "name": "Blue Jeans",
      "price": 220000,
      "category": "pants",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-08T12:00:00Z"
    },
    {
      "id": 9,
      "name": "Floral Skirt",
      "price": 180000,
      "category": "skirts",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-09T12:00:00Z"
    },
    {
      "id": 10,
      "name": "Round Sunglasses",
      "price": 120000,
      "category": "accessories",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-10T12:00:00Z"
    },
    {
      "id": 11,
      "name": "Red Scarf",
      "price": 80000,
      "category": "accessories",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-11T12:00:00Z"
    },
    {
      "id": 12,
      "name": "Winter Coat",
      "price": 750000,
      "category": "jackets",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-12T12:00:00Z"
    },
    {
      "id": 13,
      "name": "Chino Pants",
      "price": 260000,
      "category": "pants",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-13T12:00:00Z"
    },
    {
      "id": 14,
      "name": "White Sneakers",
      "price": 550000,
      "category": "shoes",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-14T12:00:00Z"
    },
    {
      "id": 15,
      "name": "Tank Top",
      "price": 100000,
      "category": "t-shirts",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-15T12:00:00Z"
    },
    {
      "id": 16,
      "name": "Plaid Shirt",
      "price": 170000,
      "category": "shirts",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-16T12:00:00Z"
    },
    {
      "id": 17,
      "name": "Grey Hoodie",
      "price": 200000,
      "category": "hoodies",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-17T12:00:00Z"
    },
    {
      "id": 18,
      "name": "Belt Bag",
      "price": 150000,
      "category": "accessories",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-18T12:00:00Z"
    },
    {
      "id": 19,
      "name": "Sports Shorts",
      "price": 120000,
      "category": "pants",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-19T12:00:00Z"
    },
    {
      "id": 20,
      "name": "Knit Beanie",
      "price": 95000,
      "category": "accessories",
      "img1": "https://picsum.photos/200/300",
      "img2": "https://picsum.photos/200/300",
      "createdAt": "2024-01-20T12:00:00Z"
    }
  ]

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
  return (
    <div>
      {/* ===== Head Section ===== */}
      <Header title={`${capitalizedCategory} - Haru Fashion`} />

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

        {/* ===== Main Content Section ===== */}
        <div className="app-x-padding app-max-width mt-3 mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-6 mb-10">
            {data.map((item: any) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </div>
  );
};


export default ProductCategory;
