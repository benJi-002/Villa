import PagesHeader from '@/components/PagesHeader';
import styles from './styles.module.scss';
import './wp-styles.scss';
import { GET_POST_DATA } from '@/db/queries/post';
import { BlogPostPageData } from '@/models/blog-post.models';
import { getClient } from '@/lib/apollo/client';
import Image from 'next/image';

const {
  PostSection,
  PostImageWrapper,
  PostImage,
  PostText
} = styles;

interface pageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: pageProps) => {

  const { slug } = params;

  const { data } = await getClient().query<BlogPostPageData>({
    query: GET_POST_DATA,
    variables: {
      slug
    }
  });

  const {
    post: {
      title,
      content,
      featuredImage: {
        node: {
          sourceUrl
        }
      }
    }
  } = data;

  const breadcrumbs = [
    {url: '/', label: 'Home'},
    {url: '/blog', label: 'Blog'},
    {url: '', label: `Post`, disable: true}
  ]
  
  return (
    <>
      <PagesHeader breadcrumbs={breadcrumbs} title={title}/>

      <div className={PostSection}>
        <div className="container">
          <div className={PostImageWrapper}>
            <Image className={PostImage} src={sourceUrl} width={1320} height={480} alt=''/>
          </div>
          
          <div className={PostText} dangerouslySetInnerHTML={{__html: content}}/>
        </div>
      </div>
    </>

  
  );
}

export default page;