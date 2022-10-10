import type { NextPage } from "next";
import Head from "next/head";
import { CNav } from "../utils/CNav";
import { useRouter } from "next/router";
import { CustomSVGImage } from "../utils";
import { SearchBar } from "../utils/SearchBar";
import { CourseInfo } from "../utils/CourseInfo";
import { LessonInfo } from "../utils/LessonInfo";
import { lessons } from "./course";

const Home: NextPage = () =>
{
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Elearning app</title>
        <meta
          name="description"
          content="elearning app practice"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main
        className="relative"
      >
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
          backButtonAction={ null }
          rightElementAction={ () => router.push( "/profile" ) }
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
      </main>
    </>
  )
    ;
};

export default Home;
