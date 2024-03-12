import styles from './styles.module.scss';
import PagesHeader from '@/components/PagesHeader';
import FunFacts from '@/components/FunFacts';
import Image from 'next/image';
import { getAboutUsData } from '@/lib/services/about-page.service';
import { text } from 'stream/consumers';

const {
  PageSection,
  PageFlex,
  ContentWrapper,
  Heading,
  HeadingSubtitle,
  HeadingTitle,
  PageText,
  ImageWrapper,
  PageImage
} = styles;

const Page = async () => {

  const pageData = await getAboutUsData();

  const breadcrumbs = [
    {url: '/', label: 'Home'},
    {url: '', label: 'About', disable: true}
  ]

  return (
    <>
      <PagesHeader breadcrumbs={breadcrumbs} title='About Us'/>

      <div className={PageSection}>
        <div className="container">
          <div className={PageFlex}>
            <div className={ContentWrapper}>
              <div className={Heading}>
                <h6 className={HeadingSubtitle}>| About Us</h6>
                <h2 className={HeadingTitle}>Your Trusted Real Estate Partner</h2>
              </div>
              <h6 className={PageText} dangerouslySetInnerHTML={{__html: pageData.text}}/>
            </div>
            
            <div className={ImageWrapper}>
              <Image className={PageImage} src={pageData.imageUrl} alt='' width={10000} height={10000}/>
            </div>
          </div>

          <FunFacts/>
        </div>
      </div>
    </>
  );
}
export default Page;