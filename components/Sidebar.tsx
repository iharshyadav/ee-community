import Link from "next/link";
import Image from "next/image";
import User01 from "@/public/images/avatar-01.jpg";
import User05 from "@/public/images/avatar-05.jpg";
import User06 from "@/public/images/avatar-06.jpg";
import User09 from "@/public/images/avatar-09.jpg";
import Startup01 from "@/public/images/startup-01.svg";
import Startup02 from "@/public/images/startup-02.svg";
import Startup03 from "@/public/images/startup-03.svg";

export default function Sidebar() {
  return (
    <aside className="md:w-64 lg:w-80 md:shrink-0 pt-6 pb-12 md:pb-20">
      <div className="md:pl-6 lg:pl-10">
        {/* Sidebar content */}
        <div className="space-y-6">
          {/* Search form */}
          <form>
            <div className="flex flex-wrap">
              <div className="w-full">
                <label className="block text-sm sr-only" htmlFor="search">
                  Search
                </label>
                <div className="relative flex items-center">
                  <input
                    id="search"
                    type="search"
                    className="form-input py-1 w-full pl-10 rounded-full"
                  />
                  <div className="absolute inset-0 right-auto flex items-center justify-center">
                    <svg
                      className="w-4 h-4 shrink-0 mx-3"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-slate-600"
                        d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* New Discussions */}
          <div>
            <div className="text-xs uppercase text-slate-600 font-semibold mb-4">
              New Discussions
            </div>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center mb-1">
                  <Image
                    className="rounded-full mr-2"
                    src={User06}
                    width="16"
                    height="16"
                    alt="User 06"
                  />
                  <div className="text-xs">
                    <a
                      className="font-medium text-green-500 hover:text-green-400 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      MaryLync77
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <Link
                    className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out"
                    href="/posts/1"
                  >
                    Search Startup Jobs - Week 5 - Build in Public - Slow Week
                  </Link>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">22 Feb</span> ·{" "}
                  <span className="text-slate-500">14 Comments</span>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-1">
                  <Image
                    className="rounded-full mr-2"
                    src={User09}
                    width="16"
                    height="16"
                    alt="User 09"
                  />
                  <div className="text-xs">
                    <a
                      className="font-medium text-green-500 hover:text-green-400 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Zakaria_C
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <Link
                    className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out"
                    href="/posts/1"
                  >
                    What are the most useful tools for SEO marketing?
                  </Link>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">22 Feb</span> ·{" "}
                  <span className="text-slate-500">44 Comments</span>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-1">
                  <Image
                    className="rounded-full mr-2"
                    src={User05}
                    width="16"
                    height="16"
                    alt="User 05"
                  />
                  <div className="text-xs">
                    <a
                      className="font-medium text-green-500 hover:text-green-400 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      ElenMary182
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <Link
                    className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out"
                    href="/posts/1"
                  >
                    How can you minimize the customer acquisition cost?
                  </Link>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">20 Feb</span> ·{" "}
                  <span className="text-slate-500">19 Comments</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Latest Startups */}
          <div>
            <div className="text-xs uppercase text-slate-600 font-semibold mb-4">
              Latest Startups
            </div>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image
                      className="shrink-0 mr-3"
                      src={Startup01}
                      alt="Startup 01"
                    />
                    <h3 className="truncate text-sm">
                      <a
                        className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out"
                        href="#0"
                      >
                        Visual Studio X
                      </a>
                    </h3>
                  </div>
                  <button className="text-xs text-green-500 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Follow
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image
                      className="shrink-0 mr-3"
                      src={Startup02}
                      alt="Startup 02"
                    />
                    <h3 className="truncate text-sm">
                      <a
                        className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out"
                        href="#0"
                      >
                        Gymp DevTools
                      </a>
                    </h3>
                  </div>
                  <button className="text-xs text-green-500 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Follow
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image
                      className="shrink-0 mr-3"
                      src={Startup03}
                      alt="Startup 03"
                    />
                    <h3 className="truncate text-sm">
                      <a
                        className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out"
                        href="#0"
                      >
                        Paytable Inc
                      </a>
                    </h3>
                  </div>
                  <button className="text-xs text-green-500 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Follow
                  </button>
                </div>
              </li>
            </ul>
          </div>

          {/* Popular Posts */}
          <div>
            <div className="text-xs uppercase text-slate-600 font-semibold mb-4">
              Popular Posts
            </div>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center mb-1">
                  <Image
                    className="rounded-full mr-2"
                    src={User06}
                    width="16"
                    height="16"
                    alt="User 06"
                  />
                  <div className="text-xs">
                    <a
                      className="font-medium text-green-500 hover:text-green-400 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      MaryLync77
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <Link
                    className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out"
                    href="/posts/1"
                  >
                    How do you decide and keep focus on the{" "}
                    <em className="italic">"right"</em> things?
                  </Link>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">22 Feb</span> ·{" "}
                  <span className="text-slate-500">14 Comments</span>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-1">
                  <Image
                    className="rounded-full mr-2"
                    src={User09}
                    width="16"
                    height="16"
                    alt="User 09"
                  />
                  <div className="text-xs">
                    <a
                      className="font-medium text-green-500 hover:text-green-400 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Zakaria_C
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <Link
                    className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out"
                    href="/posts/1"
                  >
                    How do you approach building a team for your startup?
                  </Link>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">22 Feb</span> ·{" "}
                  <span className="text-slate-500">44 Comments</span>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-1">
                  <Image
                    className="rounded-full mr-2"
                    src={User01}
                    width="16"
                    height="16"
                    alt="User 01"
                  />
                  <div className="text-xs">
                    <a
                      className="font-medium text-green-500 hover:text-green-400 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      IndieMark
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <Link
                    className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out"
                    href="/posts/1"
                  >
                    The 5 big lessons I've learnt from Geeks and Experts
                  </Link>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">20 Feb</span> ·{" "}
                  <span className="text-slate-500">19 Comments</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="-rotate-1">
            <div className="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
              <div
                className="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px"
                aria-hidden="true"
              />
              <div className="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-sky-300 to-slate-200 mb-3">
                Get the best of Community, directly in your inbox.
              </div>
              {/* Form */}
              <div className="w-full">
                <label className="block text-sm sr-only" htmlFor="newsletter">
                  Email
                </label>
                <form className="relative flex items-center max-w-xs mx-auto">
                  <input
                    id="newsletter"
                    type="email"
                    className="form-input py-1.5 w-full pr-10 rounded-full"
                    placeholder="Your email"
                  />
                  <button
                    type="submit"
                    className="absolute inset-0 left-auto"
                    aria-label="Subscribe"
                  >
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mx-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </button>
                </form>
                {/* Success message */}
                {/* <p className="mt-2 text-slate-200 text-center text-xs">Thanks for subscribing!</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
