import { FC } from "react";
import { CNav } from "../utils/CNav";
import { CustomSVGImage } from "../utils";
import { SearchBar } from "../utils/SearchBar";
import { CourseInfo } from "../utils/CourseInfo";
import { LessonInfo, LessonInfoProps } from "../utils/LessonInfo";
import { BsPlayCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";

interface LessonData
{
  Element: JSX.Element;
  title: string;
  description: string;
  minutes: number;
  percentage: number;
}

// TODO: ver otra alternativa a la de usar el componente de react-icons
export const lessons: LessonData[] = [
  {
    title      : "Introduction",
    description: "Get familiar with the subjerct adn see the lessons overview",
    minutes    : 34,
    percentage : 50,
    Element    : <BsPlayCircle/>
  },
  {
    title      : "Basic Terms",
    description: "Get familiar with basic terminology used in graphic design industry",
    minutes    : 25,
    percentage : 20,
    Element    : <GiHamburgerMenu/>
  },
  {
    title      : "Layout And Composition",
    description: "First attempts to understading the foundations of graphic design",
    minutes    : 50,
    percentage : 10,
    Element    : <BsPlayCircle/>
  },
  {
    title      : "Typography",
    description: "Learn how to use typography to create a better design",
    minutes    : 40,
    percentage : 0,
    Element    : <GiHamburgerMenu/>
  },
];

const Course: FC = () =>
{
  const router = useRouter()

  return (
    <>
      <CNav
        rightElement={
          <CustomSVGImage
            className="w-8 h-8"
            backgroundActive
            borderActive
            image="/diego-perfil.png"
          />
        }
        darkText
        title="Your Course"
        transparent={ false }
      />
      <SearchBar/>
      <CourseInfo
        description="3h 30m in total"
        // image="/coding person image for website .webp"
        image="/resume-parsing_GOLD3169_WeeklyNewsletterImage_317-02-1024x532_.png"
        title="Graphic Design For the Web"
      />
      <div
        className="text-[#1B2A48] mt-8 mb-4 mx-8"
      >
        Lessons
      </div>
      <div
        className="space-y-6"
      >
        { lessons.map( ( lesson ) =>
          (
            <LessonInfo
              clickAction={ () => router.push( "/complete" ) }
              key={ lesson.title }
              description={ lesson.description }
              Element={ lesson.Element }
              title={ lesson.title }
              minutes={ lesson.minutes }
              percentage={ lesson.percentage }
            />
          )
        ) }
      </div>
    </>
  )
}

export default Course
