import PagesHeader from "@/components/PagesHeader";
import PropertiesCards from "@/components/PropertiesCards";
import styles from './styles.module.scss';

const {
  PropertiesSection
} = styles;

const page = () => {

  const breadcrumbs = [
    {url: '/', label: 'Home'},
    {url: '', label: 'Properties', disable: true}
  ]

  return (
    <>
      <PagesHeader breadcrumbs={breadcrumbs} title='Properties'/>
      
      <div className={PropertiesSection}>
        <div className="container">
          <PropertiesCards/>
        </div>
      </div>
    </>
  );
}

export default page;