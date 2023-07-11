import DB_TOPER_TOPS from "../db/_topers";
import { Link } from "react-router-dom"

export default function Topers() {

  return (
    <div
      id="components-retubles"
      className="w-full h-full flex flex-col flex-wrap justify-center items-center gap-5 px-5 overflow-x-scroll overflow-y-hidden selection:bg-[#EBCCFF] selection:text-[#473F4F]"
    >
      {DB_TOPER_TOPS.map((top) => {
        return (
          <Link
            className="w-36 p-3 rounded-lg bg-[#63546b] cursor-pointer animate-fade-left animate-once animate-duration-1000"
            key={top}
            id={top.id}
            to={top.linked}
          >
            <img src={top.img} alt={top.title} className="rounded-lg" />
            <h6
              id="title"
              className="text-[#EBCCFF] font-semibold font-poppins text-sm mt-4"
            >
              {top.title}
            </h6>
            <p
              id="subtitle"
              className="text-[#BCA3CC] font-normal font-montserrat text-xs"
            >
              {top.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
