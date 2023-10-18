"use client";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
// use pathname for getting the pathname and searchparams for getting parameters

export default function PaginationButtons() {
  const pathname = usePathname();
  const SearchParams = useSearchParams();

  const searchTerm = SearchParams.get("searchTerm");
  const startIndex = +SearchParams.get("start") || 1;

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
