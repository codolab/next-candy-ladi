import { cx } from "candy-moon";

export default function Header() {
  return (
    <nav className={cx`flex flex-wrap items-center px-2 py-3 bg-white`}>
      <div
        className={cx`container relative flex flex-wrap items-start justify-between px-4 mx-auto lg:items-center`}
      >
        <div
          className={cx`flex flex-col justify-between space-y-2 lg:flex-row lg:space-x-0`}
        >
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className={cx`inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-gray-900 uppercase whitespace-no-wrap`}
          >
            company
          </a>

          <div
            className={cx`relative flex items-center transform -translate-x-1/2 lg:absolute left-1/2`}
          >
            <ul
              className={cx`flex flex-col space-y-2 list-none lg:flex-row lg:space-y-0 lg:space-x-8`}
            >
              <li>
                <a
                  href="/"
                  aria-label="Home"
                  title="Home"
                  className={cx`text-gray-600 hover:text-gray-700`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Features"
                  title="Features"
                  className={cx`text-gray-600 hover:text-gray-700`}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Pricing"
                  title="Pricing"
                  className={cx`text-gray-600 hover:text-gray-700`}
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={cx`flex items-center space-x-4`}>
          <a
            href="#"
            className={cx`inline-flex items-center justify-center h-10 px-6 text-base font-medium leading-tight whitespace-no-wrap align-middle transition-all duration-200 bg-white text-gray-600 rounded-md outline-none appearance-none select-none cursor-pointer hover:text-gray-700`}
          >
            <span>Sign up</span>
          </a>
          <a
            href="#"
            className={cx`inline-flex items-center justify-center h-10 px-6 text-base font-medium leading-tight whitespace-no-wrap align-middle transition-all duration-200 bg-gray-900 text-gray-200 rounded-md outline-none appearance-none select-none cursor-pointer hover:bg-gray-800`}
          >
            <span>Sign in</span>
            <svg
              className={cx`w-4 h-4 flex-shrink-0 ml-2 -mr-1`}
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}