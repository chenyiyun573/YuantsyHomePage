import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./transition.scss";

const Layout: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-2 md:top-6 w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-between gap-3 h-14 rounded-2xl px-3 backdrop-blur-sm bg-white/90 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
          <div className="flex-1 flex items-center">
            <Link to="/" className="inline-flex" aria-label="Cruip">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <path
                  className="fill-blue-500"
                  fill-rule="evenodd"
                  d="M15.052 0c6.914.513 12.434 6.033 12.947 12.947h-5.015a7.932 7.932 0 0 1-7.932-7.932V0Zm-2.105 22.985V28C6.033 27.487.513 21.967 0 15.053h5.015a7.932 7.932 0 0 1 7.932 7.932Z"
                  clip-rule="evenodd"
                />
                <path
                  className="fill-blue-300"
                  fill-rule="evenodd"
                  d="M0 12.947C.513 6.033 6.033.513 12.947 0v5.015a7.932 7.932 0 0 1-7.932 7.932H0Zm22.984 2.106h5.015C27.486 21.967 21.966 27.487 15.052 28v-5.015a7.932 7.932 0 0 1 7.932-7.932Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="text-sm flex grow justify-center flex-wrap items-center gap-4 lg:gap-8">
              <li className="px-3 py-1">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 flex items-center transition"
                >
                  Pricing
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 flex items-center transition"
                >
                  Customers
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 flex items-center transition"
                >
                  Blog
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 flex items-center transition"
                >
                  Docs
                </Link>
              </li>
              <li
                className="relative flex items-center gap-0.5 px-3 py-1"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <span
                  className="text-gray-700 hover:text-gray-900 flex items-center cursor-pointer transition"
                  aria-haspopup="true"
                  aria-expanded={open}
                >
                  Extra
                </span>
                <button
                  className="shrink-0 p-1"
                  aria-expanded={open}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                  }}
                >
                  <span className="sr-only">Show submenu for "Extra"</span>
                  <svg
                    className="fill-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                  >
                    <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z" />
                  </svg>
                </button>
                <CSSTransition
                  in={open}
                  timeout={0}
                  classNames="x-transition"
                  unmountOnExit
                >
                  <ul className="origin-top-left absolute top-full left-0 w-36 bg-white p-2 rounded-xl shadow-lg shadow-black/[0.03] border border-gray-100">
                    <li>
                      <a
                        className="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                        href="#"
                      >
                        Support center
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                        href="#"
                      >
                        Apps
                      </a>
                    </li>
                  </ul>
                </CSSTransition>
              </li>
            </ul>
          </nav>

          <ul className="flex-1 flex justify-end items-center gap-3">
            <li>
              <Link
                to="/"
                className="btn-sm text-gray-800 bg-white hover:bg-gray-50 shadow"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Layout;
