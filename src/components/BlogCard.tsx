import styles from '@/components/styles/BlogCard.module.scss';
import { BlogCardData } from '@/models/blog-card.models';
import Link from 'next/link';
import Image from 'next/image';

const {
  CardWrapper,
  Card:CardCss,
  CardImgLink,
  CardImg,
  CardTitle,
  CardExcerpt,
} = styles;


const BlogCard = ({data}:{
  data: BlogCardData
}) => {

  const {
    title,
    excerpt,
    slug,
    featuredImage: {
      node: {
        sourceUrl
      }
    }
  } = data;
  
  return (
    <div className={CardWrapper}>
      <div className={CardCss}>
        <Link className={CardImgLink} href={"blog/" + slug}><Image priority width={712} height={540} className={CardImg} src={sourceUrl} alt=""/></Link>
        <h4 className={CardTitle}><Link href={"blog/" + slug}>{title}</Link></h4>
        <div className={CardExcerpt} dangerouslySetInnerHTML={{__html: excerpt}}/>
      </div>
    </div>
  );
}

export default BlogCard;