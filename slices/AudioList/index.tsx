import React from "react";
import { PrismicRichText } from "@prismicio/react";
import {
  AudioListSlice,
  AudioListSliceDefaultItem,
} from "@/.slicemachine/prismicio";

/**
 * @typedef {import("@prismicio/client").Content.AudioListSlice} AudioListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AudioListSlice>} AudioListProps
 * @param { AudioListProps }
 */
const AudioList = ({ slice }: { slice: AudioListSlice }) => {
  return (
    <section className="my-8 sm:my-12">
      <div className="card card-compact sm:card-normal w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div>
            {slice.items.map((audio, index) => (
              <AudioPlayer
                key={index}
                data={audio}
                isLastItem={slice.items.length - 1 == index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AudioPlayer = ({
  data,
  isLastItem,
}: {
  data: AudioListSliceDefaultItem;
  isLastItem: boolean;
}) => {
  return (
    <>
      <div className="sm:flex justify-between">
        <div className="mb-4 sm:mb-0 sm:ml-4 flex items-center text-md font-medium text-gray-900">
          <PrismicRichText field={data.title} />
        </div>

        <audio
          controls
          id={`audio-id-${"name" in data.audio ? data.audio.name : "piece"}`}
          className="w-full sm:w-3/4"
        >
          <source
            src={"url" in data.audio ? data.audio.url : ""}
            type="audio/mpeg"
          />
        </audio>
      </div>
      {isLastItem ? null : <div className="divider" />}
    </>
  );
};

export default AudioList;
