import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
const IndexPage = () => {
  return (
    //  <!-- Page wrapper -->
    <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
      {/* <!-- Site header --> */}
      <SiteHeader />
      {/* // <!-- Page content --> */}
      <main className="grow">

        {/* <!-- Hero --> */}
        <section className="relative">

          {/* <!-- Stripes illustration --> */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 pointer-events-none -z-10" aria-hidden="true">
            <img className="max-w-none" src="./images/stripes.svg" width="768" height="432" alt="Stripes" />
          </div>

          {/* <!-- Circles --> */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-32 ml-[580px] pointer-events-none" aria-hidden="true">
            <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-50 blur-[160px]"></div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[420px] ml-[380px] pointer-events-none" aria-hidden="true">
            <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]"></div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[640px] -ml-[300px] pointer-events-none" aria-hidden="true">
            <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* <!-- Hero content --> */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* <!-- Section header --> */}
              <div className="text-center pb-12 md:pb-16">
                <div className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]" data-aos="zoom-y-out">
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]" data-aos="zoom-y-out" data-aos-delay="150">Let AI handle the repetitive, free you<br className="max-lg:hidden" />with Yuantsy Desktop Agent</h1>
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg text-gray-700 mb-8" data-aos="zoom-y-out" data-aos-delay="300">Yuantsy Desktop Agent is an AI powered remote control software that can help you to do anything you can do with a computer.</p>
                  <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="450">
                      <a className="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full mb-4 sm:w-auto sm:mb-0 group" href="#0">
                        <span className="relative inline-flex items-center">
                          MacOS App <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform ml-1">-&gt;</span>
                        </span>
                      </a>
                      <a className="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full mb-4 sm:w-auto sm:mb-0 group" href="#0">
                        <span className="relative inline-flex items-center">
                          Windows App <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform ml-1">-&gt;</span>
                        </span>
                      </a>
                      <a className="btn text-gray-800 bg-white hover:bg-gray-50 shadow w-full sm:w-auto sm:ml-4" href="#0">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Hero image --> */}
              <div className="max-w-3xl mx-auto" data-aos="zoom-y-out" data-aos-delay="600">
                <div className="relative aspect-video bg-gray-900 rounded-2xl px-5 py-3 shadow-xl before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] before:pointer-events-none after:absolute after:-inset-5 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1] after:-z-10">
                  <div className="relative flex items-center justify-between before:block before:w-[41px] before:h-[9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] before:bg-[length:16px_9px] after:w-[41px] mb-8">
                    <span className="text-white font-medium text-[13px]">cruip.com</span>
                  </div>
                  <div className="text-gray-500 font-mono [&_span]:opacity-0">
                    <span className="text-gray-200 animate-[code-1_10s_infinite]">npm login</span> <span className="animate-[code-2_10s_infinite]">--registry=https://npm.pkg.github.com</span><br />
                    <span className="animate-[code-3_10s_infinite]">--scope=@phanatic</span> <span className="animate-[code-4_10s_infinite]">Successfully logged-in.</span><br /><br />
                    <span className="text-gray-200 animate-[code-5_10s_infinite]">npm publish</span><br />
                    <span className="animate-[code-6_10s_infinite]">Package published.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* <!-- Business Categories --> */}
        <section>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* <!-- Yiyun Chen: I added h1 and the subtitle here. --> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]" data-aos="zoom-y-out" data-aos-delay="150">Knowledge Tree<br className="max-lg:hidden" />Simplify the world you live in.</h1>
            <p className="text-lg text-gray-700 mb-8" data-aos="zoom-y-out" data-aos-delay="300">Know the world better. Knowledge Tree will be the knowledge platform both for agentic AIs and human beings. </p>

            <div>

              {/* <!-- Tabs component --> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <div x-data="{ activeTab: 1 }">
                      <!-- Buttons -->
                      <div class="flex justify-center">
                          <div
                              role="tablist"
                              class="relative max-[480px]:max-w-[180px] inline-flex flex-wrap justify-center bg-white rounded-xl p-2 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none mb-8 min-[480px]:mb-12"
                              @keydown.right.prevent.stop="$focus.wrap().next()"
                              @keydown.left.prevent.stop="$focus.wrap().prev()"
                              @keydown.home.prevent.stop="$focus.first()"
                              @keydown.end.prevent.stop="$focus.last()"
                          >
                              <!-- Button #1 -->
                              <button
                                  id="tab-1"
                                  class="flex-1 flex items-center gap-2.5 text-sm font-medium h-8 px-3 rounded-lg whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 transition-colors"
                                  :class="activeTab === 1 ? 'bg-gray-800 text-gray-200' : 'text-gray-700'"
                                  :tabindex="activeTab === 1 ? 0 : -1"
                                  :aria-selected="activeTab === 1"
                                  aria-controls="tabpanel-1"
                                  @click="activeTab = 1"
                                  @focus="activeTab = 1"
                              >
                                  <svg class="fill-current" :class="activeTab === 1 ? 'text-gray-400' : 'text-gray-500'" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                      <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
                                  </svg>
                                  <span>Startups</span>
                              </button>
                              <!-- Button #2 -->
                              <button
                                  id="tab-2"
                                  class="flex-1 flex items-center gap-2.5 text-sm font-medium h-8 px-3 rounded-lg whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 transition-colors"
                                  :class="activeTab === 2 ? 'bg-gray-800 text-gray-200' : 'text-gray-700'"
                                  :tabindex="activeTab === 2 ? 0 : -1"
                                  :aria-selected="activeTab === 2"
                                  aria-controls="tabpanel-2"
                                  @click="activeTab = 2"
                                  @focus="activeTab = 2"
                              >
                                  <svg class="fill-current" :class="activeTab === 1 ? 'text-gray-400' : 'text-gray-500'" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                      <path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Zm.132 7.204A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />
                                  </svg>
                                  <span>Web Apps</span>
                              </button>
                              <!-- Button #3 -->
                              <button
                                  id="tab-3"
                                  class="flex-1 flex items-center gap-2.5 text-sm font-medium h-8 px-3 rounded-lg whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 transition-colors"
                                  :class="activeTab === 3 ? 'bg-gray-800 text-gray-200' : 'text-gray-700'"
                                  :tabindex="activeTab === 3 ? 0 : -1"
                                  :aria-selected="activeTab === 3"
                                  aria-controls="tabpanel-3"
                                  @click="activeTab = 3"
                                  @focus="activeTab = 3"
                              >
                                  <svg class="fill-current" :class="activeTab === 1 ? 'text-gray-400' : 'text-gray-500'" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                      <path d="M3 2a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0V2Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 0-2 0v12a1 1 0 1 0 2 0V2Z" />
                                  </svg>
                                  <span>eCommerce</span>
                              </button>
                              <!-- Button #4 -->
                              <button
                                  id="tab-4"
                                  class="flex-1 flex items-center gap-2.5 text-sm font-medium h-8 px-3 rounded-lg whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 transition-colors"
                                  :class="activeTab === 4 ? 'bg-gray-800 text-gray-200' : 'text-gray-700'"
                                  :tabindex="activeTab === 4 ? 0 : -1"
                                  :aria-selected="activeTab === 4"
                                  aria-controls="tabpanel-4"
                                  @click="activeTab = 4"
                                  @focus="activeTab = 4"
                              >
                                  <svg class="fill-current" :class="activeTab === 1 ? 'text-gray-400' : 'text-gray-500'" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                      <path d="M.06 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 1 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331A2.162 2.162 0 0 1 .06 10.003Zm7.855-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33a.172.172 0 0 0 .17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.084 2.023a.172.172 0 0 0-.17-.001h.001ZM9.075.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.924.285a2.173 2.173 0 0 1 2.15 0h.001Z" />
                                  </svg>
                                  <span>Enteprise</span>
                              </button>
                          </div>
                      </div>

                      <div class="relative flex items-center justify-center h-[324px]">
                          <!-- Small blue dots -->
                          <div class="absolute -z-10">
                              <svg class="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="164" height="41" viewBox="0 0 164 41" fill="none">
                                  <circle cx="1" cy="8" r="1" fill-opacity="0.24"/>
                                  <circle cx="1" cy="1" r="1" fill-opacity="0.16"/>
                                  <circle cx="1" cy="15" r="1"/>
                                  <circle cx="1" cy="26" r="1" fill-opacity="0.64"/>
                                  <circle cx="1" cy="33" r="1" fill-opacity="0.24"/>
                                  <circle cx="8" cy="8" r="1"/>
                                  <circle cx="8" cy="15" r="1"/>
                                  <circle cx="8" cy="26" r="1" fill-opacity="0.24"/>
                                  <circle cx="15" cy="15" r="1" fill-opacity="0.64"/>
                                  <circle cx="15" cy="26" r="1" fill-opacity="0.16"/>
                                  <circle cx="8" cy="33" r="1"/>
                                  <circle cx="1" cy="40" r="1"/>
                                  <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 7)" fill-opacity="0.24"/>
                                  <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 0)" fill-opacity="0.16"/>
                                  <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 14)"/>
                                  <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 25)" fill-opacity="0.64"/>
                                  <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 32)" fill-opacity="0.24"/>
                                  <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 157 7)"/>
                                  <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 157 14)"/>
                                  <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 157 25)" fill-opacity="0.24"/>
                                  <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 150 14)" fill-opacity="0.64"/>
                                  <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 150 25)" fill-opacity="0.16"/>
                                  <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 157 32)"/>
                                  <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 39)"/>
                              </svg>
                          </div>
                          <!-- Blue glow -->
                          <div class="absolute -z-10">
                              <svg xmlns="http://www.w3.org/2000/svg" width="432" height="160" viewBox="0 0 432 160" fill="none">
                                  <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                                      <path class="fill-blue-500" fill-rule="evenodd" clip-rule="evenodd" d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z" />
                                  </g>
                                  <defs>
                                      <filter id="filter0_f_2044_9" x="0" y="0" width="432" height="160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                          <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_2044_9"/>
                                      </filter>
                                  </defs>
                              </svg>
                          </div>
                          <!-- Horizontal lines -->
                          <div class="absolute -z-10 inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
                          <div class="absolute -z-10 inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
                          <div class="absolute -z-10 inset-x-[200px] top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
                          <div class="absolute -z-10 inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-[82px] before:absolute before:inset-y-0 before:w-24 before:bg-gradient-to-r before:via-blue-500 before:animate-[line_10s_ease-in-out_infinite_both] mix-blend-multiply"></div>
                          <div class="absolute -z-10 inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent translate-y-[82px] before:absolute before:inset-y-0 before:w-24 before:bg-gradient-to-r before:via-blue-500 before:animate-[line_10s_ease-in-out_infinite_5s_both] mix-blend-multiply"></div>
                          <!-- Diagonal lines -->
                          <div class="absolute -z-10 inset-x-[300px] top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent rotate-[20deg] mix-blend-multiply"></div>
                          <div class="absolute -z-10 inset-x-[300px] top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -rotate-[20deg] mix-blend-multiply"></div>
                          <!-- Vertical lines -->
                          <div class="absolute -z-10 inset-y-0 left-1/2 w-px bg-gradient-to-b from-gray-200 to-transparent -translate-x-[216px] mix-blend-multiply"></div>
                          <div class="absolute -z-10 inset-y-0 left-1/2 w-px bg-gradient-to-t from-gray-200 to-transparent translate-x-[216px] mix-blend-multiply"></div>
                          <!-- Logos -->
                          <div class="absolute before:absolute before:-inset-3 before:rounded-full before:[background:conic-gradient(from_180deg,transparent,theme(colors.blue.500))_border-box] before:border before:border-transparent before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:animate-[spin_3s_linear_infinite]">
                              <div class="animate-[breath_8s_ease-in-out_infinite_both]">
                                  <div class="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                      <img class="relative" src="./images/logo-01.svg" width="32" height="32" alt="Logo 01" />
                                  </div>
                              </div>
                          </div>
                          <!-- Panel #1 -->
                          <div
                              id="tabpanel-1"
                              class="w-full h-full flex items-center justify-center"
                              role="tabpanel"
                              tabindex="0"
                              aria-labelledby="tab-1"
                              x-show="activeTab === 1"
                              x-transition:enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform order-first"
                              x-transition:enter-start="opacity-0 scale-90"
                              x-transition:enter-end="opacity-100 scale-100"
                              x-transition:leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform absolute"
                              x-transition:leave-start="opacity-100 scale-100"
                              x-transition:leave-end="opacity-0 scale-125"
                          >
                              <div class="absolute -translate-x-[136px]">
                                  <div class="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                                      <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-02.svg" width="23" height="22" alt="Logo 02" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[136px]">
                                  <div class="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-03.svg" width="22" height="22" alt="Logo 03" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute -translate-x-[216px] -translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-04.svg" width="24" height="22" alt="Logo 04" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[216px] -translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-05.svg" width="25" height="25" alt="Logo 05" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[216px] translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-06.svg" width="20" height="18" alt="Logo 06" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute -translate-x-[216px] translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-07.svg" width="25" height="25" alt="Logo 07" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute -translate-x-[292px] opacity-40">
                                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                      <div class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                          <img class="relative" src="./images/logo-08.svg" width="20" height="20" alt="Logo 08" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[292px] opacity-40">
                                  <div class="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                                      <div class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                          <img class="relative" src="./images/logo-09.svg" width="21" height="13" alt="Logo 09" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <!-- Panel #2 -->
                          <div
                              id="tabpanel-2"
                              class="w-full h-full flex items-center justify-center"
                              role="tabpanel"
                              tabindex="0"
                              aria-labelledby="tab-2"
                              x-show="activeTab === 2"
                              x-transition:enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform order-first"
                              x-transition:enter-start="opacity-0 scale-90"
                              x-transition:enter-end="opacity-100 scale-100"
                              x-transition:leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform absolute"
                              x-transition:leave-start="opacity-100 scale-100"
                              x-transition:leave-end="opacity-0 scale-125"
                          >
                              <div class="absolute -translate-x-[136px]">
                                  <div class="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                                      <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-03.svg" width="23" height="22" alt="Logo 03" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[136px]">
                                  <div class="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-04.svg" width="22" height="22" alt="Logo 04" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute -translate-x-[216px] -translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-05.svg" width="24" height="22" alt="Logo 05" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[216px] -translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-02.svg" width="25" height="25" alt="Logo 02" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[216px] translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-07.svg" width="20" height="18" alt="Logo 07" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute -translate-x-[216px] translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-06.svg" width="25" height="25" alt="Logo 06" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute -translate-x-[292px] opacity-40">
                                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                      <div class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                          <img class="relative" src="./images/logo-09.svg" width="20" height="20" alt="Logo 09" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[292px] opacity-40">
                                  <div class="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                                      <div class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                          <img class="relative" src="./images/logo-08.svg" width="21" height="13" alt="Logo 08" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <!-- Panel #3 -->
                          <div
                              id="tabpanel-3"
                              class="w-full h-full flex items-center justify-center"
                              role="tabpanel"
                              tabindex="0"
                              aria-labelledby="tab-3"
                              x-show="activeTab === 3"
                              x-transition:enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform order-first"
                              x-transition:enter-start="opacity-0 scale-90"
                              x-transition:enter-end="opacity-100 scale-100"
                              x-transition:leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform absolute"
                              x-transition:leave-start="opacity-100 scale-100"
                              x-transition:leave-end="opacity-0 scale-125"
                          >
                              <div class="absolute -translate-x-[136px]">
                                  <div class="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                                      <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-02.svg" width="23" height="22" alt="Logo 02" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[136px]">
                                  <div class="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-03.svg" width="22" height="22" alt="Logo 03" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute -translate-x-[216px] -translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-04.svg" width="24" height="22" alt="Logo 04" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[216px] -translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-05.svg" width="25" height="25" alt="Logo 05" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[216px] translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-06.svg" width="20" height="18" alt="Logo 06" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute -translate-x-[216px] translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-07.svg" width="25" height="25" alt="Logo 07" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute -translate-x-[292px] opacity-40">
                                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                      <div class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                          <img class="relative" src="./images/logo-08.svg" width="20" height="20" alt="Logo 08" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[292px] opacity-40">
                                  <div class="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                                      <div class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                          <img class="relative" src="./images/logo-09.svg" width="21" height="13" alt="Logo 09" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <!-- Panel #4 -->
                          <div
                              id="tabpanel-4"
                              class="w-full h-full flex items-center justify-center"
                              role="tabpanel"
                              tabindex="0"
                              aria-labelledby="tab-4"
                              x-show="activeTab === 4"
                              x-transition:enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform order-first"
                              x-transition:enter-start="opacity-0 scale-90"
                              x-transition:enter-end="opacity-100 scale-100"
                              x-transition:leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform absolute"
                              x-transition:leave-start="opacity-100 scale-100"
                              x-transition:leave-end="opacity-0 scale-125"
                          >
                              <div class="absolute -translate-x-[136px]">
                                  <div class="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                                      <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-03.svg" width="23" height="22" alt="Logo 03" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[136px]">
                                  <div class="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-04.svg" width="22" height="22" alt="Logo 04" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute -translate-x-[216px] -translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-05.svg" width="24" height="22" alt="Logo 05" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[216px] -translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-02.svg" width="25" height="25" alt="Logo 02" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[216px] translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-07.svg" width="20" height="18" alt="Logo 07" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute -translate-x-[216px] translate-y-[82px]">
                                  <div class="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                          <img class="relative" src="./images/logo-06.svg" width="25" height="25" alt="Logo 06" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute -translate-x-[292px] opacity-40">
                                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                      <div class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                          <img class="relative" src="./images/logo-09.svg" width="20" height="20" alt="Logo 09" />
                                      </div>
                                  </div>
                              </div>
                              <div class="absolute translate-x-[292px] opacity-40">
                                  <div class="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                                      <div class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                          <img class="relative" src="./images/logo-08.svg" width="21" height="13" alt="Logo 08" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                `
                }}
              ></div>
              {/* <!-- End: Tabs component --> */}
            </div>
          </div>
        </section>

        {/* <!-- Large testimonial --> */}
        <section>
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="text-center space-y-3">
                <div className="relative inline-flex">
                  <svg className="absolute -left-6 -top-2 -z-10" width="40" height="49" viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z" fill="#D1D5DB" />
                  </svg>
                  <img className="rounded-full" src="./images/large-testimonial.jpg" width="48" height="48" alt="Large testimonial" />
                </div>
                <p className="text-2xl font-bold text-gray-900">“Simple has simplified my life in more ways than one. From managing my sites to <em className="italic text-gray-500">keeping track of tasks</em>, it's become my go-to tool for everything.”</p>
                <div className="font-medium text-gray-500">
                  <span className="text-gray-700">Mary Sullivan</span> <span className="text-gray-400">/</span> <a className="text-blue-500" href="#0">CTO at Microsoft</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Features --> */}
        <section className="relative before:absolute before:inset-0 before:bg-gray-900 before:-z-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">

              {/* <!-- Section header Yiyun Chen: I changed text in this section --> */}
              <div className="max-w-3xl mx-auto text-center pb-16 md:pb-20">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-200">AI models, all in one - Yuantsy Service Platform </h2>
              </div>

              {/* <!-- Planet --> */}
              <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
                <div className="text-center">
                  <div className="inline-flex relative rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                    <img className="bg-gray-900 rounded-full" src="./images/planet.png" width="400" height="400" alt="Planet" />
                    <div className="pointer-events-none" aria-hidden="true">
                      <img className="absolute z-10 -top-20 -right-64 max-w-none" src="./images/planet-overlay.svg" width="789" height="755" alt="Planet decoration" />
                      <div>
                        <img className="absolute z-10 top-16 -left-28 opacity-80 transition-opacity duration-500 animate-[float_4s_ease-in-out_infinite_both]" src="./images/planet-tag-01.png" width="253" height="56" alt="Tag 01" />
                        <img className="absolute z-10 top-7 left-56 opacity-30 transition-opacity duration-500 animate-[float_4s_ease-in-out_infinite_1s_both]" src="./images/planet-tag-02.png" width="241" height="56" alt="Tag 02" />
                        <img className="absolute z-10 bottom-24 -left-20 opacity-25 transition-opacity duration-500 animate-[float_4s_ease-in-out_infinite_2s_both]" src="./images/planet-tag-03.png" width="243" height="56" alt="Tag 03" />
                        <img className="absolute z-10 bottom-32 left-64 opacity-80 transition-opacity duration-500 animate-[float_4s_ease-in-out_infinite_3s_both]" src="./images/planet-tag-04.png" width="251" height="56" alt="Tag 04" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Grid --> */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 overflow-hidden [&>*]:p-6 md:[&>*]:p-10 [&>*]:relative [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-inline-start:-1px] [&>*]:before:[inset-block-start:0] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-inline-start:0] [&>*]:after:[inset-block-start:-1px]">
                <article>
                  <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                    <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                    </svg>
                    <span>Instant Analytics</span>
                  </h3>
                  <p className="text-[15px] text-gray-400">Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.</p>
                </article>
                <article>
                  <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                    <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                    </svg>
                    <span>Metadata</span>
                  </h3>
                  <p className="text-[15px] text-gray-400">Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.</p>
                </article>
                <article>
                  <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                    <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z" opacity=".3" />
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                    </svg>
                    <span>SEO &amp; Performance</span>
                  </h3>
                  <p className="text-[15px] text-gray-400">Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.</p>
                </article>
                <article>
                  <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                    <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
                    </svg>
                    <span>Custom Code</span>
                  </h3>
                  <p className="text-[15px] text-gray-400">Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.</p>
                </article>
                <article>
                  <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                    <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
                    </svg>
                    <span>Localization</span>
                  </h3>
                  <p className="text-[15px] text-gray-400">Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.</p>
                </article>
                <article>
                  <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                    <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                    </svg>
                    <span>Canonical URL</span>
                  </h3>
                  <p className="text-[15px] text-gray-400">Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.</p>
                </article>
              </div>

            </div>
          </div>
        </section>

        {/* <!-- Features #2 --> */}
        <section className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" aria-hidden="true">
            <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px]"></div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">

              {/* <!-- Section header --> */}
              <div className="max-w-3xl mx-auto text-center pb-24 md:pb-28">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Reorganize the World <br /> Yuantsy RAG Search</h2>
                <p className="text-lg text-gray-700">Use powerful yet familiar tools to create your ultimate website design. Import your files everywhere, including Figma.</p>
              </div>

              {/* <!-- Illustration --> */}
              <div className="group relative w-full max-w-[500px] mx-auto flex justify-center mb-32 md:mb-36" data-aos="zoom-y-out">
                <div className="absolute bottom-0 -z-10" aria-hidden="true">
                  <div className="w-80 h-80 rounded-full bg-blue-500 opacity-70 blur-[160px]"></div>
                </div>
                <div className="w-full aspect-video bg-gray-900 rounded-2xl px-5 py-3 shadow-xl -rotate-1 group-hover:-rotate-0 transition duration-300">
                  <div className="relative flex items-center justify-between before:block before:w-[41px] before:h-[9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] before:bg-[length:16px_9px] after:w-[41px] mb-8">
                    <span className="text-white font-medium text-[13px]">AI Project</span>
                  </div>
                  <div className="text-gray-500 font-mono [&_span]:opacity-0 text-sm blur-sm group-hover:blur-none transition duration-300">
                    <span className="text-gray-200 animate-[code-1_10s_infinite]">npm login</span> <span className="animate-[code-2_10s_infinite]">--registry=https://npm.pkg.github.com</span><br />
                    <span className="animate-[code-3_10s_infinite]">--scope=@phanatic</span> <span className="animate-[code-4_10s_infinite]">Successfully logged-in.</span><br /><br />
                    <span className="text-gray-200 animate-[code-5_10s_infinite]">npm publish</span><br />
                    <span className="animate-[code-6_10s_infinite]">Package published.</span>
                  </div>
                </div>
                <div className="absolute top-16">
                  <div className="translate-y-2 group-hover:opacity-0 group-hover:translate-y-0 transition duration-300 pointer-events-none mb-[7%]">
                    <img className="-rotate-2" src="./images/features-02-overlay-01.png" width="500" height="72" alt="Overlay 01" />
                  </div>
                  <div className="translate-y-2 group-hover:opacity-0 group-hover:translate-y-0 transition duration-300 delay-50 pointer-events-none mb-[3.5%]">
                    <img src="./images/features-02-overlay-02.png" width="500" height="40" alt="Overlay 02" />
                  </div>
                  <div className="translate-y-2 group-hover:opacity-0 group-hover:translate-y-0 transition duration-300 delay-100 pointer-events-none">
                    <img className="-rotate-1" src="./images/features-02-overlay-03.png" width="500" height="91" alt="Overlay 03" />
                  </div>
                </div>
              </div>

              {/* <!-- Grid --> */}
              <div className="grid lg:grid-cols-3 overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1] [&>*]:p-6 md:[&>*]:px-10 md:[&>*]:py-12 [&>*]:relative [&>*]:before:absolute [&>*]:before:bg-gradient-to-b [&>*]:before:from-transparent [&>*]:before:via-gray-200 [&>*]:before:[block-size:100%] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-inline-start:-1px] [&>*]:before:[inset-block-start:0]">
                <article>
                  <h3 className="font-medium flex items-center space-x-2 mb-2">
                    <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="m15.447 6.605-.673-.336a6.973 6.973 0 0 0-.761-1.834l.238-.715a.999.999 0 0 0-.242-1.023l-.707-.707a.995.995 0 0 0-1.023-.242l-.715.238a6.96 6.96 0 0 0-1.834-.761L9.394.552A1 1 0 0 0 8.5-.001h-1c-.379 0-.725.214-.895.553l-.336.673a6.973 6.973 0 0 0-1.834.761l-.715-.238a.997.997 0 0 0-1.023.242l-.707.707a1.001 1.001 0 0 0-.242 1.023l.238.715a6.959 6.959 0 0 0-.761 1.834l-.673.336a1 1 0 0 0-.553.895v1c0 .379.214.725.553.895l.673.336c.167.653.425 1.268.761 1.834l-.238.715a.999.999 0 0 0 .242 1.023l.707.707a.997.997 0 0 0 1.023.242l.715-.238a6.959 6.959 0 0 0 1.834.761l.336.673a1 1 0 0 0 .895.553h1c.379 0 .725-.214.895-.553l.336-.673a6.973 6.973 0 0 0 1.834-.761l.715.238a1.001 1.001 0 0 0 1.023-.242l.707-.707c.268-.268.361-.664.242-1.023l-.238-.715a6.959 6.959 0 0 0 .761-1.834l.673-.336A1 1 0 0 0 16 8.5v-1c0-.379-.214-.725-.553-.895ZM8 13a5 5 0 1 1 .001-10.001 5 5 0 0 1 0 10.001Z" />
                    </svg>
                    <span>Optimization</span>
                  </h3>
                  <p className="text-[15px] text-gray-700">Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.</p>
                </article>
                <article>
                  <h3 className="font-medium flex items-center space-x-2 mb-2">
                    <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="12">
                      <path d="M2 0a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H2Zm0 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm1-3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H3Z" />
                    </svg>
                    <span>Cookie Banner</span>
                  </h3>
                  <p className="text-[15px] text-gray-700">Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.</p>
                </article>
                <article>
                  <h3 className="font-medium flex items-center space-x-2 mb-2">
                    <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M14.75 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM2.5 14.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM1.25 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z" />
                    </svg>
                    <span>Custom Domain</span>
                  </h3>
                  <p className="text-[15px] text-gray-700">Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.</p>
                </article>
              </div>

            </div>
          </div>
        </section>

        {/* <!-- Testimonials --> */}
        <section className="relative before:absolute before:inset-0 before:h-[120%] before:pointer-events-none before:bg-gradient-to-b before:from-gray-100 before:-z-10">
          <div className="pt-12 md:pt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Yuantsy Neural Engine <br /> Agentic AI calls new Hardware.</h2>
              </div>
            </div>
            <div className="relative flex justify-center max-w-[94rem] mx-auto">
              <div className="absolute bottom-20 -translate-x-36 -z-10" aria-hidden="true">
                <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px]"></div>
              </div>
              <div className="absolute -bottom-10 -z-10" aria-hidden="true">
                <div className="w-80 h-80 rounded-full bg-blue-500 opacity-40 blur-[160px]"></div>
              </div>
              <div className="absolute bottom-0 -z-10" aria-hidden="true">
                <div className="w-56 h-56 rounded-full border-[20px] border-white blur-[20px]"></div>
              </div>
              {/* <!-- Row --> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <div
              x-data="{}"
              x-init="$nextTick(() => {
                                let ul = $refs.testimonials;
                                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                                ul.nextSibling.setAttribute('aria-hidden', 'true');
                            })"
              class="w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] py-12 md:py-20 group"
            >
              <div x-ref="testimonials" class="flex items-start justify-center md:justify-start [&>*]:mx-3 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]">
                {/* <!-- Item #1 --> */}
                <article class="relative flex flex-col rounded-2xl h-full w-[22rem] p-5 shadow-lg odd:rotate-1 even:-rotate-1 group-hover:rotate-0 transition-transform duration-300 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img class="shrink-0 rounded-full" src="./images/testimonial-01.jpg" width="44" height="44" alt="Testimonial 01" />
                    <div>
                      <div class="font-bold">Peter Lowe</div>
                      <div>
                        <a class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition" href="#0">@peterlowex</a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    As a founder, having a visually appealing and user-friendly website is essential. This tool not only helped me achieve that but also improved my site's performance and SEO.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="17" height="15" fill="none">
                      <path fill-rule="evenodd" d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z" />
                    </svg>
                    <div class="text-xs">May 19, 2027</div>
                  </footer>
                </article>
                {/* <!-- Item #2 --> */}
                <article class="relative flex flex-col rounded-2xl h-full w-[22rem] p-5 shadow-lg odd:rotate-1 even:-rotate-1 group-hover:rotate-0 transition-transform duration-300 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img class="shrink-0 rounded-full" src="./images/testimonial-02.jpg" width="44" height="44" alt="Testimonial 02" />
                    <div>
                      <div class="font-bold">Rodri Alba</div>
                      <div>
                        <a class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition" href="#0">@rodri_spn</a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    Simple has revolutionized the way I manage my work. Its intuitive interface and seamless functionality make staying organized effortless. I can't imagine my life without it.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="17" height="15" fill="none">
                      <path fill-rule="evenodd" d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z" />
                    </svg>
                    <div class="text-xs">Apr 12, 2027</div>
                  </footer>
                </article>
                {/* <!-- Item #3 --> */}
                <article class="relative flex flex-col rounded-2xl h-full w-[22rem] p-5 shadow-lg odd:rotate-1 even:-rotate-1 group-hover:rotate-0 transition-transform duration-300 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img class="shrink-0 rounded-full" src="./images/testimonial-03.jpg" width="44" height="44" alt="Testimonial 03" />
                    <div>
                      <div class="font-bold">Michele Lex</div>
                      <div>
                        <a class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition" href="#0">@MikyBrown</a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    I've tried several website builders before, but none were as user-friendly and versatile as this one. From design to functionality, it exceeded my expectations!
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="17" height="15" fill="none">
                      <path fill-rule="evenodd" d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z" />
                    </svg>
                    <div class="text-xs">Mar 04, 2027</div>
                  </footer>
                </article>
                {/* <!-- Item #4 --> */}
                <article class="relative flex flex-col rounded-2xl h-full w-[22rem] p-5 shadow-lg odd:rotate-1 even:-rotate-1 group-hover:rotate-0 transition-transform duration-300 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img class="shrink-0 rounded-full" src="./images/testimonial-04.jpg" width="44" height="44" alt="Testimonial 04" />
                    <div>
                      <div class="font-bold">Michael Ross</div>
                      <div>
                        <a class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition" href="#0">@michjack</a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    Simple lives up to its name in every way. It's incredibly easy to use yet powerful enough to handle all my tasks effortlessly. It's become an essential part of my daily routine.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="17" height="15" fill="none">
                      <path fill-rule="evenodd" d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z" />
                    </svg>
                    <div class="text-xs">Jan 15, 2027</div>
                  </footer>
                </article>
              </div>
            </div>
                `
                }}
              >
              </div>

            </div>
          </div>
        </section>

        {/* <!-- CTA --> */}
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl text-center relative overflow-hidden shadow-xl before:absolute before:inset-0 before:rounded-2xl before:bg-gray-900 before:pointer-events-none before:-z-10" data-aos="zoom-y-out">
              {/* <!-- Glow --> */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10" aria-hidden="true">
                <div className="w-[480px] h-56 rounded-full border-[20px] border-blue-500 blur-3xl"></div>
              </div>
              {/* <!-- Stripes illustration --> */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 pointer-events-none -z-10" aria-hidden="true">
                <img className="max-w-none" src="./images/stripes-dark.svg" width="768" height="432" alt="Stripes" />
              </div>
              <div className="py-12 md:py-20 px-4 md:px-12">
                <h2 className="text-3xl md:text-4xl text-gray-200 font-bold mb-6 md:mb-12 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1]">Join Yuantsy, Lead the Future</h2>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <a className="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full mb-4 sm:w-auto sm:mb-0 group" href="#0">
                    <span className="relative inline-flex items-center">
                      Yuantsy Careers <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform ml-1">-&gt;</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}

export default IndexPage;