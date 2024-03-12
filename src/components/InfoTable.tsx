import Image from "next/image";
import squareIcon from '../assets/img/info-icon-01.png';
import contractIcon from '../assets/img/info-icon-02.png';
import paymentCardIcon from '../assets/img/info-icon-03.png';
import protectionIcon from '../assets/img/info-icon-04.png';
import { InfoTable } from "@/models/property.models";
import styles from '@/components/styles/InfoTable.module.scss';

const {
  InfoTable: InfoTableCss,
  ListItem,
  ListItemImg,
  ListItemTitle
} = styles;

const InfoTable = ({data}:{
  data: InfoTable
}) => {

  const {
    totalSpace,
    contractReady,
    paymentProcess,
    underControl
  } = data;

  return (
    <div className={InfoTableCss}>
      <ul>
      <li className={ListItem}>
        <Image src={squareIcon} alt="square icon"  className={ListItemImg}/>
        <h4 className={ListItemTitle}>{totalSpace} m²<br/><span>Total Flat Space</span></h4>
      </li>
      <li className={ListItem}>
        <Image src={contractIcon} alt="contract icon"  className={ListItemImg}/>
        <h4 className={ListItemTitle}>{contractReady}<br/><span>Contract Ready</span></h4>
      </li>
      <li className={ListItem}>
        <Image src={paymentCardIcon} alt="payment card icon"  className={ListItemImg}/>
        <h4 className={ListItemTitle}>{paymentProcess}<br/><span>Payment Process</span></h4>
      </li>
      <li className={ListItem}>
        <Image src={protectionIcon} alt="protection icon"  className={ListItemImg}/>
        <h4 className={ListItemTitle}>{underControl}<br/><span>24/7 Under Control</span></h4>
      </li>
      </ul>
    </div>
  );
}

export default InfoTable;