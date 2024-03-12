import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/styles/Card.module.scss';

import { CardsData } from '@/models/home.models';

const {
  CardWrapper,
  Card:CardCss,
  CardImgLink,
  CardImg,
  CardCategory,
  CardPrice,
  CardAddress,
  CardList,
  CardListItem,
  CardButton
} = styles;

const Card = ({data, slug}:{
  data: CardsData,
  slug: string
}) => {

  const {
    address,
    caracteristics: {
      char1,
      char2,
      char3,
      char4,
      char5,
      descr1,
      descr2,
      descr3,
      descr4,
      descr5
    },
    image: {
      sourceUrl
    },
    price,
    type
  } = data;

  return (
    <div className={CardWrapper}>
      
      <div className={CardCss}>
        <Link className={CardImgLink} href={"properties/" + slug}><Image priority width={712} height={540} className={CardImg} src={sourceUrl} alt=""/></Link>
        <span className={CardCategory}>{type}</span>
        <h6 className={CardPrice}>{`$${price}`}</h6>
        <h4 className={CardAddress}><Link href={"properties/" + slug}>{address}</Link></h4>
        <ul className={CardList}>
          <li className={CardListItem}>{`${char1}:`} <span>{descr1}</span></li>
          <li className={CardListItem}>{`${char2}:`} <span>{descr2}</span></li>
          <li className={CardListItem}>{`${char3}:`} <span>{descr3}</span></li>
          <li className={CardListItem}>{`${char4}:`} <span>{descr4}</span></li>
          <li className={CardListItem}>{`${char5}:`} <span>{descr5}</span></li>
        </ul>

        <Link href={"properties/" + slug} className={CardButton}>
          Schedule a visit
        </Link>

      </div>
    </div>
  );
};

export default Card;