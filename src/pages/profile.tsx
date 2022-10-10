import { FC } from "react";
import { CNav } from "../utils/CNav";
import { NotificationBell } from "../utils/NotificationBell";
import { ProfileBackground } from "../utils/ProfileBackground";
import { ProfileInfo } from "../utils/ProfileInfo";
import ChartPoint from "../utils/ChartPoint";
import { Classmates } from "../utils/Classmates";
import { ImageInfoProps } from "../utils/ImageInfo";
import { useRouter } from "next/router";

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


const Profile: FC = () =>
{

  const router = useRouter()

  return (
    <>
      <CNav
        title="Your Profile"
        rightElement={ <NotificationBell darkText/> }
        darkText
        transparent={ false }
        backButtonAction={ () => router.back() }
        rightElementAction={ () => console.log( "NotificationBell" ) }
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
    </>
  )
}

export default Profile
