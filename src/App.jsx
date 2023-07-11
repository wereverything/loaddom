import { useEffect, useState } from "react";
import { BsInstagram, BsGithub, BsWhatsapp } from "react-icons/bs";

// Import Topers Component
import Topers from "./components/_topers";
// Import New Component
import News from "./components/_news";
// Import Popular Component
import Popular from "./components/_pupular";

{
  /*
  COLOR PALETTE
    - #473F4F BG
    - #EBCCFF TITLE
    - #BCA3CC SUBTITLE
    - #63546B FRAMES
*/
}

// eslint-disable-next-line react/prop-types
export default function App({title}) {
  const titles = "pl-5 mb-3 text-[#EBCCFF] font-poppins font-semibold";
  const sections = "w-full h-56 mt-16";
  const [welcomer, setWelcomer] = useState("");
  useEffect(() => {
    let time = new Date();
    let hour = time.getHours();

    if (hour >= 0 && hour <= 11) {
      setWelcomer("Buenos días");
    } else if (hour >= 12 && hour <= 17) {
      setWelcomer("Buenas tardes");
    } else if (hour >= 18 && hour <= 23) {
      setWelcomer("Buenas noches");
    }
  }, []);
  document.title = title
  return (
    <main
      id="main-container-general"
      className="w-full h-screen bg-[#473F4F] overflow-x-hidden selection:bg-[#EBCCFF] selection:text-[#473F4F]"
    >
      <header id="header-plant-main" className="w-full h-30 p-5 font-poppins">
        <nav id="mobile-design" className="w-full h-full">
          <h1 className="text-[#EBCCFF] font-semibold uppercase text-2xl">
            Loaddom
          </h1>
          <p
            id="welcomer"
            className="text-[#BCA3CC] font-montserrat font-normal text-sm"
          >
            {welcomer} personita
          </p>
        </nav>
        <nav id="desktop-design"></nav>
      </header>
      <section id="topers" className="w-full h-56 mt-10">
        <h2 className={titles}>Top de loaddom</h2>
        <Topers />
      </section>
      <section id="new" className={sections}>
        <h2 className={titles}>Nuevo en el mundo</h2>
        <News />
      </section>
      <section id="popular" className={sections}>
        <h2 className={titles}>Sugerencias para ti</h2>
        <Popular />
      </section>
      <footer id="footer" className="mt-32 px-4">
        <div id="montainer" className="w-full h-[1px] bg-[#EBCCFF]"></div>
        <div id="containers" className="grid grid-cols-1 mt-6">
          <div id="contact">
            <h2 className={titles}>Contactame</h2>
            <a
              href="https://www.instagram.com/jhos.fp/"
              rel="noreferrer"
              target="_blank"
              id="instagram"
              className="flex ml-8 items-center gap-3 text-[#BCA3CC] font-montserrat"
            >
              <BsInstagram />
              Instagram
            </a>
            <a
              href="https://github.com/wereverything"
              rel="noreferrer"
              target="_blank"
              id="github"
              className="flex ml-8 items-center gap-3 text-[#BCA3CC] font-montserrat mt-2"
            >
              <BsGithub />
              GitHub
            </a>
            <span
              onClick={() => { alert("Aún no tengo wasa:(") }}
              id="whatsapp"
              className="flex ml-8 items-center gap-3 text-[#BCA3CC] font-montserrat mt-2 cursor-pointer"
            >
              <BsWhatsapp />
              WhatsApp
            </span>
          </div>
          <div id="developers" className="mt-5">
            <h2 className={titles}>Contribuciones</h2>
            <span className="flex ml-8 items-center gap-3 text-[#BCA3CC] font-montserrat mt-2 underline cursor-pointer">
              Desarrolladores
            </span>
            <span className="flex ml-8 items-center gap-3 text-[#BCA3CC] font-montserrat mt-2 underline cursor-pointer">
              Artistas
            </span>
            <span className="flex ml-8 items-center gap-3 text-[#BCA3CC] font-montserrat mt-2 underline cursor-pointer">
              Escritores
            </span>
          </div>
          <div id="ender" className="mt-8">
            <h2 className="text-[#BCA3CC] font-montserrat text-center">&copy;loaddom 2023 copyright</h2>
          </div>
        </div>
      </footer>
    </main>
  );
}
