import { FC } from "react";
import { ImageInfo, ImageInfoProps } from "./ImageInfo";

interface ClassmatesProps
{
  classmates: ImageInfoProps[];
}

export const Classmates: FC<ClassmatesProps> = ( { classmates } ) =>
{
  return (
    <div
      className="flex flex-col items-center justify-center m-4"
    >
      <p
        className="text-lg font-bold my-2"
      >
        Classmates
      </p>
      <p
        className="text-sm text-gray-400"
      >
        All interested in the same field!
      </p>
      <p
        className="text-sm text-gray-400"
      >
        Go on, get social!
      </p>
      <div
        className="my-2 h-20 w-full bg-white rounded-3xl flex flex-row items-center justify-center"
      >
        { classmates.slice( 0, 5 - 1 )
                    .map( ( { image, name } ) => (
                      <ImageInfo
                        key={ name }
                        image={ image }
                        name={ name }
                      />
                    ) ) }
        <button className="btn btn-xs btn-warning text-white rounded-full basis-1/4 normal-case mr-4">
          View all
        </button>
      </div>
    </div>
  )
}
