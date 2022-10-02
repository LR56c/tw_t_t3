import { FC } from "react";
import Image from "next/image";

const Complete: FC = () =>
{
  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center"
    >
      <div
        className="flex flex-col items-center justify-center basis-4/5"
      >
        <div
          className="h-48 w-48 relative"
        >
          <Image
            src="/2439182.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />

        </div>
        <h1
          className="font-bold text-xl py-2"
        >
          Congratulations!
        </h1>
        <p
          className="text-sm text-gray-400"
        >
          You just got another 10 points!
        </p>
      </div>
      <div
        className="flex flex-col basis-1/5 justify-center"
      >
        <button className="btn h-2/4 btn-sm md:btn-wide btn-warning text-white rounded-full capitalize">
          Proceed To The Next Lesson
        </button>
      </div>
    </div>
  )
}

export default Complete
