import Card from "./Card";
import { getHomeProperties } from "@/lib/services/home-properties.service";
import styles from '@/components/styles/Properties.module.scss';

const {
  Properties:PropertiesCss,
  FlexBox,
  Heading,
  HeadingSubtitle,
  HeadingTitle,
  PropertiesGrid
} = styles;

const Properties = async () => {

  const propertiesData = await getHomeProperties();

  return (
    <div className={PropertiesCss}>
      <div className="container">

        <div className={FlexBox}>
          <div className={Heading}>
            <h6 className={HeadingSubtitle}>| Properties</h6>
            <h2 className={HeadingTitle}>{propertiesData.title}</h2>
          </div>
        </div>

        <div className={PropertiesGrid}>
          {propertiesData.cards.map((item) => {
            return (
              <Card data={item.cards} slug={item.slug} key={item.id}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Properties;