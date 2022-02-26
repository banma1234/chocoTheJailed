import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import SnsBar from "../components/SnsBar";

import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <nav>
        <NavBar/>
      </nav>
      <section id = "MainSection">
        <Component {...pageProps} id = "app" />
        <style jsx>{`
          #MainSection{
            width: 100%; height: 100%;
            margin-top: 55px;
          }
        `}</style>
      </section>
      <footer>
        <SnsBar/>
      </footer>
    </>
  );
}

export default MyApp
