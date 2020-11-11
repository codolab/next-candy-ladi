import Head from "next/head";
import { cx } from "candy-moon";

export default function Home() {
  return (
    <div
      className={cx`w-screen h-screen flex items-center justify-center bg-pink-200 text-pink-800`}
    >
      Hello
    </div>
  );
}
