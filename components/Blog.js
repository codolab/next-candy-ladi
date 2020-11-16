/** @jsxImportSource candy-moon */
import Image from "next/image";
import { useTheme } from "./ThemeContext";

export default function Feature() {
  const { color } = useTheme();

  return (
    <section cls="bg-gray-100">
      <div cls="flex flex-col container px-5 py-16 md:py-24 mx-auto">
        <div cls="max-w-2xl mb-8 md:mx-auto sm:text-center lg:max-w-3xl md:mb-10">
          <div cls="lg:text-center">
            <span
              cls={`inline-flex items-center justify-center w-auto h-8 px-4 mb-2 text-sm font-medium tracking-wide text-${color}-800 uppercase bg-${color}-200 rounded-full outline-none`}
            >
              Watch and Learn
            </span>
            <h3 cls="mt-2 text-3xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none md:mx-auto sm:text-4xl">
              Our featured blogs
            </h3>
          </div>
        </div>

        <div cls="flex flex-wrap">
          <div cls="px-0 py-4 md:w-1/3 md:px-4 md:py-4">
            <div cls="flex flex-col h-full border-0 overflow-hidden">
              <div cls="block">
                <a cls="mb-6 block bg-transparent outline-none shadow-none">
                  <div
                    cls="relative overflow-hidden h-0 rounded-sm"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <Image
                      alt="Blog"
                      src="/blog.jpg"
                      cls="absolute inset-0 object-cover h-full w-full align-middle"
                      layout="responsive"
                      width={800}
                      height={600}
                    />
                  </div>
                </a>
                <div cls="mb-3">
                  <div cls="flex flex-wrap list-none font-medium text-sm ">
                    <div cls="min-h-6 min-w-6 text-sm bg-blue-200 text-blue-800 inline-flex items-center max-h-full px-3 mr-2 rounded-full">
                      <span cls="leading-tight">Product</span>
                    </div>
                  </div>
                </div>
                <h3 cls="mb-3 text-xl text-gray-900 font-semibold leading-7">
                  The quick brown fox jumped over the lazy dog.
                </h3>
              </div>
              <p cls="text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div cls="flex mt-4 items-center space-x-4">
                <Image
                  alt=""
                  src="/avatar.jpg"
                  cls="rounded-full object-cover object-top"
                  layout="fixed"
                  width={48}
                  height={48}
                />
                <div cls="font-normal">
                  <a
                    cls="inline-flex items-center transition-all duration-200 ease-out cursor-pointer no-underline hover:underline outline-none focus:outline-none focus:shadow-outline font-semibold text-gray-700 hover:text-gray-800"
                    href="#"
                  >
                    Anastasia Dan
                  </a>
                  <span cls="text-gray-600 mx-2">-</span>
                  <span cls="text-gray-500">Jan 17, 2020</span>
                </div>
              </div>
            </div>
          </div>

          <div cls="px-0 py-4 md:w-1/3 md:px-4 md:py-4">
            <div cls="flex flex-col h-full border-0 overflow-hidden">
              <div cls="block">
                <a cls="mb-6 block bg-transparent outline-none shadow-none">
                  <div
                    cls="relative overflow-hidden h-0 rounded-sm"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <Image
                      alt="Blog 2"
                      src="/blog-2.jpeg"
                      cls="absolute inset-0 object-cover h-full w-full align-middle"
                      layout="responsive"
                      width={800}
                      height={600}
                    />
                  </div>
                </a>
                <div cls="mb-3">
                  <div cls="flex flex-wrap list-none font-medium text-sm ">
                    <div cls="min-h-6 min-w-6 text-sm bg-red-200 text-red-800 inline-flex items-center max-h-full px-3 mr-2 rounded-full">
                      <span cls="leading-tight">Product</span>
                    </div>
                  </div>
                </div>
                <h3 cls="mb-3 text-xl text-gray-900 font-semibold leading-7">
                  The quick brown fox jumped over the lazy dog.
                </h3>
              </div>
              <p cls="text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div cls="flex mt-4 items-center space-x-4">
                <Image
                  alt=""
                  src="/avatar.jpg"
                  cls="rounded-full object-cover object-top"
                  layout="fixed"
                  width={48}
                  height={48}
                />
                <div cls="font-normal">
                  <a
                    cls="inline-flex items-center transition-all duration-200 ease-out cursor-pointer no-underline hover:underline outline-none focus:outline-none focus:shadow-outline font-semibold text-gray-700 hover:text-gray-800"
                    href="#"
                  >
                    Anastasia Dan
                  </a>
                  <span cls="text-gray-600 mx-2">-</span>
                  <span cls="text-gray-500">Jan 17, 2020</span>
                </div>
              </div>
            </div>
          </div>

          <div cls="px-0 py-4 md:w-1/3 md:px-4 md:py-4">
            <div cls="flex flex-col h-full border-0 overflow-hidden">
              <div cls="block">
                <a cls="mb-6 block bg-transparent outline-none shadow-none">
                  <div
                    cls="relative overflow-hidden h-0 rounded-sm"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <Image
                      alt="Blog 3"
                      src="/blog-3.jpeg"
                      cls="absolute inset-0 object-cover h-full w-full align-middle"
                      layout="responsive"
                      width={800}
                      height={600}
                    />
                  </div>
                </a>
                <div cls="mb-3">
                  <div cls="flex flex-wrap list-none font-medium text-sm ">
                    <div cls="min-h-6 min-w-6 text-sm bg-red-200 text-red-800 inline-flex items-center max-h-full px-3 mr-2 rounded-full">
                      <span cls="leading-tight">Product</span>
                    </div>
                    <div cls="min-h-6 min-w-6 text-sm bg-purple-200 text-purple-800 inline-flex items-center max-h-full px-3 mr-2 rounded-full">
                      <span cls="leading-tight">Engineer</span>
                    </div>
                  </div>
                </div>
                <h3 cls="mb-3 text-xl text-gray-900 font-semibold leading-7">
                  The quick brown fox jumped over the lazy dog.
                </h3>
              </div>
              <p cls="text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div cls="flex mt-4 items-center space-x-4">
                <Image
                  alt=""
                  src="/avatar.jpg"
                  cls="rounded-full object-cover object-top"
                  layout="fixed"
                  width={48}
                  height={48}
                />
                <div cls="font-normal">
                  <a
                    cls="inline-flex items-center transition-all duration-200 ease-out cursor-pointer no-underline hover:underline outline-none focus:outline-none focus:shadow-outline font-semibold text-gray-700 hover:text-gray-800"
                    href="#"
                  >
                    Anastasia Dan
                  </a>
                  <span cls="text-gray-600 mx-2">-</span>
                  <span cls="text-gray-500">Jan 17, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
