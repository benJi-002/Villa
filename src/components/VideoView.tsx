import { getHomeVideo } from "@/lib/services/home-video.service";
import styles from '@/components/styles/VideoView.module.scss';

const {
  Video,
  VideoContent,
  VideoFrame,
  Heading,
  HeadingSubtitle,
  HeadingTitle,
  FlexBox,
  VideoTag
} = styles;

const VideoView = async () => {
  
  const videoBlockData = await getHomeVideo();

  return (
    <>
      <div className={Video}>
        <div className="container">
          <div className={FlexBox}>
            <div className={Heading}>
              <h6 className={HeadingSubtitle}>| Video View</h6>
              <h2 className={HeadingTitle} dangerouslySetInnerHTML={{__html: videoBlockData.title}} />
            </div>
          </div>
        </div>
      </div>

      <div className={VideoContent}>
        <div className="container">
          <div className={FlexBox}>
            <div className={VideoFrame}>
              <video preload="auto" className={VideoTag} src={videoBlockData.videoUrl} poster={videoBlockData.previewUrl} controls></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoView;