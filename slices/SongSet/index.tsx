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
    <section className="my-12">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-title">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="flex">
            Composer: <PrismicRichText field={slice.primary.composer} />
          </div>
          <div className="flex">
            <PrismicRichText field={slice.primary.language} />
          </div>
          <div className="flex">
            <PrismicRichText field={slice.primary.performance_duration} />
          </div>
        </div>
        <div className="divider -mt-4 -mb-2" />

        <div className="flow-root ">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
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
              <div className="text-sm font-medium text-gray-900 truncate dark:text-white">
                <PrismicRichText field={data.title} />
              </div>
              <div className="text-sm font-medium text-gray-900 truncate dark:text-white">
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
