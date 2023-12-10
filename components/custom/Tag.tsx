import type { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
      {children}
    </div>
  );
}
