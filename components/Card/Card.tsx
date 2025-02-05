import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Heart from "../../public/icons/Heart";
import styles from "./Card.module.css";
import HeartSolid from "../../public/icons/HeartSolid";
import { itemType } from "../../context/cart/cart-types";
import { useCart } from "../../context/cart/CartProvider";
import { useWishlist } from "../../context/wishlist/WishlistProvider";
import { formatRupiah } from "../Util/utilFunc";

type Props = {
  // item: itemType;
  item: any
};

const Card: FC<Props> = ({ item }) => {
  const { wishlist, addToWishlist, deleteWishlistItem } = useWishlist();
  const { addOne } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isWLHovered, setIsWLHovered] = useState(false);

  const { id, name, price, img1, img2, product } = item;

  const itemLink = `/products/${product}-${encodeURIComponent(id)}`;

  const alreadyWishlisted =
    wishlist.filter((wItem) => wItem.id === id).length > 0;

  const handleWishlist = () => {
    alreadyWishlisted ? deleteWishlistItem!(item) : addToWishlist!(item);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={itemLink}>
          <a
            tabIndex={-1}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {!isHovered && (
              <Image
                src={img1 as string}
                alt={name}
                width={0}
                height={0}
                className="bg-cover w-full h-full max-w-[230px] max-h-[320px]"
                layout="responsive"
              />
            )}
            {isHovered && (
              <Image
                className="transition-transform transform hover:scale-110 duration-1000 bg-cover w-full h-full max-w-[230px] max-h-[320px]"
                src={img2 as string}
                alt={name}
                width={0}
                height={0}
                layout="responsive"
              />
            )}
          </a>
        </Link>
      </div>

      <div className="content">
        <Link href={itemLink}>
          <a className={styles.itemName}>{name}</a>
        </Link>
        {
          price && (
            <div className="text-gray400">{formatRupiah(price)}</div>
          )
        }
      </div>
    </div>
  );
};

export default Card;
