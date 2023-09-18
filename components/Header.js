import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header class="fixed top-0 w-full clearNav z-50">
      <div class="max-w-5xl mx-auto flex flex-wrap md:p-5 sm:px-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <a
            href="/"
            class="flex text-3xl text-white font-medium my-auto md:mb-0"
          >
            NAME
          </a>
          <button
            className="text-white cursor-pointer leading-none px-3 py-auto md:hidden outline-none focus:outline-none content-end ml-auto "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center mx-auto pb-2" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div class="md:ml-auto md:mr-auto font-4 pt-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center">
            <Link
              className="pr-11 sm:pr-7 cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
              to="possibilities"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Возможности
            </Link>
            <Link 
              className="pr-11 sm:pr-7 cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
              to="products"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              >
              Продукты
            </Link>
            <Link 
              className="pr-11 sm:pr-7 cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
              to="price"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}>
              Цена
            </Link>
            <Link
              className="cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              О нас
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
