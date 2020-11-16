/** @jsxImportSource candy-moon */
import Image from "next/image";
import { getGradientByColor, useTheme } from "./ThemeContext";

export default function CTA() {
  const { color } = useTheme();
  const gradient = getGradientByColor(color);
  return (
    <section cls="bg-white px-5 py-8 md:py-16">
      <div cls={`relative flex flex-col items-center w-full max-w-screen-xl px-4 py-8 mx-auto text-center rounded-lg shadow-2xl lg:text-left lg:block bg-gradient-to-br from-${gradient.to}-600 to-${gradient.from}-400 sm:px-6 md:pb-0 md:pt-12 lg:px-12 lg:py-12`}>
        <h2 cls="my-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:my-0 xl:text-4xl sm:leading-tight">
          Infastructure that is{" "}
          <span cls={`block text-${color}-200 xl:inline`}>out of this world</span>
        </h2>
        <p cls={`mt-1 mb-10 text-sm font-medium text-${color}-200 uppercase xl:text-base xl:tracking-wider lg:mb-0`}>
          Pushing the envelope for being awesome!
        </p>
        <div cls="flex mb-8 lg:mt-6 lg:mb-0">
          <div cls="inline-flex">
            <a
              href="#"
              cls={`inline-flex items-center justify-center px-5 py-3 text-base font-medium text-${color}-700 transition duration-150 ease-in-out bg-${color}-100 border border-transparent rounded-md hover:text-${color}-600 hover:bg-${color}-50 focus:outline-none focus:shadow-outline focus:border-${color}-300`}
            >
              Sign Up Today
            </a>
          </div>
        </div>
        <div cls="bottom-0 right-0 mb-0 mr-3 lg:absolute lg:-mb-12">
          <Image
            src="/cta.png"
            layout="fixed"
            cls="max-w-xs mb-4 opacity-100 md:max-w-2xl lg:max-w-lg xl:mb-0 xl:max-w-md"
            width={450}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}
