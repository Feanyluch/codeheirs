import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto py-20 h-[200vh]">
        <h1 className="text-3xl font-bold">
          Welcome to My Theme Switcher Loremkd;alkWelcome to My Theme Switcher
          Loremkd;alkWelcome to My Theme Switcher Loremkd;alkWelcome to My Theme
          Switcher Loremkd;alkWelcome to My Theme Switcher Loremkd;alkWelcome to
          My Theme Switcher Loremkd;alkWelcome to My Theme Switcher
          Loremkd;alkWelcome to My Theme Switcher Loremkd;alkWelcome to My Theme
          Switcher Loremkd;alkWelcome to My Theme Switcher Loremkd;alkWelcome to
          My Theme Switcher Loremkd;alkWelcome to My Theme Switcher
          Loremkd;alkWelcome to My Theme Switcher Loremkd;alkWelcome to My Theme
          Switcher Loremkd;alkWelcome to My Theme Switcher Loremkd;alk
        </h1>
        <p className="mt-4">Your content goes here.</p>
      </div>
    </div>
  );
}

export default Home;
