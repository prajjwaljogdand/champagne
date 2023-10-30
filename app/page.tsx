import Image from "next/image";
import Loader from "./components/loader";

export default function Home() {
  return (
    <div
      className="
    flex 
    min-h-screen
    flex-col 
    justify-center
    px-6
    py-6 
    sm:px-6 
    lg:px-0
    lg:py-0
    sm:py-6
    bg-black
  "
    >
      <Loader />
    </div>
  );
}
