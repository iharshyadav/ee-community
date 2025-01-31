// @ts-nocheck

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const  { replace }  = useRouter();
  const pathname = usePathname();


  const handleSearch = useDebouncedCallback((e) => {
   
    const params = new URLSearchParams(searchParams);
    // params.set("q", e.target.value)

  

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    
    } else {
      params.delete("q");
    }

  
    // replace(`${pathname}?${params}`)
    const url = `${pathname}?${params}`; // Build the URL
 
    replace(url);
  
  }, 300);

  return (
    <>
      <div className="relative">
        <label htmlFor="action-search" className="sr-only">Search</label>
        <input id="action-search" className="form-input pl-9 bg-white dark:bg-slate-800" type="text" placeholder='Search…' onChange={handleSearch}/>
        <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
          <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
            <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Search;