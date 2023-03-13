import React, { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import {
  SongSetSlice,
  SongSetSliceDefaultItem,
} from "@/.slicemachine/prismicio";
import Link from "next/link";
import { FilledContentRelationshipField } from "@prismicio/types";

/**
 * @typedef {import("@prismicio/client").Content.SongSetSlice} SongSetSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SongSetSlice>} SongSetProps
 * @param { SongSetProps }
 */
const SongSet = ({ slice }: { slice: SongSetSlice }) => {
  return (
    <section className="my-8 sm:my-12">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-title">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="flex text-md font-medium text-gray-900">
            <span className="mr-2">
              Composer(s) <span className="text-gray-500">作曲者</span>:
            </span>
            <PrismicRichText field={slice.primary.composer} />
          </div>
          <div className="flex text-md font-medium text-gray-900">
            <span className="mr-2">
              Language <span className="text-gray-500">言語</span>:
            </span>
            <PrismicRichText field={slice.primary.language} />
          </div>
          <div className="flex text-md font-medium text-gray-900">
            <span className="mr-2">
              Duration <span className="text-gray-500">演奏時間</span>:
            </span>
            <PrismicRichText field={slice.primary.performance_duration} />
          </div>
        </div>
        <div className="divider -mt-4 -mb-2" />

        <div className="flow-root ">
          <ul role="list" className="divide-y divide-gray-200">
            {slice.items.map((item, index) => (
              <SongListItem key={index} index={index} data={item} />
            ))}
          </ul>
        </div>

        <div className="h-3" />
      </div>
    </section>
  );
};

const SongListItem = ({
  index,
  data,
}: {
  index: number;
  data: SongSetSliceDefaultItem;
}) => {
  const link = data.link as FilledContentRelationshipField;
  return (
    <Link href={`/pieces/${link.uid}`}>
      <li className="px-4 sm:px-8 py-3 sm:py-4 hover:bg-gray-200 ">
        <div className="flex items-center justify-start">
          <div className="h-10 w-full flex items-center">
            <div className="text-md font-medium text-gray-900 mr-2">
              {index + 1}.{" "}
            </div>
            <div className="w-full flex justify-between">
              <div className="text-sm font-medium text-gray-900 truncate">
                <PrismicRichText field={data.title} />
              </div>
              <div className="text-sm font-medium text-gray-900 truncate">
                <PrismicRichText field={data.performance_duration} />
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default SongSet;
