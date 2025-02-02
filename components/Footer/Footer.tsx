import Link from "next/link";
import { useTranslations } from "next-intl";

import FacebookLogo from "../../public/icons/FacebookLogo";
import InstagramLogo from "../../public/icons/InstagramLogo";
import Button from "../Buttons/Button";
import Input from "../Input/Input";
import styles from "./Footer.module.css";

export default function Footer() {

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={`app-max-width app-x-padding ${styles.footerContents}`}>
          <div>
            <h3 className={styles.footerHead}>company</h3>
            <div className={styles.column}>
              <a href="example">about_us</a>
              <a href="example">contact_us</a>
              <a href="example">store_location</a>
              <a href="example">careers</a>
            </div>
          </div>
          <div>
            <h3 className={styles.footerHead}>help</h3>
            <div className={styles.column}>
              <a href="example">order_tracking</a>
              <a href="example">faqs</a>
              <a href="example">privacy_policy</a>
              <a href="example">terms_conditions</a>
            </div>
          </div>
          <div>
            <h3 className={styles.footerHead}>store</h3>
            <div className={styles.column}>
              <Link href={`/product-category/women`}>
                <a>women</a>
              </Link>
              <Link href={`/product-category/men`}>
                <a>men</a>
              </Link>
              <Link href={`/product-category/bags`}>
                <a>bags</a>
              </Link>
            </div>
          </div>
          <div>
            <h3 className={styles.footerHead}>keep_in_touch</h3>
            <div className={styles.column}>
              <span>
                address.detail
                <br />
                address.road
                <br />
                address.city
              </span>
              <span>phone_number</span>
              <span>
                open_all_days <br />- opening_hours
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-16">
        <h4 className="text-3xl mb-4">newsletter</h4>
        <span className="px-6 text-center">newsletter_desc</span>
        <div className="mt-5 px-6 flex w-full sm:w-auto flex-col sm:flex-row">
          <Input
            label="Newsletter Input Box"
            name="email"
            type="email"
            extraClass=" w-full sm:w-auto"
          />{" "}
          <Button
            size="lg"
            value={"send"}
            extraClass="ml-0 mt-4 sm:mt-0 tracking-widest sm:tracking-normal sm:mt-0 sm:ml-4 w-auto w-full sm:w-auto"
          />
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className="app-max-width app-x-padding w-full flex justify-between">
          <span className="">@2022 Haru. all_rights_reserved</span>
          <span className="flex items-center">
            <span className="hidden sm:block">
              follow_us_on_social_media:
            </span>{" "}
            <a
              href="www.facebook.com"
              aria-label="Facebook Page for Haru Fashion"
            >
              <FacebookLogo />
            </a>
            <a
              href="www.ig.com"
              aria-label="Instagram Account for Haru Fashion"
            >
              <InstagramLogo />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
