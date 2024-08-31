import { useEffect } from "react";
import Alpine from "alpinejs";

export default function Hero() {
  useEffect(() => {
    const fn = () => {
      Alpine.data("handleSearch", () => ({
        searchOpen: false,
        openSearch() {
          this.searchOpen = true;
          document.body.classList.add("overflow-hidden");
          Alpine.nextTick(() => {
            this.$refs.searchInput.focus();
          });
        },
        closeSearch() {
          this.searchOpen = false;
          document.body.classList.remove("overflow-hidden");
        },
      }));
    };
    document.addEventListener("alpine:init", fn);
    return () => {
      document.removeEventListener("alpine:init", fn);
    };
  }, []);
  return (
    <>
      <section className="relative">
        {/* <!-- Stripes illustration --> */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-0 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <img
            className="max-w-none"
            src="./images/stripes.svg"
            width="768"
            height="432"
            alt="Stripes"
          />
        </div>

        {/* <!-- Circles --> */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-32 ml-[580px] pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-50 blur-[160px]"></div>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[420px] ml-[380px] pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]"></div>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[640px] -ml-[300px] pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* <!-- Main content --> */}
          <div className="max-w-3xl mx-auto pt-32 pb-12 md:pt-40 md:pb-20">
            {/* <!-- Section header --> */}
            <div className="text-center pb-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                How can we help?
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700">
                  Need support or have a question about Simple? We're here to
                  help.
                </p>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `
                <!-- Search -->
                <div x-data="handleSearch">
                  <button
                    class="w-full bg-white/70 text-gray-400 text-sm inline-flex items-center justify-between pl-4 pr-3 py-3.5 shadow shadow-black/[0.03] rounded-lg relative before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none whitespace-nowrap"
                    @click.prevent="openSearch"
                    @keydown.slash.window="openSearch"
                    @keydown.cmd.k.window="openSearch"
                    aria-controls="search-modal"
                  >
                    <div class="flex items-center justify-center">
                      <svg class="w-4 h-4 fill-gray-500 mr-3 shrink-0" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
                      </svg>
                      <span>Search<span class="hidden sm:inline"> help (e.g., creating a site, members, etc.) </span>…</span>
                    </div>
                    <div class="ml-3 flex gap-1">
                      <div class="flex items-center justify-center h-6 w-6 bg-white text-gray-400 rounded shadow-sm">
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
                          <path
                            d="M2.277 11.224c-.418 0-.799-.101-1.143-.303a2.343 2.343 0 0 1-.826-.826A2.208 2.208 0 0 1 0 8.952c0-.421.103-.804.308-1.148.206-.345.48-.62.826-.826a2.191 2.191 0 0 1 1.143-.308h1.034V5.139H2.277c-.418 0-.799-.101-1.143-.304a2.357 2.357 0 0 1-.826-.82A2.2 2.2 0 0 1 0 2.867c0-.418.103-.799.308-1.144.206-.344.48-.618.826-.82A2.191 2.191 0 0 1 2.277.595c.418 0 .799.102 1.143.308.345.202.62.476.826.82.209.345.313.726.313 1.144v1.029h1.526v-1.03c0-.417.101-.798.303-1.143.206-.344.481-.618.826-.82A2.2 2.2 0 0 1 8.362.595c.418 0 .799.102 1.144.308.344.202.618.476.82.82.205.345.308.726.308 1.144a2.2 2.2 0 0 1-.308 1.148c-.206.342-.48.615-.825.82-.342.203-.721.304-1.139.304H7.333V6.67h1.03c.417 0 .796.103 1.138.308.344.206.62.48.825.826a2.2 2.2 0 0 1 .308 1.148c0 .414-.103.795-.308 1.143-.206.345-.48.62-.825.826-.342.202-.721.303-1.139.303-.42 0-.804-.101-1.148-.303a2.344 2.344 0 0 1-.826-.826 2.236 2.236 0 0 1-.303-1.143v-1.04H4.56v1.04c0 .414-.104.795-.313 1.143-.206.345-.48.62-.826.826a2.218 2.218 0 0 1-1.143.303Zm0-1.243a1.045 1.045 0 0 0 .895-.512.991.991 0 0 0 .14-.517v-1.04H2.276a.965.965 0 0 0-.517.145c-.156.093-.28.217-.373.373a1 1 0 0 0-.14.522c0 .189.046.361.135.517.093.156.217.28.373.373.16.093.333.14.522.14Zm0-6.085h1.034v-1.03a.975.975 0 0 0-.14-.516 1.045 1.045 0 0 0-.894-.512.991.991 0 0 0-.517.139c-.156.093-.28.217-.373.373a.975.975 0 0 0-.14.517c0 .189.046.363.135.522.093.156.217.28.373.373.16.09.333.134.522.134Zm5.056 0h1.03c.188 0 .36-.045.516-.134.156-.093.279-.217.368-.373a1 1 0 0 0 .14-.522.975.975 0 0 0-.14-.517 1.018 1.018 0 0 0-.885-.512 1 1 0 0 0-.522.139 1.002 1.002 0 0 0-.507.89v1.029Zm1.03 6.085a1.018 1.018 0 0 0 .885-.512.991.991 0 0 0 .138-.517 1 1 0 0 0-.139-.522 1.018 1.018 0 0 0-.368-.373.965.965 0 0 0-.517-.144H7.333v1.039c0 .189.045.361.134.517.093.156.217.28.373.373a1 1 0 0 0 .522.14ZM4.558 6.67h1.526V5.139H4.56V6.67Z"
                          />
                        </svg>
                      </div>
                      <div class="flex items-center justify-center h-6 w-6 bg-white text-gray-400 rounded shadow-sm">
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="8" height="9" fill="none">
                          <path d="M0 8.727V0h1.581v4.01h.107L5.091 0h1.93L3.649 3.916l3.405 4.811H5.152L2.548 4.986l-.967 1.142v2.6H0Z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <!-- Search modal -->
                  <div>
                    <!-- Modal backdrop -->
                    <div
                      class="fixed inset-0 bg-gray-900 bg-opacity-20 z-50 transition-opacity"
                      x-show="searchOpen"
                      x-transition:enter="transition ease-out duration-200"
                      x-transition:enter-start="opacity-0"
                      x-transition:enter-end="opacity-100"
                      x-transition:leave="transition ease-out duration-100"
                      x-transition:leave-start="opacity-100"
                      x-transition:leave-end="opacity-0"
                      aria-hidden="true"
                      x-cloak
                    ></div>
                    <!-- Modal dialog -->
                    <div
                      id="search-modal"
                      class="fixed inset-0 z-50 overflow-hidden flex items-start top-20 md:top-28 mb-4 justify-center px-4 sm:px-6"
                      role="dialog"
                      aria-modal="true"
                      x-show="searchOpen"
                      x-transition:enter="transition ease-in-out duration-200"
                      x-transition:enter-start="opacity-0 translate-y-4"
                      x-transition:enter-end="opacity-100 translate-y-0"
                      x-transition:leave="transition ease-in-out duration-200"
                      x-transition:leave-start="opacity-100 translate-y-0"
                      x-transition:leave-end="opacity-0 translate-y-4"
                      x-cloak
                    >
                      <div class="bg-white overflow-auto max-w-2xl w-full max-h-full rounded-xl shadow-lg" @click.outside="closeSearch" @keydown.escape.window="closeSearch">
                        <!-- Search form -->
                        <form class="border-b border-gray-200">
                          <div class="flex items-center">
                            <label for="modal-search">
                              <span class="sr-only">Search</span>
                              <svg class="w-4 h-4 fill-gray-500 shrink-0 ml-4" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
                              </svg>
                            </label>
                            <input id="modal-search" class="text-sm w-full bg-white border-0 focus:ring-transparent placeholder-gray-400 appearance-none py-3 pl-2 pr-4" type="search" placeholder="Search for anything…" x-ref="searchInput" />
                          </div>
                        </form>
                        <div class="p-2">
                          <ul>
                            <li>
                              <a class="flex items-center px-2 py-1 leading-6 text-sm text-gray-700 hover:bg-gray-100 rounded-lg focus-within:bg-gray-100 outline-none" href="#0">
                                <svg class="w-3 h-3 fill-gray-400 shrink-0 mr-3" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                                </svg>
                                <span>Alternative Schemas</span>
                              </a>
                            </li>
                            <li>
                              <a class="flex items-center px-2 py-1 leading-6 text-sm text-gray-700 hover:bg-gray-100 rounded-lg focus-within:bg-gray-100 outline-none" href="#0">
                                <svg class="w-3 h-3 fill-gray-400 shrink-0 mr-3" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                                </svg>
                                <span>Query string parameters</span>
                              </a>
                            </li>
                            <li>
                              <a class="flex items-center px-2 py-1 leading-6 text-sm text-gray-700 hover:bg-gray-100 rounded-lg focus-within:bg-gray-100 outline-none" href="#0">
                                <svg class="w-3 h-3 fill-gray-400 shrink-0 mr-3" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                                </svg>
                                <span>Integrations</span>
                              </a>
                            </li>
                            <li>
                              <a class="flex items-center px-2 py-1 leading-6 text-sm text-gray-700 hover:bg-gray-100 rounded-lg focus-within:bg-gray-100 outline-none" href="#0">
                                <svg class="w-3 h-3 fill-gray-400 shrink-0 mr-3" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                                </svg>
                                <span>Organize Contacts with Tags</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `,
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
