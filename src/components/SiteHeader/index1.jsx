import { useEffect, useState, useRef } from "react";
const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false)
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        console.log('Clicked outside of the nav');
        // 点击了元素外部
        setExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // 清除事件监听
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])
  return (
    <header className="fixed top-2 md:top-6 w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-between gap-3 h-14 rounded-2xl px-3 backdrop-blur-sm bg-white/90 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
          {/* <!-- Site branding --> */}
          <div className="flex-1 flex items-center">
            {/* <!-- Logo --> */}
            <a className="inline-flex" href="index.html" aria-label="Cruip">
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
            </a>
          </div>

          {/* <!-- Desktop navigation --> */}
          <nav className="hidden md:flex md:grow">
            {/* <!-- Desktop menu links --> */}
            <ul className="text-sm flex grow justify-center flex-wrap items-center gap-4 lg:gap-8">
              <li className="px-3 py-1">
                <a
                  className="text-gray-700 hover:text-gray-900 flex items-center transition"
                  href="pricing.html"
                >
                  Pricing
                </a>
              </li>
              <li className="px-3 py-1">
                <a
                  className="text-gray-700 hover:text-gray-900 flex items-center transition"
                  href="customers.html"
                >
                  Customers
                </a>
              </li>
              <li className="px-3 py-1">
                <a
                  className="text-gray-700 hover:text-gray-900 flex items-center transition"
                  href="blog.html"
                >
                  Blog
                </a>
              </li>
              <li className="px-3 py-1">
                <a
                  className="text-gray-700 hover:text-gray-900 flex items-center transition"
                  href="documentation.html"
                >
                  Docs
                </a>
              </li>
              {/* <!-- 1st level: hover --> */}
              <li
                className="relative flex items-center gap-0.5 px-3 py-1"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <span className="text-gray-700 hover:text-gray-900 flex items-center cursor-pointer transition">
                  Extra
                </span>
                <button className="shrink-0 p-1">
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
                {/* <!-- 2nd level: hover --> */}
                <ul
                  className="origin-top-left absolute top-full left-0 w-36 bg-white p-2 rounded-xl shadow-lg shadow-black/[0.03] border border-gray-100"
                  style={{
                    opacity: open ? "1" : "0",
                    transition: "opacity 0.2s ease-in-out",
                  }}
                >
                  <li>
                    <a
                      className="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                      href="support.html"
                    >
                      Support center
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                      href="apps.html"
                    >
                      Apps
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* <!-- Desktop sign in links --> */}
          <ul className="flex-1 flex justify-end items-center gap-3">
            <li>
              <a
                className="btn-sm text-gray-800 bg-white hover:bg-gray-50 shadow"
                href="signin.html"
              >
                Login
              </a>
            </li>
            <li>
              <a
                className="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow"
                href="signup.html"
              >
                Register
              </a>
            </li>
          </ul>

          {/* <!-- Mobile menu --> */}
          <div className="flex md:hidden">
            {/* <!-- Hamburger button --> */}
            <button
              ref={buttonRef}
              className="group inline-flex w-8 h-8 text-gray-800 bg-white text-center items-center justify-center transition"
              // aria-controls="mobile-nav"
              // aria-expanded={expanded}
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-4 h-4 fill-current pointer-events-none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="origin-center group-[[aria-expanded=true]]:rotate-[315deg] group-[[aria-expanded=true]]:[y:7] group-[[aria-expanded=true]]:[x:0] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
                  y="2"
                  x="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  className="origin-center group-[[aria-expanded=true]]:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  className="origin-center group-[[aria-expanded=true]]:rotate-[135deg] group-[[aria-expanded=true]]:[y:7] group-[[aria-expanded=true]]:[x:0] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
                  y="12"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
              </svg>
            </button>

            {/* <!-- Mobile navigation --> */}
            <nav
              id="mobile-nav"
              style={{ opacity: expanded ? 1 : 0, pointerEvents: expanded ? "auto" : "none", transition: "opacity 0.2s ease-in-out" }}
              className="absolute top-full z-20 left-0 w-full bg-white rounded-xl shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
              onClick={() => {
                setExpanded(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setExpanded(false);
                }
              }}
            >
              <ul className="text-sm p-2">
                <li>
                  <a
                    className="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2"
                    href="pricing.html"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2"
                    href="customers.html"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    className="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2"
                    href="blog.html"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2"
                    href="documentation.html"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    className="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2"
                    href="support.html"
                  >
                    Support center
                  </a>
                </li>
                <li>
                  <a
                    className="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2"
                    href="apps.html"
                  >
                    Apps
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
