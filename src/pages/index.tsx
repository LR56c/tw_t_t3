import type { NextPage } from "next";
import Head from "next/head";
import { CNav } from "../utils/CNav";
import { NotificationBell } from "../utils/NotificationBell";
import ChartPoint from "../utils/ChartPoint";
import { Classmates } from "../utils/Classmates";
import { ProfileBackground } from "../utils/ProfileBackground";
import { ProfileInfo } from "../utils/ProfileInfo";
import { ImageInfoProps } from "../utils/ImageInfo";

const clasmatesData: ImageInfoProps[] = [
  {
    name : "John",
    image: "/diego-perfil.png",
  },
  {
    name : "Martin",
    image: "/diego-perfil.png",
  },
  {
    name : "Diego",
    image: "/diego-perfil.png",
  },
  {
    name : "Pablo",
    image: "/diego-perfil.png",
  },
];

const Home: NextPage = () =>
{
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
          title="Your Profile"
          rightElement={ <NotificationBell darkText/> }
          darkText
          transparent={ false }
        />
        <ProfileBackground/>
        <ProfileInfo
          image="/diego-perfil.png"
          name="John Doe"
        />
        <ChartPoint/>
        <Classmates
          classmates={ clasmatesData }
        />
      </main>
    </>
  )
    ;
};

export default Home;
