import Link from 'next/link';
import styles from '@/components/styles/PagesHeader.module.scss';

const {
  PageHeaderSection,
  ContentWrapper,
  Breadrumbs,
  Title,
  BreadrumbsLink
} = styles;

interface BreadcrumbsData {
  url: string,
  label: string,
  disable?: boolean
}

const PagesHeader = ({breadcrumbs, title}:{
  breadcrumbs: BreadcrumbsData[],
  title: string
}) => {

  return(
    <div className={PageHeaderSection}>
      <div className="container">
        <div className={ContentWrapper}>
          <h4 className={Breadrumbs}>
            {breadcrumbs.map((item, index) => {
              if (item.disable) {
                return <span key={index}>{item.label}</span>
              } else {
                return <span key={index}><Link className={BreadrumbsLink} href={item.url}>{item.label}</Link> / </span>
              }
            })}
          </h4>
          <h3 className={Title}>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default PagesHeader;