import { FC } from "react";
import { CustomSVGImage } from "./CustomSVGImage";

export interface LessonInfoProps
{
  Element: JSX.Element;
  title: string;
  description: string;
  minutes: number;
  percentage: number;
  clickAction: () => void;
}

export const LessonInfo: FC<LessonInfoProps> = ( {
  Element,
  description = "Terror potuss, tanquam secundus torquis.Nocere aegre.",
  minutes = 34,
  percentage = 20,
  title = "Introduction",
  clickAction
} ) =>
{
  return (
    <div
      onClick={ clickAction }
      className="cursor-pointer h-32 bg-white rounded-3xl mx-4 relative overflow-hidden grid grid-cols-9 grid-rows-3 relative"
    >
      <div
        className="px-2 w-16 h-16 col-span-2 row-span-2 relative self-center place-self-center"
      >
        <CustomSVGImage
          backgroundActive
          borderActive={ false }
          className="h-full w-full object-contain"
          image=""
        />
        <div
          className="absolute text-white fill-current top-2/4 right-2/4 translate-x-2/4 -translate-y-2/4"
        >
          { Element }
        </div>
      </div>
      <div
        className="col-span-6 row-span-2 pt-3"
      >
        <p
          className="text-[#1B2A48]"
        >
          { title }
        </p>
        <p
          className="text-xs text-gray-400 py-2"
        >
          { description }
        </p>
      </div>
      <p
        className="text-xs text-gray-400 col-span-2 row-span-1 col-start-1 self-center place-self-center"
      >
        { minutes } min
      </p>
      <progress
        className="progress w-56 w-11/12 h-3 progress-warning col-span-6 row-span-1 self-center place-self-start"
        value={ percentage }
        max="100"
      />
      <p
        className="text-xs text-gray-400 col-span-1 row-span-1 self-center place-self-center pr-2"
      >
        { percentage }%
      </p>
    </div>
  )
}
