import { FC } from "react";
import { DefaultRawDatum, PieCustomLayer, ResponsivePie } from "@nivo/pie";

const CenteredMetric : PieCustomLayer<DefaultRawDatum> = ({ centerX, centerY }) => {
  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      className="text-[#1A2A47] fill-current"
      dominantBaseline="central"
      style={{
        fontSize: '36px',
        // fontWeight: 600,
      }}
    >
      85
    </text>
  )
}

const data = [
  {
    "id"   : "htmlcss",
    "label": "HTML/CSS",
    "value": 100,
    "color": "hsl(43,85%,52%)"
  },
  {
    "id"   : "graphic_design",
    "label": "Graphic Design",
    "value": 50,
    "color": "hsl(219,46%,19%)"
  },
  {
    "id"   : "ux",
    "label": "UX",
    "value": 50,
    "color": "hsl(0,0%,93%)"
  }
];

const ChartPoint: FC = () => {
  return (
    <div
      className="mx-4 my-2 p-3 h-56 rounded-3xl bg-white flex flex-col items-center"
    >
      <p
        className="font-bold"
      >
        Your points
      </p>
      <p
        className="text-sm text-gray-400"
      >
        +20 since last week
      </p>
      <ResponsivePie
        data={ data }
        colors={{ datum: 'data.color' }}
        margin={ { top: 15, right: 80, bottom: 55, left: 80 } }
        layers={['arcLinkLabels', 'arcs', 'arcLabels', 'legends', CenteredMetric]}
        innerRadius={ 0.8 }
        startAngle={-230}
        padAngle={ 0.7 }
        cornerRadius={ 3 }
        enableArcLabels={ false }
        enableArcLinkLabels={ false }
        isInteractive={ false }
        legends={ [
          {
            anchor       : 'bottom',
            direction    : 'row',
            justify      : false,
            // translateX   : 35,
            translateY   : 56,
            itemsSpacing : 0,
            itemWidth    : 100,
            itemHeight   : 40,
            itemTextColor: '#999',
            itemDirection: 'top-to-bottom',
            symbolSize   : 15,
            symbolShape  : 'circle',
          },
        ] }
      />
    </div>
  )
}

export default ChartPoint
