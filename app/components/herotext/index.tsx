import React from "react";

type Props = {};

const HeroText = (props: Props) => {
  return (
    <div className="relative grid h-[80vh] w-screen grid-rows-[100px,1fr]">
      {/* <Image
    src="/background.jpg"
    alt="background"
    fill
    objectFit="cover"
    objectPosition="center"
  /> */}
      <div className="row-start-2 mx-auto grid w-full max-w-6xl items-center px-3 md:grid-cols-[0.8fr,1fr]">
        <div className="mx-auto flex flex-col gap-5">
          <p className="text-3xl">We are</p>
          <p className="text-4xl font-semibold">Global Tools Corporation</p>
          <p className="w-3/4 text-xl opacity-75 md:w-full">
            We Empower Local Industries with Precision Tools from Leading
            Manufacturers
          </p>
          <button className="max-w-[240px] rounded-lg bg-orange-400 py-2 hover:bg-orange-600">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
