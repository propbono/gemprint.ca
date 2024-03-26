import { FC, PropsWithChildren } from "react";
import { LuArrowDownCircle } from "react-icons/lu";

export const SectionHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="mb-5 flex items-center justify-center text-primary">
        <LuArrowDownCircle size={32} />
      </div>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center text-center">
        {children}
      </div>
    </>
  );
};
