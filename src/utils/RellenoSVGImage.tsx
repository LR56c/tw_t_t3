import { FC } from "react";

interface RellenoImageProps
{
  image: string;
}

const RellenoSVGImage: FC<RellenoImageProps> = ( {
  image,
} ) =>
{
  return (
    <div
      className="absolute w-10/12 h-10/12"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        viewBox="120.134 175.972 33.396 30.613"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="img1"
            width="100%"
            height="100%"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              href={ image }
              width="100%"
              height="100%"
            />
          </pattern>
          <clipPath
            id="clip0"
          >
            <path
              d="M 121.943 182.726 C 121.943 182.726 118.534 186.445 121.075 196.983 C 123.306 206.591 133.844 206.529 133.844 206.529 C 133.844 206.529 140.787 207.645 149.031 199.958 C 153.866 194.998 153.742 189.607 153.37 186.631 C 152.998 183.655 150.704 179.131 145.683 177.272 C 140.662 175.413 134.34 176.094 134.34 176.094 C 134.34 176.094 126.282 176.714 121.943 182.726 Z"
            />
          </clipPath>
        </defs>
        <g
          clipPath="url(#clip0)"
        >
          <path
            fill="url(#img1)"
            d="M 121.943 182.726 C 121.943 182.726 118.534 186.445 121.075 196.983 C 123.306 206.591 133.844 206.529 133.844 206.529 C 133.844 206.529 140.787 207.645 149.031 199.958 C 153.866 194.998 153.742 189.607 153.37 186.631 C 152.998 183.655 150.704 179.131 145.683 177.272 C 140.662 175.413 134.34 176.094 134.34 176.094 C 134.34 176.094 126.282 176.714 121.943 182.726 Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default RellenoSVGImage
