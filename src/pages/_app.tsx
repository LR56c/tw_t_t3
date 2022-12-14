import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";

const MyApp: AppType = ( { Component, pageProps } ) =>
{
  return ( <ThemeProvider
    defaultTheme="light"
  >
    <Component { ...pageProps } />
  </ThemeProvider> )
};

export default MyApp;
