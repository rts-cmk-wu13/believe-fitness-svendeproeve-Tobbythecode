"use client";



import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  return (
<>
      <div className="pb-20">{children}</div>
   
</>
  );
}