import { FC } from "react";
import { CustomSVGImage } from "./CustomSVGImage";

interface ProfileInfoProps
{
  image: string;
  name: string;
}

export const ProfileInfo: FC<ProfileInfoProps> = ( {
  name = "Jones",
  image = "/diego-perfil.png"
} ) =>
{
  return (
    <div
      className="my-5 flex flex-col items-center justify-center"
    >
      <CustomSVGImage
        className="h-32 w-32"
        backgroundActive
        borderActive
        image={ image }
      />
      <p
        className="text-lg text-white font-bold"
      >
        { name }
      </p>
      <p
        className="text-sm text-gray-400"
      >
        Level 10
      </p>
    </div>
  )
}
