import styles from '@/components/styles/Footer.module.scss';

const {
  FooterSection,
  ContentWrapper,
  FooterContent,
  FooterLink
} = styles;

const Footer = () => {

  return(
    <footer className={FooterSection}>
      <div className="container">
        <div className={ContentWrapper}>
          <p className={FooterContent}>
            Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. Design: <a className={FooterLink} rel="nofollow" href="https://templatemo.com">TemplateMo</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;