import React from "react";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import {
  PerformanceHistorySlice,
  PerformanceHistorySliceDefaultItem,
} from "@/.slicemachine/prismicio";

/**
 * @typedef {import("@prismicio/client").Content.PerformanceHistorySlice} PerformanceHistorySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PerformanceHistorySlice>} PerformanceHistoryProps
 * @param { PerformanceHistoryProps }
 */
const PerformanceHistory = ({ slice }: { slice: PerformanceHistorySlice }) =>
  slice.items.length == 0 ? null : (
    <section className="pt-4 sm:pt-8 pb-8 sm:pb-12">
      <div className="text-center p-6">
        <div className="text-lg font-medium text-gray-900">
          Performance History / 演奏履歴
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact table-auto w-full">
          <thead>
            <tr>
              <th>Date (日付)</th>
              <th>Event Name (イベント名)</th>
            </tr>
          </thead>
          <tbody>
            {slice.items.map((row, index) => (
              <History key={index} data={row} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

const History = ({ data }: { data: PerformanceHistorySliceDefaultItem }) => {
  const date = prismicH.asDate(data.performance_date);
  return (
    <tr>
      <td>{formatDate(date!)}</td>
      <td>
        <PrismicRichText field={data.event_name} />
      </td>
    </tr>
  );
};

function formatDate(dt: Date) {
  if (!dt) return "";

  const y = dt.getFullYear();
  const m = ("00" + (dt.getMonth() + 1)).slice(-2);
  const d = ("00" + dt.getDate()).slice(-2);
  return y + "/" + m + "/" + d;
}

export default PerformanceHistory;
