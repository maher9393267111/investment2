import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/outline";


const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 left-2 z-30">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "inline-flex items-center rounded-full bg-primary p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        )}
      >
        <ArrowUpIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};