import { cx } from "candy-moon";

export default function Pricing() {
  return (
    <section className={cx`bg-white`}>
      <div className={cx`container px-5 py-16 mx-auto`}>
        <div
          className={cx`max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12`}
        >
          <div className={cx`lg:text-center`}>
            <h2
              className={cx`mt-2 text-3xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none md:mx-auto sm:text-4xl`}
            >
              Simple Pricing
            </h2>
            <p
              className={cx`mt-4 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg md:text-xl`}
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>

        <div
          className={cx`flex flex-col max-w-md space-x-0 space-y-6 lg:flex-row lg:max-w-screen-lg sm:mx-auto lg:space-y-0 lg:space-x-6`}
        >
          <div
            className={cx`flex flex-col w-full bg-white border border-gray-200 rounded-lg shadow-sm lg:w-1/2`}
          >
            <div className={cx`px-8 py-6 bg-gray-100`}>
              <h3
                className={cx`text-center text-xl font-bold tracking-wider uppercase`}
              >
                Basic <span className={cx`font-light ml-2`}>Plan</span>
              </h3>
            </div>
            <div className={cx`px-8 flex-1 flex flex-col`}>
              <div className={cx`text-center py-4`}>
                <h3 className={cx`text-3xl font-bold md:text-4xl`}>Free</h3>
              </div>
              <div
                className={cx`flex flex-col justify-between space-y-6 flex-1 pb-6`}
              >
                <div>
                  <p className={cx`mb-4 font-bold tracking-wide`}>Features</p>
                  <ul className={cx`space-y-4`}>
                    <li className={cx`flex items-center`}>
                      <div
                        className={cx`w-6 h-6 p-1 bg-green-200 rounded-full`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={cx`w-full h-full text-green-800`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className={cx`ml-3 text-lg text-gray-700`}>
                        1GB of Space
                      </span>
                    </li>
                    <li className={cx`flex items-center`}>
                      <div
                        className={cx`w-6 h-6 p-1 bg-green-200 rounded-full`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={cx`w-full h-full text-green-800`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className={cx`ml-3 text-lg text-gray-700`}>
                        Unlimited Projects
                      </span>
                    </li>
                    <li className={cx`flex items-center`}>
                      <div
                        className={cx`w-6 h-6 p-1 bg-green-200 rounded-full`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={cx`w-full h-full text-green-800`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className={cx`ml-3 text-lg text-gray-700`}>
                        Unlimited Users
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    className={cx`inline-flex items-center justify-center w-full h-12 px-6 mb-4 text-base font-medium leading-tight text-gray-200 whitespace-no-wrap align-middle transition-all duration-200 bg-gray-900 rounded-md outline-none appearance-none select-none focus:outline-none focus:shadow-outline hover:bg-gray-800 active:bg-gray-900`}
                  >
                    Get started
                  </button>
                  <p className={cx`text-sm text-gray-600`}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx`flex flex-col w-full justify-between bg-white border border-gray-200 rounded-lg shadow-sm lg:w-1/2`}
          >
            <div className={cx`px-8 py-6 bg-gray-100`}>
              <h3
                className={cx`text-center text-xl font-bold tracking-wider uppercase`}
              >
                Pro <span className={cx`font-light ml-2`}>Plan</span>
              </h3>
            </div>
            <div className={cx`px-8 flex-1 flex flex-col`}>
              <div className={cx`text-center py-4`}>
                <h3 className={cx`text-3xl font-bold md:text-4xl`}>
                  $69
                  <span className={cx`ml-1 text-xl font-normal text-gray-600`}>
                    /mo
                  </span>
                </h3>
              </div>
              <div
                className={cx`flex flex-col justify-between space-y-6 flex-1 pb-6`}
              >
                <div>
                  <p className={cx`mb-4 font-bold tracking-wide`}>
                    Additional Features
                  </p>
                  <ul className={cx`space-y-4`}>
                    <li className={cx`flex items-center`}>
                      <div
                        className={cx`w-6 h-6 p-1 bg-green-200 rounded-full`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={cx`w-full h-full text-green-800`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className={cx`ml-3 text-lg text-gray-700`}>
                        1GB of Space
                      </span>
                    </li>
                    <li className={cx`flex items-center`}>
                      <div
                        className={cx`w-6 h-6 p-1 bg-green-200 rounded-full`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={cx`w-full h-full text-green-800`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className={cx`ml-3 text-lg text-gray-700`}>
                        Unlimited Projects
                      </span>
                    </li>
                    <li className={cx`flex items-center`}>
                      <div
                        className={cx`w-6 h-6 p-1 bg-green-200 rounded-full`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={cx`w-full h-full text-green-800`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className={cx`ml-3 text-lg text-gray-700`}>
                        Unlimited Users
                      </span>
                    </li>
                    <li className={cx`flex items-center`}>
                      <div
                        className={cx`w-6 h-6 p-1 bg-green-200 rounded-full`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={cx`w-full h-full text-green-800`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className={cx`ml-3 text-lg text-gray-700`}>
                        Really Cool Features
                      </span>
                    </li>
                    <li className={cx`flex items-center`}>
                      <div
                        className={cx`w-6 h-6 p-1 bg-green-200 rounded-full`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={cx`w-full h-full text-green-800`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className={cx`ml-3 text-lg text-gray-700`}>
                        Another Cool Feature
                      </span>
                    </li>
                    <li className={cx`flex items-center`}>
                      <div
                        className={cx`w-6 h-6 p-1 bg-green-200 rounded-full`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={cx`w-full h-full text-green-800`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className={cx`ml-3 text-lg text-gray-700`}>
                        And One More
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    className={cx`inline-flex items-center justify-center w-full h-12 px-6 mb-4 text-base font-medium leading-tight text-white whitespace-no-wrap align-middle transition-all duration-200 bg-blue-500 rounded-md outline-none appearance-none select-none focus:outline-none focus:shadow-outline hover:bg-blue-600 active:bg-blue-700`}
                  >
                    Get started
                  </button>
                  <p className={cx`text-sm text-gray-600`}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
