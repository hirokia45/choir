import { FC } from "react";

export const Header: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="navbar bg-base-100 flex justify-center bg-slate-300 h-24 text-xl font-medium text-gray-900">
      {title}
      {/*<a className="btn btn-ghost normal-case text-xl">daisyUI</a>*/}
    </div>
  );
};
