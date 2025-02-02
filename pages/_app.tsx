import { NextComponentType, NextPageContext } from "next";
import Router from "next/router";
import NProgress from "nprogress";
import { NextIntlProvider } from "next-intl";

import "../styles/globals.css";
import "animate.css";
import "nprogress/nprogress.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import { FaWhatsapp } from "react-icons/fa";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type AppCustomProps = {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
  cartState: string;
  wishlistState: string;
};

const MyApp = ({ Component, pageProps }: AppCustomProps) => {
  return (
    <>
      {/* <ProvideAuth>
        <ProvideWishlist>
          <ProvideCart> */}
      <a href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer" className="fixed z-50 bottom-10 right-8 bg-blue-600 w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300 bg-green">
        <FaWhatsapp className="text-4xl bg-red-500" />
      </a>
      <Component {...pageProps} />
      {/* </ProvideCart>
        </ProvideWishlist>
      </ProvideAuth> */}
    </>
  );
};

export default MyApp;
