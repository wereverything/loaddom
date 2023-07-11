import { Link } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function LinkedPage({ title, img, name, colorBg, colorText, locate }) {
  const location = useLocation();

  useEffect(() => {
    let pageTitle = "";
    if (location.pathname === locate) {
      pageTitle = title;
    } else {
      pageTitle = "TITULO NO ENCONTRADO";
    }

    document.title = pageTitle;
  }, [location]);
  return (
    <main
      id="mainer-container"
      className="w-full h-screen flex flex-col gap-10 p-6"
      style={{ backgroundColor: colorBg }}
    >
      <header id="mainer-header" className="flex flex-row gap-10 items-center">
        <div id="imager-div">
          <img
            src={img}
            alt={title}
            className="w-16 rounded-lg animate-fade-right"
          />
        </div>
        <div id="titles" className="flex flex-col">
          <h1
            id="title"
            className="font-semibold font-poppins text-sm animate-fade-left"
            style={{ color: colorText }}
          >
            {title}
          </h1>
          <span
            id="name"
            className="text-xs font-montserrat animate-fade-left "
            style={{ color: colorText }}
          >
            {name}
          </span>
        </div>
        <Link
          to={"/"}
          className="animate-fade-left text-xl"
          style={{ color: colorText }}
        >
          <RiHomeLine />
        </Link>
      </header>
      <section id="lyrics"></section>
    </main>
  );
}
