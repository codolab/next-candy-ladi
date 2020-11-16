import { configure } from "candy-moon";
import "candy-moon/dist/reset.min.css";

import colors from "../components/colors";

configure({
  theme: {
    colors
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
