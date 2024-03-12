import { Facebook, Twitter, Linkedin, Instagram, Map, Mail } from 'lucide-react';
import style from '@/components/styles/SubHeader.module.scss';

const {
  SubHeader:SubHeaderCss, 
  SubHeaderInfo, 
  SubHeaderList, 
  SubHeaderIcon, 
  Social, 
  SocialList, 
  SocialLink,
  FlexBox
} = style;

const SubHeader = () => {

  return (
    <div className={SubHeaderCss}>
      <div className="container">
        <div className={FlexBox}>
          <ul className={SubHeaderInfo}>
            <li className={SubHeaderList}>
              <i className={SubHeaderIcon}><Mail/></i> 
              info@company.com
            </li>
            <li className={SubHeaderList}>
              <i className={SubHeaderIcon}><Map/></i> 
              Sunny Isles Beach, FL 33160
            </li>
          </ul>
          <ul className={Social}>
            <li className={SocialList}><a className={SocialLink} href="#"><Facebook size={20}/></a></li>
            <li className={SocialList}><a className={SocialLink} href="#"><Twitter size={20}/></a></li>
            <li className={SocialList}><a className={SocialLink} href="#"><Linkedin size={20}/></a></li>
            <li className={SocialList}><a className={SocialLink} href="#"><Instagram size={20}/></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;