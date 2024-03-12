import Image from "next/image";
import featuredIcon from '@/assets/img/featured-icon.png';
import InfoTable from "./InfoTable";
import FaqAccordion from "./FaqAccordion";
import { getHomeFeatured } from "@/lib/services/home-featured.service";
import styles from '@/components/styles/Featured.module.scss'

const {
  Featured:FeaturedCss, 
  ImageWrapper,
  Image:ImageCss,
  ImageIcon, 
  AccordionWrapper, 
  Heading,
  HeadingSubtitle,
  HeadingTitle,
  FlexBox,
  ImageLink,
  InfoTableWrapper
} = styles;

const Featured = async () => {

  const dataFeatured = await getHomeFeatured();
  const tableData = {
    totalSpace: '250',
    contractReady: 'Contract',
    paymentProcess: 'Cash',
    underControl: 'Safety'
  }

  return (
    <div className={FeaturedCss}>
      <div className="container">
        <div className={FlexBox}>
          <div className={ImageWrapper}>
            <Image src={dataFeatured.photo.sourceUrl} width={360} height={515} alt="" className={ImageCss}/>
            <a className={ImageLink} href="#">
              <Image src={featuredIcon} alt="" className={ImageIcon}/>
            </a>
          </div>
          <div className={AccordionWrapper}>
            <div className={Heading}>
              <h6 className={HeadingSubtitle}>| Featured</h6>
              <h2 className={HeadingTitle} dangerouslySetInnerHTML={{__html: dataFeatured.title}}/>
            </div>
            
            <FaqAccordion/>
            
          </div>
          
          <div className={InfoTableWrapper}>
            <InfoTable data={tableData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;