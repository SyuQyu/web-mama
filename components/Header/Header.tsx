import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Menu/Menu";
import AppHeader from "./AppHeader";
import { useWishlist } from "../../context/wishlist/WishlistProvider";

import styles from "./Header.module.css";

type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({ title }) => {
  const { wishlist } = useWishlist();
  const [animate, setAnimate] = useState("");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [didMount, setDidMount] = useState<boolean>(false); // to disable Can't perform a React state Warning

  // Calculate Number of Wishlist
  let noOfWishlist = wishlist.length;

  // Animate Wishlist Number
  const handleAnimate = useCallback(() => {
    if (noOfWishlist === 0) return;
    setAnimate("animate__animated animate__headShake");
  }, [noOfWishlist, setAnimate]);

  // Set animate when no of wishlist changes
  useEffect(() => {
    handleAnimate();
    setTimeout(() => {
      setAnimate("");
    }, 1000);
  }, [handleAnimate]);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [setScrolled]);

  useEffect(() => {
    setDidMount(true);
    window.addEventListener("scroll", handleScroll);
    return () => setDidMount(false);
  }, [handleScroll]);

  if (!didMount) {
    return null;
  }
  return (
    <>
      {/* ===== <head> section ===== */}
      <AppHeader title={title} />

      {/* ===== Skip to main content button ===== */}
      <a
        href="#main-content"
        className="whitespace-nowrap absolute z-50 left-4 opacity-90 rounded-md bg-white px-4 py-3 transform -translate-y-40 focus:translate-y-0 transition-all duration-300"
      >
        skip_to_main_content
      </a>

      {/* ===== Main Navigation ===== */}
      <nav
        className={`${scrolled ? "bg-white sticky top-0 shadow-md z-50" : "bg-transparent"
          } w-full z-50 h-20 relative`}
      >
        <div className="app-max-width w-full">
          <div
            className={`flex justify-between align-baseline app-x-padding ${styles.mainMenu}`}
          >
            {/* Hamburger Menu and Mobile Nav */}
            <div className="flex-1 lg:flex-0 lg:hidden">
              <Menu />
            </div>

            {/* Left Nav */}
            <ul className={`flex-0 lg:flex-1 flex ${styles.leftMenu}`}>
              <li>
                <Link href={`/product-category/mudahdigital`}>
                  <a>Mudahdigital</a>
                </Link>
              </li>
              <li>
                <Link href={`/product-category/seven-pro`}>
                  <a>SevenPro</a>
                </Link>
              </li>
              <li>
                <Link href="/product-category/msi">
                  <a>MSI</a>
                </Link>
              </li>
            </ul>

            {/* Haru Logo */}
            {/* <div className="flex-1 flex justify-center items-center cursor-pointer">
              <div className="w-32 h-auto">
                <Link href="/">
                  <a>
                    <Image
                      src="/image/ERNI_LOGO.png"
                      alt="Picture of the author"
                      className="justify-center max-w-[220px] max-h-[50px] object-contain w-full h-full"
                      width={220}
                      height={100}
                      layout="responsive"
                    />
                  </a>
                </Link>
              </div>
            </div> */}

            {/* Right Nav */}
            <ul className={`flex-1 flex justify-end ${styles.rightMenu}`}>
              <li>
                <SearchForm />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
