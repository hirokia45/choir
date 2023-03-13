import React from "react";
import { PrismicRichText } from "@prismicio/react";
// @ts-ignore
import Player from "@madzadev/audio-player";
import {
  AudioListSlice,
  AudioListSliceDefaultItem,
  Simplify,
} from "@/.slicemachine/prismicio";
import * as prismicT from "@prismicio/types";

/**
 * @typedef {import("@prismicio/client").Content.AudioListSlice} AudioListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AudioListSlice>} AudioListProps
 * @param { AudioListProps }
 */
const AudioList = ({ slice }: { slice: AudioListSlice }) => {
  console.log(slice);
  return (
    <section className="my-12">
      <div className="card w-full bg-base-100 shadow-xl">
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
  console.log(data);
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center ml-4 text-md font-medium text-gray-900">
          <PrismicRichText field={data.title} />
        </div>

        <audio
          controls
          id={`audio-id-${"name" in data.audio ? data.audio.name : "piece"}`}
          className="w-30"
          style={{ width: "500px" }}
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
