import { FC } from "react";
import Image from "next/image";

interface CourseInfoProps
{
  image: string;
  title: string;
  description: string;
}


export const CourseInfo: FC<CourseInfoProps> = ( {
  title = "Graphic Design For the Web",
  description = "3h 30min in total",
  image = "/foto-de-perfil.jpg"
} ) =>
{
  return (
    <div
      className="relative m-4 h-32 bg-white rounded-3xl overflow-hidden"
    >
      <div
        className="w-full h-full flex flex-row items-center justify-center relative"
      >
        <div
          className="flex flex-col justify-start basis-1/2"
        >
          <div
            className="font-bold py-0.5 px-4"
          >
            { title }
          </div>
          <div
            className="text-xs font-bold text-gray-300 place-self-start py-0.5 px-4"
          >
            { description }
          </div>
        </div>
        <div
          className="h-full w-full basis-1/2 relative"
        >
          <Image
            alt={ title }
            src={ image }
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}
