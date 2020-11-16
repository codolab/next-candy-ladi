/** @jsxImportSource candy-moon */
import Image from "next/image";

export default function Hero() {
  return (
    <section cls="bg-white">
      <div cls="container mx-auto flex flex-col items-center px-5 pt-16 pb-8 md:pt-24 md:pb-16">
        <div cls="flex flex-col items-center md:px-8">
          <div cls="max-w-xl mb-10 sm:text-center md:mx-auto lg:max-w-4xl">
            <h2 cls="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:mx-auto lg:text-6xl">
              The quick, brown fox jumps over{" "}
              <span cls="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                a lazy dog
              </span>
            </h2>
            <p cls="px-0 mt-4 text-base text-gray-600 sm:mt-6 sm:text-lg md:text-xl lg:px-24">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div cls="flex items-center justify-center w-full mb-4 flex-row space-y-0 space-x-4">
            <button cls="inline-flex items-center justify-center h-12 px-6 text-base font-medium leading-tight whitespace-no-wrap align-middle transition-all duration-200 bg-gray-900 text-gray-200 rounded-md outline-none appearance-none select-none cursor-pointer hover:bg-gray-800 focus:outline-none focus:shadow-outline">
              <span>Get a Demo</span>
              <svg
                cls="w-4 h-4 flex-shrink-0 ml-2 -mr-1"
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
            <button cls="inline-flex items-center justify-center h-12 px-6 text-base font-medium leading-tight whitespace-no-wrap align-middle transition-all duration-200 bg-blue-500 text-white rounded-md outline-none appearance-none select-none cursor-pointer hover:bg-blue-600 focus:outline-none focus:shadow-outline">
              <span>Go Dashboard</span>
              <svg
                cls="w-4 h-4 flex-shrink-0 ml-2 -mr-1"
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

          <div cls="text-xs text-gray-500 sm:text-sm mb-10">
            Not ready yet?
            <a
              cls="transition-all duration-200 ease-out cursor-pointer no-underline outline-none focus:outline-none focus:shadow-outline font-semibold text-gray-600 hover:text-gray-700 ml-1"
              href="#"
            >
              Book a Demo
            </a>
          </div>
        </div>

        <div cls="w-full max-w-screen-xl mx-auto rounded shadow-lg md:w-100% md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div cls="flex flex-col w-full h-full">
            <div cls="bg-white border border-b-0 border-gray-300 border-solid rounded-tl-md rounded-tr-md">
              <div cls="relative flex items-center justify-between w-full h-10 pt-0">
                <div cls="flex flex-wrap">
                  <div cls="px-3">
                    <div cls="flex flex-row space-x-2">
                      <div cls="inline-flex items-center justify-center w-3 h-3 bg-gray-500 rounded-full group" />
                      <div cls="inline-flex items-center justify-center w-3 h-3 bg-gray-500 rounded-full group" />
                      <div cls="inline-flex items-center justify-center w-3 h-3 bg-gray-500 rounded-full group" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div cls="flex-1 w-full h-full">
              <Image
                alt="Forest"
                src="/hero-background.jpg"
                layout="responsive"
                cls="object-cover object-center w-full h-full"
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
