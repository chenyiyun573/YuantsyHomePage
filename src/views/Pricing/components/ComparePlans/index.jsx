export default function ComparePlans() {
  return (
    <>
      {/* <!-- Compare plans --> */}
      <section>
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <div className="pb-12 md:pb-20">

            <div className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-5 md:-mx-6 max-md:gap-6">

              {/* <!-- Column with labels --> */}
              <section
                className="md:contents [&>div:first-child]:pt-5 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:rounded-b-2xl md:[&>div:last-child>div]:border-none">
                {/* <!-- Empty cell --> */}
                <div></div>
                {/* <!-- # Key features --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-1" aria-hidden="true">
                  <div className="font-bold mb-2 mt-5">Key features</div>
                </div>
                {/* <!-- Translated Words --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-2" aria-hidden="true">
                  <div className="py-4 text-sm border-b border-gray-200">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                        <div class="relative" x-data="{ open: false }">
                            <button
                                class="block text-left text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4 cursor-help"
                                aria-describedby="tooltip-01" @mouseenter="open = true"
                                @mouseleave="open = false" @focus="open = true" @focusout="open = false"
                                @click.prevent>
                                Translated Words
                            </button>
                            <div id="tooltip-01" role="tooltip" class="z-10 absolute top-full left-0">
                                <div class="w-[12.5rem] text-xs bg-gray-800 text-gray-200 border border-gray-200 p-2 rounded shadow-lg overflow-hidden mt-1"
                                    x-show="open"
                                    x-transition:enter="transition ease-out duration-200 transform"
                                    x-transition:enter-start="opacity-0 translate-y-1"
                                    x-transition:enter-end="opacity-100 translate-y-0"
                                    x-transition:leave="transition ease-out duration-200"
                                    x-transition:leave-start="opacity-100"
                                    x-transition:leave-end="opacity-0" x-cloak>
                                    Apply visual attributes to refine your designs and focus on relevant
                                    insights.
                                </div>
                            </div>
                        </div>
                        `
                      }}
                    >
                    </div>
                  </div>
                </div>
                {/* <!-- Search Page Limit --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-3" aria-hidden="true">
                  <div className="py-4 text-sm border-b border-gray-200">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                        <div class="relative" x-data="{ open: false }">
                            <button
                                class="block text-left text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4 cursor-help"
                                aria-describedby="tooltip-02" @mouseenter="open = true"
                                @mouseleave="open = false" @focus="open = true" @focusout="open = false"
                                @click.prevent>
                                Search Page Limit
                            </button>
                            <div id="tooltip-02" role="tooltip" class="z-10 absolute top-full left-0">
                                <div class="w-[12.5rem] text-xs bg-gray-800 text-gray-200 border border-gray-200 p-2 rounded shadow-lg overflow-hidden mt-1"
                                    x-show="open"
                                    x-transition:enter="transition ease-out duration-200 transform"
                                    x-transition:enter-start="opacity-0 translate-y-1"
                                    x-transition:enter-end="opacity-100 translate-y-0"
                                    x-transition:leave="transition ease-out duration-200"
                                    x-transition:leave-start="opacity-100"
                                    x-transition:leave-end="opacity-0" x-cloak>
                                    Apply visual attributes to refine your designs and focus on relevant
                                    insights.
                                </div>
                            </div>
                        </div>
                        `
                      }}
                    ></div>
                  </div>
                </div>
                {/* <!-- Custom Fonts --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-4" aria-hidden="true">
                  <div className="py-4 text-sm border-b border-gray-200">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                        <div class="relative" x-data="{ open: false }">
                          <button
                              class="block text-left text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4 cursor-help"
                              aria-describedby="tooltip-03" @mouseenter="open = true"
                              @mouseleave="open = false" @focus="open = true" @focusout="open = false"
                              @click.prevent>
                              Custom Fonts
                          </button>
                          <div id="tooltip-03" role="tooltip" class="z-10 absolute top-full left-0">
                              <div class="w-[12.5rem] text-xs bg-gray-800 text-gray-200 border border-gray-200 p-2 rounded shadow-lg overflow-hidden mt-1"
                                  x-show="open"
                                  x-transition:enter="transition ease-out duration-200 transform"
                                  x-transition:enter-start="opacity-0 translate-y-1"
                                  x-transition:enter-end="opacity-100 translate-y-0"
                                  x-transition:leave="transition ease-out duration-200"
                                  x-transition:leave-start="opacity-100"
                                  x-transition:leave-end="opacity-0" x-cloak>
                                  Apply visual attributes to refine your designs and focus on relevant
                                  insights.
                              </div>
                          </div>
                        </div>
                        `
                      }}
                    ></div>
                  </div>
                </div>
                {/* <!-- Code Editor --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-5" aria-hidden="true">
                  <div className="py-4 text-sm border-b border-gray-200">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                        <div class="relative" x-data="{ open: false }">
                          <button
                              class="block text-left text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4 cursor-help"
                              aria-describedby="tooltip-04" @mouseenter="open = true"
                              @mouseleave="open = false" @focus="open = true" @focusout="open = false"
                              @click.prevent>
                              Code Editor
                          </button>
                          <div id="tooltip-04" role="tooltip" class="z-10 absolute top-full left-0">
                              <div class="w-[12.5rem] text-xs bg-gray-800 text-gray-200 border border-gray-200 p-2 rounded shadow-lg overflow-hidden mt-1"
                                  x-show="open"
                                  x-transition:enter="transition ease-out duration-200 transform"
                                  x-transition:enter-start="opacity-0 translate-y-1"
                                  x-transition:enter-end="opacity-100 translate-y-0"
                                  x-transition:leave="transition ease-out duration-200"
                                  x-transition:leave-start="opacity-100"
                                  x-transition:leave-end="opacity-0" x-cloak>
                                  Apply visual attributes to refine your designs and focus on relevant
                                  insights.
                              </div>
                          </div>
                        </div>
                        `
                      }}
                    ></div>
                  </div>
                </div>
                {/* <!-- # Hosting --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-6" aria-hidden="true">
                  <div className="font-bold mb-2 mt-5">Hosting</div>
                </div>
                {/* <!-- Bandwidth --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-7" aria-hidden="true">
                  <div className="py-4 text-sm border-b border-gray-200">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                         <div class="relative" x-data="{ open: false }">
                          <button
                              class="block text-left text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4 cursor-help"
                              aria-describedby="tooltip-06" @mouseenter="open = true"
                              @mouseleave="open = false" @focus="open = true" @focusout="open = false"
                              @click.prevent>
                              Bandwidth
                          </button>
                          <div id="tooltip-06" role="tooltip" class="z-10 absolute top-full left-0">
                              <div class="w-[12.5rem] text-xs bg-gray-800 text-gray-200 border border-gray-200 p-2 rounded shadow-lg overflow-hidden mt-1"
                                  x-show="open"
                                  x-transition:enter="transition ease-out duration-200 transform"
                                  x-transition:enter-start="opacity-0 translate-y-1"
                                  x-transition:enter-end="opacity-100 translate-y-0"
                                  x-transition:leave="transition ease-out duration-200"
                                  x-transition:leave-start="opacity-100"
                                  x-transition:leave-end="opacity-0" x-cloak>
                                  Apply visual attributes to refine your designs and focus on relevant
                                  insights.
                              </div>
                          </div>
                      </div>
                      `
                      }}
                    >
                    </div>
                  </div>
                </div>
                {/* <!-- Visitors --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-8" aria-hidden="true">
                  <div className="py-4 text-sm border-b border-gray-200">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                      <div class="relative" x-data="{ open: false }">
                        <button
                            class="block text-left text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4 cursor-help"
                            aria-describedby="tooltip-07" @mouseenter="open = true"
                            @mouseleave="open = false" @focus="open = true" @focusout="open = false"
                            @click.prevent>
                            Visitors
                        </button>
                        <div id="tooltip-07" role="tooltip" class="z-10 absolute top-full left-0">
                            <div class="w-[12.5rem] text-xs bg-gray-800 text-gray-200 border border-gray-200 p-2 rounded shadow-lg overflow-hidden mt-1"
                                x-show="open"
                                x-transition:enter="transition ease-out duration-200 transform"
                                x-transition:enter-start="opacity-0 translate-y-1"
                                x-transition:enter-end="opacity-100 translate-y-0"
                                x-transition:leave="transition ease-out duration-200"
                                x-transition:leave-start="opacity-100"
                                x-transition:leave-end="opacity-0" x-cloak>
                                Apply visual attributes to refine your designs and focus on relevant
                                insights.
                            </div>
                        </div>
                      </div>
                        `
                      }}
                    >
                    </div>
                  </div>
                </div>
                {/* <!-- Max Upload Size --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-9" aria-hidden="true">
                  <div className="py-4 text-sm border-b border-gray-200">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: ` 
                        <div class="relative" x-data="{ open: false }">
                          <button
                              class="block text-left text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4 cursor-help"
                              aria-describedby="tooltip-08" @mouseenter="open = true"
                              @mouseleave="open = false" @focus="open = true" @focusout="open = false"
                              @click.prevent>
                              Max Upload Size
                          </button>
                          <div id="tooltip-08" role="tooltip" class="z-10 absolute top-full left-0">
                              <div class="w-[12.5rem] text-xs bg-gray-800 text-gray-200 border border-gray-200 p-2 rounded shadow-lg overflow-hidden mt-1"
                                  x-show="open"
                                  x-transition:enter="transition ease-out duration-200 transform"
                                  x-transition:enter-start="opacity-0 translate-y-1"
                                  x-transition:enter-end="opacity-100 translate-y-0"
                                  x-transition:leave="transition ease-out duration-200"
                                  x-transition:leave-start="opacity-100"
                                  x-transition:leave-end="opacity-0" x-cloak>
                                  Apply visual attributes to refine your designs and focus on relevant
                                  insights.
                              </div>
                          </div>
                        </div>`
                      }}>
                    </div>
                  </div>
                </div>
                {/* <!-- SSL Certificate --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-10"
                  aria-hidden="true">
                  <div className="py-4 text-sm border-b border-gray-200">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                        <div class="relative" x-data="{ open: false }">
                          <button
                              class="block text-left text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4 cursor-help"
                              aria-describedby="tooltip-09" @mouseenter="open = true"
                              @mouseleave="open = false" @focus="open = true" @focusout="open = false"
                              @click.prevent>
                              SSL Certificate
                          </button>
                          <div id="tooltip-09" role="tooltip" class="z-10 absolute top-full left-0">
                              <div class="w-[12.5rem] text-xs bg-gray-800 text-gray-200 border border-gray-200 p-2 rounded shadow-lg overflow-hidden mt-1"
                                  x-show="open"
                                  x-transition:enter="transition ease-out duration-200 transform"
                                  x-transition:enter-start="opacity-0 translate-y-1"
                                  x-transition:enter-end="opacity-100 translate-y-0"
                                  x-transition:leave="transition ease-out duration-200"
                                  x-transition:leave-start="opacity-100"
                                  x-transition:leave-end="opacity-0" x-cloak>
                                  Apply visual attributes to refine your designs and focus on relevant
                                  insights.
                              </div>
                          </div>
                        </div>
                        `
                      }}
                    ></div>
                  </div>
                </div>
                {/* <!-- # Creation --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-11"
                  aria-hidden="true">
                  <div className="font-bold mb-2 mt-5">Creation</div>
                </div>
                {/* <!-- Created Words --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-12"
                  aria-hidden="true">
                  <div className="py-4 text-sm border-b border-gray-200">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                        <div class="relative" x-data="{ open: false }">
                          <button
                              class="block text-left text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4 cursor-help"
                              aria-describedby="tooltip-11" @mouseenter="open = true"
                              @mouseleave="open = false" @focus="open = true" @focusout="open = false"
                              @click.prevent>
                              Created Words
                          </button>
                          <div id="tooltip-11" role="tooltip" class="z-10 absolute top-full left-0">
                              <div class="w-[12.5rem] text-xs bg-gray-800 text-gray-200 border border-gray-200 p-2 rounded shadow-lg overflow-hidden mt-1"
                                  x-show="open"
                                  x-transition:enter="transition ease-out duration-200 transform"
                                  x-transition:enter-start="opacity-0 translate-y-1"
                                  x-transition:enter-end="opacity-100 translate-y-0"
                                  x-transition:leave="transition ease-out duration-200"
                                  x-transition:leave-start="opacity-100"
                                  x-transition:leave-end="opacity-0" x-cloak>
                                  Apply visual attributes to refine your designs and focus on relevant
                                  insights.
                              </div>
                          </div>
                        </div>`
                      }}
                    ></div>
                  </div>
                </div>
                {/* <!-- Team Projects --> */}
                <div className="px-6 flex flex-col justify-end max-md:hidden md:order-[13]"
                  aria-hidden="true">
                  <div className="py-4 text-sm border-b border-gray-200">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                          <div class="relative" x-data="{ open: false }">
                            <button
                                class="block text-left text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4 cursor-help"
                                aria-describedby="tooltip-12" @mouseenter="open = true"
                                @mouseleave="open = false" @focus="open = true" @focusout="open = false"
                                @click.prevent>
                                Team Projects
                            </button>
                            <div id="tooltip-12" role="tooltip" class="z-10 absolute top-full left-0">
                                <div class="w-[12.5rem] text-xs bg-gray-800 text-gray-200 border border-gray-200 p-2 rounded shadow-lg overflow-hidden mt-1"
                                    x-show="open"
                                    x-transition:enter="transition ease-out duration-200 transform"
                                    x-transition:enter-start="opacity-0 translate-y-1"
                                    x-transition:enter-end="opacity-100 translate-y-0"
                                    x-transition:leave="transition ease-out duration-200"
                                    x-transition:leave-start="opacity-100"
                                    x-transition:leave-end="opacity-0" x-cloak>
                                    Apply visual attributes to refine your designs and focus on relevant
                                    insights.
                                </div>
                            </div>
                          </div>
                        `
                      }}
                    ></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}