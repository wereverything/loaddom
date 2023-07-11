import DB_NEW_WORLD from "../db/_news";
import { Link } from "react-router-dom"

export default function News() {
  return (
    <div
      id="components-retubles"
      className="w-full h-full flex flex-col flex-wrap justify-center items-center gap-5 px-5 overflow-x-scroll overflow-y-hidden selection:bg-[#EBCCFF] selection:text-[#473F4F]"
    >
      {DB_NEW_WORLD.map((news) => {
        return (
          <Link
            className="w-36 p-3 rounded-lg bg-[#63546b] cursor-pointer animate-fade-left animate-once animate-duration-1000"
            key={news.id}
            id={news.id}
            to={news.linked}
          >
            <img src={news.img} alt={news.title} className="rounded-lg" />
            <h6
              id="title"
              className="text-[#EBCCFF] font-semibold font-poppins text-sm mt-4"
            >
              {news.title}
            </h6>
            <p
              id="subtitle"
              className="text-[#BCA3CC] font-normal font-montserrat text-xs"
            >
              {news.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
