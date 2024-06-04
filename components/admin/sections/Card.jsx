
import { useRouter } from "next/router";

import { ChevronRight } from "@/functions/icons";

export const ProfileNav = ({ href, label, desc ,number }) => {


    const router = useRouter();
  
    return (
      <div
        onClick={() => router.push(href)}
        className="relative border rounded-md p-8 w-full group cursor-pointer hover:scale-105 transition-all"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2" />
        <div className="space-y-2">
          <h3 className="group-hover:underline capitalize">{label}</h3>
          <p>{desc}</p>
          <p>{number}</p>
        </div>
      </div>
    );
  };