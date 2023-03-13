import { FC, ReactNode } from "react";
import { Header } from "@/components/common/Header";

export const Layout: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Header title={title} />
      <div className="max-w-screen-md mx-auto px-2 sm:px-4 md:px-4">
        {children}
      </div>

      <div className="h-8" />
    </div>
  );
};
