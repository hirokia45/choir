import React from "react";
import { PrismicRichText } from "@prismicio/react";
import {
  VideoSlice,
  VideoSliceDefaultPrimary,
} from "@/.slicemachine/prismicio";

/**
 * @typedef {import("@prismicio/client").Content.VideoSlice} VideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSlice>} VideoProps
 * @param { VideoProps }
 */
const Video = ({ slice }: { slice: { primary: VideoSliceDefaultPrimary } }) => (
  <section>
    <div className="video-responsive">
      <iframe
        width="768"
        height="480"
        src={`https://www.youtube.com/embed/${slice.primary.embeded_id}?start=${
          slice.primary?.start_at || 0
        }`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={slice.primary.title || ""}
      />
    </div>
    <style jsx>{`
      .video-responsive {
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
        height: 0;
      }

      .video-responsive iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
      }
    `}</style>
  </section>
);

export default Video;
