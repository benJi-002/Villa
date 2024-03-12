import Image from 'next/image';
import { CardInfoData } from '@/models/home.models';
import styles from '@/components/styles/InfoCard.module.scss';

const {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle
} = styles;

const InfoCard = ({data}:{
  data: CardInfoData
}) => {

  const {
    icon: {
      altText,
      sourceUrl
    },
    subtitle,
    title
  } = data;

  return (
    <div className={Card}>
      <Image className={CardImg} src={sourceUrl} alt={altText}  width={52} height={52}/>
      <div>
        <h5 className={CardTitle}>{title}</h5>
        <h6 className={CardSubtitle}>{subtitle}</h6>
      </div>
    </div>
  );
};

export default InfoCard;