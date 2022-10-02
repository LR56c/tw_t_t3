import Relleno from "./Relleno";
import RellenoSVGImage from "./RellenoSVGImage";
import Border from "./Border";
import { FC } from "react";

interface CustomSVGProps
{
  backgroundActive: boolean;
  borderActive: boolean;
  className: string;
  image: string;
}

export const CustomSVGImage: FC<CustomSVGProps> = ( {
  backgroundActive = true,
  borderActive = true,
  className,
  image
} ) =>
{
  return (
    <div
      className={ `relative flex flex-row items-center justify-center ${ className
      ?? '' }` }
    >
      { backgroundActive && <Relleno/> }
      { image.length > 0 && <RellenoSVGImage
        image={ image }
      /> }
      { borderActive && <Border fill="#D2C551"/> }
    </div>
  )
}
