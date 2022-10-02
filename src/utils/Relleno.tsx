import { FC } from "react";

interface CustomSVGImageProps
{
  colorGradient1?: string;
  colorGradient2?: string;
}

const Relleno: FC<CustomSVGImageProps> = ( {
  colorGradient1 = "#D2C551",
  colorGradient2 = "#D4C24A",
} ) =>
{
  return (
    <div
      className="absolute w-10/12 h-10/12"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="120.134 175.972 33.396 30.613"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="paint0_linear"
            y1="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor={ colorGradient1 }
            />
            <stop
              offset="100%"
              stopColor={ colorGradient2 }
            />
          </linearGradient>
        </defs>
        <g>
          <path
            fill="url(#paint0_linear)"
            d="M 121.943 182.726 C 121.943 182.726 118.534 186.445 121.075 196.983 C 123.306 206.591 133.844 206.529 133.844 206.529 C 133.844 206.529 140.787 207.645 149.031 199.958 C 153.866 194.998 153.742 189.607 153.37 186.631 C 152.998 183.655 150.704 179.131 145.683 177.272 C 140.662 175.413 134.34 176.094 134.34 176.094 C 134.34 176.094 126.282 176.714 121.943 182.726 Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Relleno
