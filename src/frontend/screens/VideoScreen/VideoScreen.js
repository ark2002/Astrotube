import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RecommendationCard, VideoPlayer } from "../../components";
import { UseExplore } from "../../context";
import axios from "axios";
import "./VideoScreen.css";

const VideoScreen = () => {
  const [playerVideo, setPlayerVideo] = useState(null);

  const { videos } = UseExplore();
  const { videoId } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/video/${videoId}`);
      setPlayerVideo(data.video);
    })();
  }, [videoId]);

  return (
    playerVideo && (
      <div className="video-screen__container flex--row">
        <section className="video__main flex--column">
          <VideoPlayer video={playerVideo} />
        </section>
        <aside className="video__recommendations flex--column">
          {videos
            .filter(
              (video) =>
                video.category === playerVideo.category && video._id !== videoId
            )
            .map((video) => (
              <RecommendationCard video={video} key={video._id} />
            ))}
        </aside>
      </div>
    )
  );
};

export { VideoScreen };
