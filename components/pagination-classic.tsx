// @ts-nocheck

"use client";
// import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PaginationClassic({ count }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const page = parseInt(searchParams.get("page")) || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 10;

  const hasPrev = page > 1;
  const hasNext = ITEM_PER_PAGE * page < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", page - 1)
      : params.set("page", page + 1);
    router.push(`${pathname}?${params}`);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav
        className="mb-4 sm:mb-0 sm:order-1"
        role="navigation"
        aria-label="Navigation"
      >
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <a
              className={`btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-green-500 cursor-${
                !hasPrev ? "not-allowed" : "pointer"
              } ${!hasPrev && "pointer-events-none opacity-50"}`}
              onClick={() => handleChangePage("prev")}
            >
              &lt;- Previous{" "}
            </a>
          </li>
          <li className="ml-3 first:ml-0">
            <a
              className={`btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-green-500 cursor-${
                !hasNext ? "not-allowed" : "pointer"
              } ${!hasNext && "pointer-events-none opacity-50"}`}
              onClick={() => handleChangePage("next")}
            >
              Next -&gt;
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
        Showing{" "}
        <span className="font-medium text-slate-600 dark:text-slate-300">
          {(page - 1) * ITEM_PER_PAGE + 1}
        </span>{" "}
        to{" "}
        <span className="font-medium text-slate-600 dark:text-slate-300">
          {Math.min(page * ITEM_PER_PAGE, count)}
        </span>{" "}
        of{" "}
        <span className="font-medium text-slate-600 dark:text-slate-300">
          {count}
        </span>{" "}
        results
      </div>
    </div>
  );
}
