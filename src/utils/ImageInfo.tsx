import { FC } from "react";
import { CustomSVGImage } from "./CustomSVGImage";

export interface ImageInfoProps
{
  image: string;
  name: string;
}

export const ImageInfo: FC<ImageInfoProps> = ( {
  name = "John",
  image = "/diego-perfil.png"
} ) =>
{
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <CustomSVGImage
        backgroundActive
        borderActive={ false }
        className="h-10 w-10"
        image={ image }
      />
      <p
        className="text-sm"
      >
        { name }
      </p>
    </div>
  )
}
