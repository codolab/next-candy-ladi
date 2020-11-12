import { cx } from "candy-moon";

export default function Testimonials() {
  return (
    <section className={cx`bg-gray-900`}>
      <div className={cx`container px-5 py-24 mx-auto`}>
        <div className={cx`w-full mx-auto text-center`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            fill="currentColor"
            className={cx`inline-block w-8 h-8 text-gray-400`}
          >
            <g>
              <g>
                <path
                  d="M228,119c5.523,0,10-4.478,10-10V77c0-27.57-22.43-50-50-50H50C22.43,27,0,49.43,0,77v119.988c0,27.57,22.43,50,50,50
			h64.692c-2.276,74.706-30.621,113.542-86.459,118.622c-5.151,0.469-9.094,4.787-9.094,9.959V475c0,2.75,1.132,5.378,3.13,7.267
			c1.862,1.759,4.321,2.733,6.869,2.733c0.187,0,0.375-0.005,0.562-0.016c68.908-3.876,121.511-27.591,156.349-70.487
			C220.521,372.051,238,310.029,238,230.152v-35.819c0-5.522-4.477-10-10-10s-10,4.478-10,10v35.819
			c0,146.644-58.535,223.331-178.86,234.097v-79.836c30.411-4.73,53.934-18.886,70.007-42.161
			c17.049-24.691,25.694-60.106,25.694-105.264c0-5.522-4.477-10-10-10H50c-16.542,0-30-13.458-30-30V77c0-16.542,13.458-30,30-30
			h138c16.542,0,30,13.458,30,30v32C218,114.522,222.477,119,228,119z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M462,27H324c-27.57,0-50,22.43-50,50v119.988c0,27.57,22.43,50,50,50h64.692c-2.276,74.706-30.621,113.542-86.459,118.622
			c-5.15,0.469-9.094,4.787-9.094,9.959V475c0,2.75,1.132,5.378,3.13,7.267c1.862,1.76,4.321,2.733,6.869,2.733
			c0.187,0,0.375-0.005,0.562-0.016c68.908-3.876,121.511-27.591,156.349-70.487C494.521,372.052,512,310.029,512,230.152V77
			C512,49.43,489.57,27,462,27z M492,230.152c0,146.644-58.535,223.331-178.861,234.097v-79.836
			c30.412-4.73,53.935-18.886,70.007-42.161c17.049-24.69,25.694-60.105,25.694-105.264c0-5.522-4.477-10-10-10H324
			c-16.542,0-30-13.458-30-30V77c0-16.542,13.458-30,30-30h120v74.034c0,5.522,4.477,10,10,10s10-4.478,10-10v-73.96
			c15.612,1.034,28,14.057,28,29.926V230.152z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M454,145.751c-5.523,0-10,4.527-10,10.049c0,5.522,4.477,10,10,10c5.522,0,10-4.478,10-10v-0.099
			C464,150.179,459.523,145.751,454,145.751z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M228,141.666c-5.523,0-10,4.478-10,10v0.209c0,5.522,4.477,10,10,10s10-4.478,10-10v-0.209
			C238,146.144,233.523,141.666,228,141.666z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <p className={cx`my-8 text-xl text-white leading-tall md:text-3xl`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl
            nunc mi ipsum faucibus vitae.{" "}
            <span
              className={cx`bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500`}
            >
              Lacus laoreet non curabitur
            </span>{" "}
            gravida arcu ac tortor. Laoreet sit amet cursus sit amet dictum. Congue
            quisque egestas diam in arcu. Ullamcorper sit amet risus nullam eget
            felis eget. Eget gravida cum sociis natoque penatibus et magnis dis
            parturient. Turpis cursus in hac habitasse
          </p>

          <img
            alt="Avatar"
            src="/avatar.jpeg"
            className={cx`object-cover object-top w-32 h-32 max-w-full mx-auto rounded-full shadow-lg`}
          />
          <h5
            className={cx`mt-6 text-base font-semibold text-white sm:text-lg md:text-xl`}
          >
            Ryan Tompson
          </h5>
          <p className={cx`mt-1 mb-3 text-base font-medium text-gray-500`}>
            Web Developer
          </p>
        </div>
      </div>
    </section>
  );
}