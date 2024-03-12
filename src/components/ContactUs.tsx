import InfoCard from './InfoCard';
import ContactForm from './ContactForm';
import { getHomeContactUs } from '@/lib/services/home-contactus.service';
import styles from '@/components/styles/ContactUs.module.scss';

const {
  ContactSection,
  FlexBox,
  MapCardWrapper,
  ContactMap,
  Grid,
  FormWrapper,
  Heading,
  HeadingSubtitle,
  HeadingTitle,
  ContentWrapper,
  ContactContent
} = styles;

const ContactUs = async () => {

  const contactUsData = await getHomeContactUs();

  return (
    <>
      <div className={ContactSection} style={{backgroundImage: `url("${contactUsData.background}")`}}>
        <div className="container">
          <div className={FlexBox}>
            <div className={Heading}>
              <h6 className={HeadingSubtitle}>| Contact Us</h6>
              <h2 className={HeadingTitle}>{contactUsData.title}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={ContactContent}>
        <div className="container">
          <div className={ContentWrapper}>
            <div className={MapCardWrapper}>
              <iframe className={ContactMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="500px" frameBorder="0" allowFullScreen></iframe>

              <div className={Grid}>
                {contactUsData.cardsInfo.map((item) => {
                  return <InfoCard data={item.cardsInfo} key={item.id}/>
                })}
                
              </div>
            </div>

            <div className={FormWrapper}>
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;