import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SiteHeader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target && event.target.matches("a.internal-link")) {
        event.preventDefault(); // Prevent default behavior
        const href = event.target.getAttribute("href");

        if (href.startsWith("http://") || href.startsWith("https://")) {
          // Use window.location for external links
          window.location.href = href;
        } else {
          // Use navigate for internal links
          navigate(href);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [navigate]);

  return (
    //  <!-- Site header -->
    <header className="fixed top-2 md:top-6 w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-between gap-3 h-14 rounded-2xl px-3 backdrop-blur-sm bg-white/90 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
          {/* <!-- Site branding --> */}
          <div className="flex-1 flex items-center">
            {/* <!-- Logo --> */}
            <Link className="inline-flex" to="/" aria-label="Cruip">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <path
                  className="fill-blue-500"
                  fillRule="evenodd"
                  d="M15.052 0c6.914.513 12.434 6.033 12.947 12.947h-5.015a7.932 7.932 0 0 1-7.932-7.932V0Zm-2.105 22.985V28C6.033 27.487.513 21.967 0 15.053h5.015a7.932 7.932 0 0 1 7.932 7.932Z"
                  clipRule="evenodd"
                />
                <path
                  className="fill-blue-300"
                  fillRule="evenodd"
                  d="M0 12.947C.513 6.033 6.033.513 12.947 0v5.015a7.932 7.932 0 0 1-7.932 7.932H0Zm22.984 2.106h5.015C27.486 21.967 21.966 27.487 15.052 28v-5.015a7.932 7.932 0 0 1 7.932-7.932Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* <!-- Desktop navigation --> */}
          <nav className="hidden md:flex md:grow">
            {/* <!-- Desktop menu links --> */}
            <ul className="text-sm flex grow justify-center flex-wrap items-center gap-4 lg:gap-8">
              <li className="px-3 py-1">
                <a
                  className="text-gray-700 hover:text-gray-900 flex items-center transition internal-link"
                  href="https://yuantsy.com"
                >
                  Agent 智能体
                </a>
              </li>
              <li className="px-3 py-1">
                <a
                  className="text-gray-700 hover:text-gray-900 flex items-center transition internal-link"
                  href="https://tree.yuantsy.com"
                >
                  KnowledgeTree 知识树
                </a>
              </li>
              <li className="px-3 py-1">
                <a
                  className="text-gray-700 hover:text-gray-900 flex items-center transition internal-link"
                  href="https://service.yuantsy.com"
                >
                  Model 模型
                </a>
              </li>
              <li className="px-3 py-1">
                <a
                  className="text-gray-700 hover:text-gray-900 flex items-center transition internal-link"
                  href="https://search.yuantsy.com"
                >
                  Search 搜索
                </a>
              </li>
              <li className="px-3 py-1">
                <a
                  className="text-gray-700 hover:text-gray-900 flex items-center transition internal-link"
                  href="http://wiki.yuantsy.com"
                >
                  Wiki 关于
                </a>
              </li>
            </ul>
          </nav>

          {/* <!-- Desktop sign in links --> */}
          <ul className="flex-1 flex justify-end items-center gap-3">
            <li>
              <Link
                className="btn-sm text-gray-800 bg-white hover:bg-gray-50 shadow"
                to="/signin"
              >
                Login 登陆
              </Link>
            </li>
            <li>
              <Link
                className="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow"
                to="/signup"
              >
                Register 注册
              </Link>
            </li>
          </ul>

          {/* <!-- Mobile menu --> */}
          <div
            dangerouslySetInnerHTML={{
              __html: `
               <div class="flex md:hidden" x-data="{ expanded: false }">

                <!-- Hamburger button -->
                <button class="group inline-flex w-8 h-8 text-gray-800 bg-white text-center items-center justify-center transition" aria-controls="mobile-nav" :aria-expanded="expanded" @click.stop="expanded = !expanded">
                    <span class="sr-only">Menu</span>
                    <svg class="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect class="origin-center group-[[aria-expanded=true]]:rotate-[315deg] group-[[aria-expanded=true]]:[y:7] group-[[aria-expanded=true]]:[x:0] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]" y="2" x="7" width="9" height="2" rx="1"></rect>
                        <rect class="origin-center group-[[aria-expanded=true]]:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]" y="7" width="16" height="2" rx="1"></rect>
                        <rect class="origin-center group-[[aria-expanded=true]]:rotate-[135deg] group-[[aria-expanded=true]]:[y:7] group-[[aria-expanded=true]]:[x:0] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]" y="12" width="9" height="2" rx="1"></rect>
                    </svg>
                </button>

                <!-- Mobile navigation -->
                <nav
                    id="mobile-nav"
                    class="absolute top-full z-20 left-0 w-full bg-white rounded-xl shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                    @click.outside="expanded = false"
                    @keydown.escape.window="expanded = false"
                    x-show="expanded"
                    x-transition:enter="transition ease-out duration-200 transform"
                    x-transition:enter-start="opacity-0 -translate-y-2"
                    x-transition:enter-end="opacity-100 scale-100"
                    x-transition:leave="transition ease-out duration-200"
                    x-transition:leave-start="opacity-100"
                    x-transition:leave-end="opacity-0"
                    x-cloak
                >
                    <ul class="text-sm p-2">
                        <li>
                            <a class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2 internal-link" href="https://yuantsy.com">Agent 智能体</a>
                        </li>
                        <li>
                            <a class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2 internal-link" href="https://tree.yuantsy.com">KnowledgeTree 知识树</a>
                        </li>
                        <li>
                            <a class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2 internal-link" href="https://service.yuantsy.com">Model 模型</a>
                        </li>
                        <li>
                            <a class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2 internal-link" href="https://search.yuantsy.com">Search 搜索</a>
                        </li>
                        <li>
                            <a class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2 internal-link" href="http://wiki.yuantsy.com">Wiki 关于</a>
                        </li>
                    </ul>
                </nav>

            </div>`,
            }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
