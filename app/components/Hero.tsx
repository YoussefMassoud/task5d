"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col py-28 items-start px-40">
        <div className="text-7xl font-medium">
          Hi, I am <br /> 
          Hassan 🎨
        </div>
        <div className="text-sm font-medium mt-4">
          I am a UI/UX Designer, I like to make interfaces simple<br />
          and aesthetically pleasing for users; The idea is not to <br />
          create an interface for creating it, it is that users <br />
          prefer you because your product is easy to use.<br />
        </div>
        <button className="bg-[#7579FF] py-2 rounded-xl px-6">
              Contact Me
            </button>
      </div>
      
      <div className="flex justify-end px-28">
        <Image src="/heronextimages.png" alt="hero" width={800} height={800} />
      </div>
    </div>
  );
}
