import PagesHeader from "@/components/PagesHeader";
import ContactForm from "@/components/ContactForm";
import InfoCard from "@/components/InfoCard";
import { getContactUsData } from "@/lib/services/contacts-page.service";
import styles from './styles.module.scss';

const {
  PageSection,
  PageFlex,
  ContentWrapper,
  Heading,
  HeadingSubtitle,
  HeadingTitle,
  PageText,
  PageInfoCards,
  PageMap,
  FormWrapper
} = styles;

const page = async () => {

  const pageData = await getContactUsData();

  const {
    text,
    cards
  } = pageData;

  const breadcrumbs = [
    {url: '/', label: 'Home'},
    {url: '', label: 'Contacts', disable: true}
  ]

  return (
    <>
      <PagesHeader breadcrumbs={breadcrumbs} title='Contact Us'/>

      <div className={PageSection}>
        <div className="container">
          <div className={PageFlex}>
            <div className={ContentWrapper}>
              <div className={Heading}>
                <h6 className={HeadingSubtitle}>| Contact Us</h6>
                <h2 className={HeadingTitle}>Get In Touch With Our Agents</h2>
              </div>
              <h6 className={PageText} dangerouslySetInnerHTML={{__html: text}}/>
              <div className={PageInfoCards}>
                {cards.map((card) => {
                  return (
                    <InfoCard data={card.cards} key={card.id}/>
                  )
                })}
              </div>
            </div>
            
            <div className={FormWrapper}>
              <ContactForm/>
            </div>

            <iframe className={PageMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="500px" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
