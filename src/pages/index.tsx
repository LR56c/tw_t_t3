import type { NextPage } from "next";
import Head from "next/head";
import { CustomSVGImage } from "../utils/CustomSVGImage";

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
      <main>
        <nav
          className="bg-gray-300 w-full flex justify-between py-3"
        >
          <div
            className="ml-3"
          >
            back
          </div>
          <div>
            course
          </div>
          <div
            className="mr-3"
          >
            profile
          </div>
        </nav>
        <div
          className="flex flex-col items-center justify-center"
        >
          <CustomSVGImage
            backgroundActive={ false }
          />
        </div>
        <div className="relative mx-4">
          <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-3 pl-5 w-full text-sm text-gray-900 rounded-full focus:outline-none focus:ring focus:ring-gray-300"
            placeholder="Search..."
            required
          />
        </div>
      </main>
    </>
  );
};
//focus:border focus:outline-none focus:border-gray-300
//dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-300
export default Home;
