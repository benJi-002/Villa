import PagesHeader from '@/components/PagesHeader';
import FaqAccordion from '@/components/FaqAccordion';
import InfoTable from '@/components/InfoTable';
import BestDeal from '@/components/BestDeal';
import { PropertyData } from '@/models/property.models';
import { getClient } from '@/lib/apollo/client';
import { GET_PROPERTY } from '@/db/queries/property';
import Image from 'next/image';
import styles from './style.module.scss';

const {
  PropertySection,
  PropertyContent,
  LeftSection,
  PropertyImage,
  PropertySubtitle,
  PropertyTitle,
  PropertyDescr,
  PropertyAccordion,
  RightSection,
  PropertyImageBox
} = styles;

interface pageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: pageProps) => {

  const { slug } = params;

  const { data } = await getClient().query<PropertyData>({
    query: GET_PROPERTY,
    variables: {
      slug
    }
  });

  const {
    card: {
      homeCards: {
        address,
        infoTable,
        description,
        type,
        image: {
          sourceUrl
        }
      }
    }
  } = data

  const breadcrumbs = [
    {url: '/', label: 'Home'},
    {url: '/properties', label: 'Properties'},
    {url: '', label: `${type}`, disable: true}
  ]

  return (
    <>
      <PagesHeader breadcrumbs={breadcrumbs} title='Single property'/>

      <div className={PropertySection}>
        <div className="container">
          <div className={PropertyContent}>
            <div className={LeftSection}>
              <div className={PropertyImageBox}>
                <Image className={PropertyImage} src={sourceUrl} alt='' priority width={856} height={480}/>
              </div>
              <h5 className={PropertySubtitle}>{type}</h5>
              <h4 className={PropertyTitle}>{address}</h4>
              <div className={PropertyDescr} dangerouslySetInnerHTML={{__html: description}}/>
              <div className={PropertyAccordion}>
                <FaqAccordion/>
              </div>
            </div>
            <div className={RightSection}>
              <InfoTable data={infoTable}/>
            </div>
          </div>
        </div>
      </div>

      <BestDeal/>
    </>
  );
}

export default page;