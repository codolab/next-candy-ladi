
import Image from "next/image";
import { cx } from "candy-moon";

export default function Hero() {
  return (
    <section className={cx`bg-white`}>
      <div
        className={cx`container flex flex-col items-center px-4 pt-24 mx-auto`}
      >
        <div className={cx`flex flex-col items-center md:px-8`}>
          <div
            className={cx`max-w-xl mb-10 sm:text-center md:mx-auto lg:max-w-4xl`}
          >
            <h2
              className={cx`text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:mx-auto lg:text-6xl`}
            >
              The quick, brown fox jumps over{" "}
              <span
                className={cx`bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500`}
              >
                a lazy dog
              </span>
            </h2>
            <p
              className={cx`px-0 mt-4 text-base text-gray-600 sm:mt-6 sm:text-lg md:text-xl lg:px-24`}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div
            className={cx`flex flex-col items-center justify-center w-full mb-4 space-x-0 space-y-4 md:flex-row md:space-y-0 md:space-x-4`}
          >
            <button
              className={cx`inline-flex items-center justify-center h-12 px-6 text-base font-medium leading-tight whitespace-no-wrap align-middle transition-all duration-200 bg-gray-900 text-gray-200 rounded-md outline-none appearance-none select-none cursor-pointer hover:bg-gray-800 focus:outline-none focus:shadow-outline`}
            >
              <span>Learn more</span>
              <svg
                className={cx`w-4 h-4 flex-shrink-0 ml-2 -mr-1`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
            </button>
            <button
              className={cx`inline-flex items-center justify-center h-12 px-6 text-base font-medium leading-tight whitespace-no-wrap align-middle transition-all duration-200 bg-blue-500 text-white rounded-md outline-none appearance-none select-none cursor-pointer hover:bg-blue-600 focus:outline-none focus:shadow-outline`}
            >
              <span>Get Started</span>
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
            </button>
          </div>

          <div className={cx`text-xs text-gray-500 sm:text-sm mb-10`}>
            Not ready yet?
            <a
              className={cx`transition-all duration-200 ease-out cursor-pointer no-underline outline-none focus:outline-none focus:shadow-outline font-semibold text-gray-600 hover:text-gray-700 ml-1`}
              href="#"
            >
              Book a Demo
            </a>
          </div>
        </div>

        <div
          className={cx`w-full max-w-screen-xl mx-auto rounded shadow-2xl md:w-100% md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl`}
        >
          <div className={cx`flex flex-col w-full h-full`}>
            <div
              className={cx`bg-white border border-b-0 border-gray-300 border-solid rounded-tl-md rounded-tr-md`}
            >
              <div
                className={cx`relative flex items-center justify-between w-full h-10 pt-0`}
              >
                <div className={cx`flex flex-wrap`}>
                  <div className={cx`px-3`}>
                    <div className={cx`flex flex-row space-x-2`}>
                      <div
                        className={cx`inline-flex items-center justify-center w-3 h-3 bg-gray-500 rounded-full group`}
                      />
                      <div
                        className={cx`inline-flex items-center justify-center w-3 h-3 bg-gray-500 rounded-full group`}
                      />
                      <div
                        className={cx`inline-flex items-center justify-center w-3 h-3 bg-gray-500 rounded-full group`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={cx`flex-1 w-full h-full`}>
              <Image
                alt="Forest"
                src="/candy.jpeg"
                layout="responsive"
                className={cx`object-cover object-center w-full h-full`}
                width={1200}
                height={510}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}