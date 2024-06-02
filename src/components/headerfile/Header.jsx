import { Link, NavLink } from "react-router-dom";
import { Sheet } from "react-modal-sheet";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import Navlinks from "./Navlinks";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-orange-700 text-2xl">
              Mansa Maiya Eng. Workers
            </span>
          </Link>
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <FaBars />
          </button>
          <Sheet isOpen={isOpen} onClose={() => setOpen(false)}  >
            <Sheet.Container >
              <Sheet.Header />
              <Sheet.Content >
                <div className="" onClick={()=>setOpen(false)}>
                    <Navlinks/>
                    <RxCrossCircled className="absolute right-3 top-0" size={20}/>
                </div>
              </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
          </Sheet>
          <div className="hidden lg:block flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Call us
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              +91 9760838045
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <Navlinks className={"flex flex-col"}/>
          </div>
        </div>
      </nav>
    </header>
  );
}
