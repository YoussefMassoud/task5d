"use client";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";

export default function Hero() {
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col py-28 items-start px-40">
        <div className="text-7xl font-medium">
          Hi, I am <br />
          Hassan 🎨
        </div>
        <div className="text-sm font-medium mt-4">
          I am a UI/UX Designer, I like to make interfaces simple
          <br />
          and aesthetically pleasing for users; The idea is not to <br />
          create an interface for creating it, it is that users <br />
          prefer you because your product is easy to use.
          <br />
        </div>
        <div className="py-4">
          <button
            style={{
              background: "linear-gradient(to right, #B224EF 0%, #7579FF 100%)",
            }}
            className="py-2 rounded-xl px-8 flex items-center justify-center text-white"
          >
            Contact Me
            <IoIosArrowDropright className="ml-2" />
          </button>
        </div>
      </div>

      <div className="flex justify-end px-28">
        <Image src="/heronextimages.png" alt="hero" width={800} height={800} />
      </div>
    </div>
  );
}
