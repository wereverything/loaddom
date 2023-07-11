import { Link } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import DB_PAPER from "../db/_papers";
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line react/prop-types
export default function LinkedPage({ title, img, name, colorBg, colorText, locate
}) {
  const location = useLocation();

  useEffect(() => {
    let pageTitle = "";
    if (location.pathname === locate) {
      pageTitle = title;
    } else {
      pageTitle = "TITULO NO ENCONTRADO";
    }

    document.title = pageTitle;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const daper = DB_PAPER.map((lyrics) => {
    if (location.pathname === lyrics.id) {
      const lines = lyrics.lyric.split("\n");
      // eslint-disable-next-line no-unused-vars
      return lines.map((line, index) => <p key={uuidv4()}>{line}</p>);
    } else {
      console.log("error");
      return null;
    }
  });

  return (
    <main
      id="mainer-container"
      className="w-full h-full flex flex-col gap-10 p-6 overflow-x-hidden min-h-[100vh]"
      style={{ backgroundColor: colorBg }}
    >
      <header id="mainer-header" className="flex flex-row gap-10 items-center md:justify-between">
        <div id="imager-div">
          <img
            src={img}
            alt={title}
            className="w-16 rounded-lg animate-fade-right"
          />
        </div>
        <div id="titles" className="flex flex-col md:text-center">
          <h1
            id="title"
            className="font-semibold font-poppins text-sm animate-fade-left md:text-xl"
            style={{ color: colorText }}
          >
            {title}
          </h1>
          <span
            id="name"
            className="text-xs font-montserrat animate-fade-left md:text-sm"
            style={{ color: colorText }}
          >
            {name}
          </span>
        </div>
        <Link
          to={"/"}
          className="animate-fade-left text-2xl"
          style={{ color: colorText }}
        >
          <RiHomeLine />
        </Link>
      </header>
      <section id="lyrics" className="mt-10 [&>p]:font-poppins [&>p]:font-semibold w-full flex flex-col md:ml-10 md:text-xl md:gap-3 [&>p]:animate-fade-up" style={{color: colorText}}>
        {daper}
      </section>
    </main>
  );
}
