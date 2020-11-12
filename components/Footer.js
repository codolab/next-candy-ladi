import { cx } from "candy-moon";

export default function Footer() {
  return (
    <footer className={cx`bg-white`}>
      <div
        className={cx`container px-4 py-12 pt-8 mx-auto border-t border-gray-200 md:py-24 md:pt-16 md:px-0`}
      >
        <div className={cx`flex flex-col space-y-12 lg:flex-row lg:space-y-0`}>
          <div className={cx`w-full pr-0 md:max-w-md lg:pr-8`}>
            <div
              className={cx`text-base font-semibold text-gray-900 uppercase`}
            >
              Logo
            </div>

            <p className={cx`mt-4 text-sm text-gray-500`}>
              Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken
              spare ribs salami.
            </p>
          </div>
          <div
            className={cx`flex flex-wrap flex-1 space-x-0 space-y-12 md:flex-no-wrap md:space-y-0 md:space-x-32`}
          >
            <div className={cx`w-full space-y-4 md:w-1/3 xl:w-40`}>
              <div
                className={cx`text-base font-semibold text-gray-900 uppercase`}
              >
                CATEGORIES
              </div>
              <div className={cx`flex flex-col justify-end space-y-4`}>
                <a
                  to="/components"
                  className={cx`text-sm font-semibold text-gray-600 no-underline transition-all duration-200 ease-out outline-none cursor-pointer hover:underline focus:outline-none focus:shadow-outline hover:text-gray-900`}
                >
                  First Link
                </a>

                <a
                  href="#"
                  className={cx`text-sm font-semibold text-gray-600 no-underline transition-all duration-200 ease-out outline-none cursor-pointer hover:underline focus:outline-none focus:shadow-outline hover:text-gray-900`}
                >
                  Second Link
                </a>
                <a
                  href="#"
                  className={cx`text-sm font-semibold text-gray-600 no-underline transition-all duration-200 ease-out outline-none cursor-pointer hover:underline focus:outline-none focus:shadow-outline hover:text-gray-900`}
                >
                  Third Link
                </a>
                <a
                  href="#"
                  className={cx`text-sm font-semibold text-gray-600 no-underline transition-all duration-200 ease-out outline-none cursor-pointer hover:underline focus:outline-none focus:shadow-outline hover:text-gray-900`}
                >
                  Fourth Link
                </a>
              </div>
            </div>

            <div className={cx`w-full space-y-4 md:w-1/3 xl:w-40`}>
              <div
                className={cx`text-base font-semibold text-gray-900 uppercase`}
              >
                CATEGORIES
              </div>
              <div className={cx`flex flex-col space-y-4`}>
                <a
                  to="/components"
                  className={cx`text-sm font-semibold text-gray-600 no-underline transition-all duration-200 ease-out outline-none cursor-pointer hover:underline focus:outline-none focus:shadow-outline hover:text-gray-900`}
                >
                  First Link
                </a>

                <a
                  href="#"
                  className={cx`text-sm font-semibold text-gray-600 no-underline transition-all duration-200 ease-out outline-none cursor-pointer hover:underline focus:outline-none focus:shadow-outline hover:text-gray-900`}
                >
                  Second Link
                </a>
                <a
                  href="#"
                  className={cx`text-sm font-semibold text-gray-600 no-underline transition-all duration-200 ease-out outline-none cursor-pointer hover:underline focus:outline-none focus:shadow-outline hover:text-gray-900`}
                >
                  Third Link
                </a>
                <a
                  href="#"
                  className={cx`text-sm font-semibold text-gray-600 no-underline transition-all duration-200 ease-out outline-none cursor-pointer hover:underline focus:outline-none focus:shadow-outline hover:text-gray-900`}
                >
                  Fourth Link
                </a>
              </div>
            </div>
            <div className={cx`w-full space-y-4 md:w-1/3 xl:w-40`}>
              <div
                className={cx`text-base font-semibold text-gray-900 uppercase`}
              >
                CATEGORIES
              </div>
              <div className={cx`flex flex-col space-y-4`}>
                <a
                  to="/components"
                  className={cx`text-sm font-semibold text-gray-600 no-underline transition-all duration-200 ease-out outline-none cursor-pointer hover:underline focus:outline-none focus:shadow-outline hover:text-gray-900`}
                >
                  First Link
                </a>

                <a
                  href="#"
                  className={cx`text-sm font-semibold text-gray-600 no-underline transition-all duration-200 ease-out outline-none cursor-pointer hover:underline focus:outline-none focus:shadow-outline hover:text-gray-900`}
                >
                  Second Link
                </a>
                <a
                  href="#"
                  className={cx`text-sm font-semibold text-gray-600 no-underline transition-all duration-200 ease-out outline-none cursor-pointer hover:underline focus:outline-none focus:shadow-outline hover:text-gray-900`}
                >
                  Third Link
                </a>
                <a
                  href="#"
                  className={cx`text-sm font-semibold text-gray-600 no-underline transition-all duration-200 ease-out outline-none cursor-pointer hover:underline focus:outline-none focus:shadow-outline hover:text-gray-900`}
                >
                  Fourth Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx`bg-white`}>
        <div
          className={cx`container flex flex-col justify-between px-4 py-8 mx-auto border-t border-gray-300 lg:py-10 sm:flex-row md:px-0`}
        >
          <p className={cx`text-base font-medium text-gray-600`}>
            © Copyright 2020{" "}
            <span className={cx`font-semibold text-gray-700`}>Lorem Inc</span>.
            All rights reserved.
          </p>
          <div className={cx`flex items-center mt-4 space-x-5 sm:mt-0`}>
            <a
              href="/"
              className={cx`text-gray-600 transition-colors duration-200 hover:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cx`w-5 h-5`}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />{" "}
              </svg>
            </a>
            <a
              href="/"
              className={cx`text-gray-600 transition-colors duration-200 hover:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cx`w-5 h-5`}
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a
              href="/"
              className={cx`text-gray-600 transition-colors duration-200 hover:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cx`w-5 h-5`}
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="/"
              className={cx`text-gray-600 transition-colors duration-200 hover:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cx`w-5 h-5`}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
