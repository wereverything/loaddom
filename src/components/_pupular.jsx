import DB_POPULAR from "../db/_popular";
import { AiOutlineHeart } from "react-icons/ai";
export default function Popular() {
  return (
    <div
      id="components-retubles"
      className="w-full h-full flex flex-wrap justify-center items-center gap-5 px-5"
    >
      {DB_POPULAR.map((suge) => {
        return (
          <div
            id="sugerents"
            key={suge}
            className="flex w-full bg-[#63546B] gap-5 px-4 py-2 rounded-lg items-center justify-between"
          >
            <div id="container-one" className="flex gap-5 items-center">
              <span
                id="number"
                className="text-[#EBCCFF] font-montserrat font-bold"
              >
                {suge.number}
              </span>
              <div id="titles" className="flex flex-col">
                <h3
                  id="title"
                  className="text-[#EBCCFF] font-semibold font-poppins text-base"
                >
                  {suge.title}
                </h3>
                <span
                  id="name"
                  className="text-[#BCA3CC] font-montserrat text-xs"
                >
                  {suge.name}
                </span>
              </div>
            </div>
            <span
              id="icon-container"
              className="text-[#EBCCFF] text-lg cursor-pointer"
              onClick={() => alert("función no disponible:(")}
            >
              <AiOutlineHeart />
            </span>
          </div>
        );
      })}
    </div>
  );
}
