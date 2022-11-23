import type { NextPage } from "next";
import Head from "next/head";
import Comments from "../components/UI/comments/comments";
import Exams from "../components/UI/exams_stages/exams";
import Stages from "../components/UI/exams_stages/stages";
import Footer from "../components/UI/footer/Footer";
import MainGallery from "../components/UI/gallery/maingallery";
import NavBar from "../components/UI/navbar/navbar";
import DetailedNews from "../components/UI/panel/detailednews";
import Events from "../components/UI/panel/events";
import News from "../components/UI/panel/news";
import Panel from "../components/UI/panel/panel";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BPIS</title>
        <meta
          name="google-site-verification"
          content="2PT_SiS4V8WxhGd5NNYI3N7ofhzVPXWhCuu1tjsSwG0"
        />
        <link rel="icon" href="/bpis_logo.ico" />
        <meta
          name="description"
          content="Burapa Pattanasart International School. We, at BPIS, promote our students to be emotionally and academically well-rounded individuals, who are creative and independent."
        />
      </Head>

      <main>
        <NavBar />
        <MainGallery />
        <Panel />
        <News />
        <Events />
        <DetailedNews />
        <Comments />
        <Exams />
        <Stages />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
