export default function FAQs() {
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="max-w-3xl mx-auto space-y-12">
              {/* <!-- Getting started --> */}
              <div>
                <h2 className="text-xl font-bold mb-5">Getting Started</h2>
                <div className="space-y-2">
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                      <!-- Accordion item -->
                      <div
                        x-data="{ expanded: false }"
                        class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                      >
                        <h2>
                          <button id="faqs-title-01" class="flex items-center justify-between w-full font-semibold text-left px-4 py-3" @click="expanded = !expanded" :aria-expanded="expanded" aria-controls="faqs-text-01">
                            <span>Getting started with Simple</span>
                            <span class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8">
                              <svg class="fill-gray-400 transform origin-center transition duration-200 ease-out" :class="{'!rotate-180': expanded}" xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none">
                                <path d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z" clip-rule="evenodd" />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="faqs-text-01"
                          role="region"
                          aria-labelledby="faqs-title-01"
                          class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                          :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                        >
                          <div class="overflow-hidden">
                            <p class="px-4 pb-3">
                              Simple is designed to be user-friendly and intuitive, while Complex is more robust and feature-rich. Both tools are great for creating websites, but Simple is ideal for beginners and small businesses, while Complex is better
                              suited for larger organizations and developers.
                            </p>
                          </div>
                        </div>
                      </div>
                      `,
                    }}
                  ></div>
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                      <!-- Accordion item -->
                      <div
                        x-data="{ expanded: false }"
                        class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                      >
                        <h2>
                          <button id="faqs-title-02" class="flex items-center justify-between w-full font-semibold text-left px-4 py-3" @click="expanded = !expanded" :aria-expanded="expanded" aria-controls="faqs-text-02">
                            <span>Promotional and free plan trials</span>
                            <span class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8">
                              <svg class="fill-gray-400 transform origin-center transition duration-200 ease-out" :class="{'!rotate-180': expanded}" xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none">
                                <path d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z" clip-rule="evenodd" />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="faqs-text-02"
                          role="region"
                          aria-labelledby="faqs-title-02"
                          class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                          :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                        >
                          <div class="overflow-hidden">
                            <p class="px-4 pb-3">
                              Yes, but you'll still pay the remainder of the term for the plan you signed up for.
                            </p>
                          </div>
                        </div>
                      </div>
                      `,
                    }}
                  ></div>
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                      <!-- Accordion item -->
                      <div
                        x-data="{ expanded: false }"
                        class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                      >
                        <h2>
                          <button id="faqs-title-03" class="flex items-center justify-between w-full font-semibold text-left px-4 py-3" @click="expanded = !expanded" :aria-expanded="expanded" aria-controls="faqs-text-03">
                            <span>I'm unable to verify my account</span>
                            <span class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8">
                              <svg class="fill-gray-400 transform origin-center transition duration-200 ease-out" :class="{'!rotate-180': expanded}" xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none">
                                <path d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z" clip-rule="evenodd" />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="faqs-text-03"
                          role="region"
                          aria-labelledby="faqs-title-03"
                          class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                          :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                        >
                          <div class="overflow-hidden">
                            <p class="px-4 pb-3">
                              Yes, but you'll still pay the remainder of the term for the plan you signed up for.
                            </p>
                          </div>
                        </div>
                      </div>
                      `,
                    }}
                  ></div>
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                     <!-- Accordion item -->
                      <div
                        x-data="{ expanded: false }"
                        class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                      >
                        <h2>
                          <button id="faqs-title-04" class="flex items-center justify-between w-full font-semibold text-left px-4 py-3" @click="expanded = !expanded" :aria-expanded="expanded" aria-controls="faqs-text-04">
                            <span>Copyright (DMCA) Takedown Notice</span>
                            <span class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8">
                              <svg class="fill-gray-400 transform origin-center transition duration-200 ease-out" :class="{'!rotate-180': expanded}" xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none">
                                <path d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z" clip-rule="evenodd" />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="faqs-text-04"
                          role="region"
                          aria-labelledby="faqs-title-04"
                          class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                          :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                        >
                          <div class="overflow-hidden">
                            <p class="px-4 pb-3">
                              Support is available 24/7 via email, chat, and phone. We're here to help you with any questions or concerns you may have.
                            </p>
                          </div>
                        </div>
                      </div>
                      `,
                    }}
                  ></div>
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                      <!-- Accordion item -->
                      <div
                        x-data="{ expanded: false }"
                        class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                      >
                        <h2>
                          <button id="faqs-title-05" class="flex items-center justify-between w-full font-semibold text-left px-4 py-3" @click="expanded = !expanded" :aria-expanded="expanded" aria-controls="faqs-text-05">
                            <span>How to report an unrecognized charge</span>
                            <span class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8">
                              <svg class="fill-gray-400 transform origin-center transition duration-200 ease-out" :class="{'!rotate-180': expanded}" xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none">
                                <path d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z" clip-rule="evenodd" />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="faqs-text-05"
                          role="region"
                          aria-labelledby="faqs-title-05"
                          class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                          :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                        >
                          <div class="overflow-hidden">
                            <p class="px-4 pb-3">
                              Yes! You can invite clients or coworkers to collaborate on your projects, and they can upload their own content.
                            </p>
                          </div>
                        </div>
                      </div>
                      `,
                    }}
                  ></div>
                </div>
              </div>
              {/* <!-- Profile & plans --> */}
              <div>
                <h2 className="text-xl font-bold mb-5">Profile & plans</h2>
                <div className="space-y-2">
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                    <!-- Accordion item -->
                    <div
                      x-data="{ expanded: false }"
                      class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                    >
                      <h2>
                        <button
                          id="faqs-title-06"
                          class="flex items-center justify-between w-full font-semibold text-left px-4 py-3"
                          @click="expanded = !expanded"
                          :aria-expanded="expanded"
                          aria-controls="faqs-text-06"
                        >
                          <span>Change with my paid plan</span>
                          <span
                            class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8"
                          >
                            <svg
                              class="fill-gray-400 transform origin-center transition duration-200 ease-out"
                              :class="{'!rotate-180': expanded}"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="6"
                              fill="none"
                            >
                              <path
                                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="faqs-text-01"
                        role="region"
                        aria-labelledby="faqs-title-01"
                        class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                        :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                      >
                        <div class="overflow-hidden">
                          <p class="px-4 pb-3">
                            Simple is designed to be user-friendly and
                            intuitive, while Complex is more robust and
                            feature-rich. Both tools are great for creating
                            websites, but Simple is ideal for beginners and
                            small businesses, while Complex is better suited for
                            larger organizations and developers.
                          </p>
                        </div>
                      </div>
                    </div>`,
                    }}
                  ></div>
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                    <!-- Accordion item -->
                    <div
                      x-data="{ expanded: false }"
                      class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                    >
                      <h2>
                        <button
                          id="faqs-title-07"
                          class="flex items-center justify-between w-full font-semibold text-left px-4 py-3"
                          @click="expanded = !expanded"
                          :aria-expanded="expanded"
                          aria-controls="faqs-text-07"
                        >
                          <span>Cancel my subscription</span>
                          <span
                            class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8"
                          >
                            <svg
                              class="fill-gray-400 transform origin-center transition duration-200 ease-out"
                              :class="{'!rotate-180': expanded}"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="6"
                              fill="none"
                            >
                              <path
                                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="faqs-text-02"
                        role="region"
                        aria-labelledby="faqs-title-02"
                        class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                        :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                      >
                        <div class="overflow-hidden">
                          <p class="px-4 pb-3">
                            Yes, but you'll still pay the remainder of the term
                            for the plan you signed up for.
                          </p>
                        </div>
                      </div>
                    </div>`,
                    }}
                  ></div>
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                    <!-- Accordion item -->
                    <div
                      x-data="{ expanded: false }"
                      class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                    >
                      <h2>
                        <button
                          id="faqs-title-08"
                          class="flex items-center justify-between w-full font-semibold text-left px-4 py-3"
                          @click="expanded = !expanded"
                          :aria-expanded="expanded"
                          aria-controls="faqs-text-08"
                        >
                          <span>I am unable to edit my profile</span>
                          <span
                            class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8"
                          >
                            <svg
                              class="fill-gray-400 transform origin-center transition duration-200 ease-out"
                              :class="{'!rotate-180': expanded}"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="6"
                              fill="none"
                            >
                              <path
                                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="faqs-text-03"
                        role="region"
                        aria-labelledby="faqs-title-03"
                        class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                        :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                      >
                        <div class="overflow-hidden">
                          <p class="px-4 pb-3">
                            Yes, but you'll still pay the remainder of the term
                            for the plan you signed up for.
                          </p>
                        </div>
                      </div>
                    </div>`,
                    }}
                  ></div>
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                    <!-- Accordion item -->
                    <div
                      x-data="{ expanded: false }"
                      class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                    >
                      <h2>
                        <button
                          id="faqs-title-09"
                          class="flex items-center justify-between w-full font-semibold text-left px-4 py-3"
                          @click="expanded = !expanded"
                          :aria-expanded="expanded"
                          aria-controls="faqs-text-09"
                        >
                          <span>How to delete my account</span>
                          <span
                            class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8"
                          >
                            <svg
                              class="fill-gray-400 transform origin-center transition duration-200 ease-out"
                              :class="{'!rotate-180': expanded}"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="6"
                              fill="none"
                            >
                              <path
                                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="faqs-text-04"
                        role="region"
                        aria-labelledby="faqs-title-04"
                        class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                        :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                      >
                        <div class="overflow-hidden">
                          <p class="px-4 pb-3">
                            Support is available 24/7 via email, chat, and
                            phone. We're here to help you with any questions or
                            concerns you may have.
                          </p>
                        </div>
                      </div>
                    </div>`,
                    }}
                  ></div>
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                    <!-- Accordion item -->
                    <div
                      x-data="{ expanded: false }"
                      class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                    >
                      <h2>
                        <button
                          id="faqs-title-10"
                          class="flex items-center justify-between w-full font-semibold text-left px-4 py-3"
                          @click="expanded = !expanded"
                          :aria-expanded="expanded"
                          aria-controls="faqs-text-10"
                        >
                          <span>How to reach customer support</span>
                          <span
                            class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8"
                          >
                            <svg
                              class="fill-gray-400 transform origin-center transition duration-200 ease-out"
                              :class="{'!rotate-180': expanded}"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="6"
                              fill="none"
                            >
                              <path
                                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="faqs-text-05"
                        role="region"
                        aria-labelledby="faqs-title-05"
                        class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                        :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                      >
                        <div class="overflow-hidden">
                          <p class="px-4 pb-3">
                            Yes! You can invite clients or coworkers to
                            collaborate on your projects, and they can upload
                            their own content.
                          </p>
                        </div>
                      </div>
                    </div>`,
                    }}
                  ></div>
                </div>
              </div>
              {/* <!-- Accounts --> */}
              <div>
                <h2 className="text-xl font-bold mb-5">Accounts</h2>
                <div className="space-y-2">
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                    <!-- Accordion item -->
                    <div
                      x-data="{ expanded: false }"
                      class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                    >
                      <h2>
                        <button
                          id="faqs-title-11"
                          class="flex items-center justify-between w-full font-semibold text-left px-4 py-3"
                          @click="expanded = !expanded"
                          :aria-expanded="expanded"
                          aria-controls="faqs-text-11"
                        >
                          <span>Getting started with Simple</span>
                          <span
                            class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8"
                          >
                            <svg
                              class="fill-gray-400 transform origin-center transition duration-200 ease-out"
                              :class="{'!rotate-180': expanded}"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="6"
                              fill="none"
                            >
                              <path
                                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="faqs-text-01"
                        role="region"
                        aria-labelledby="faqs-title-01"
                        class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                        :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                      >
                        <div class="overflow-hidden">
                          <p class="px-4 pb-3">
                            Simple is designed to be user-friendly and
                            intuitive, while Complex is more robust and
                            feature-rich. Both tools are great for creating
                            websites, but Simple is ideal for beginners and
                            small businesses, while Complex is better suited for
                            larger organizations and developers.
                          </p>
                        </div>
                      </div>
                    </div>
                    `,
                    }}
                  ></div>
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                    <!-- Accordion item -->
                    <div
                      x-data="{ expanded: false }"
                      class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                    >
                      <h2>
                        <button
                          id="faqs-title-12"
                          class="flex items-center justify-between w-full font-semibold text-left px-4 py-3"
                          @click="expanded = !expanded"
                          :aria-expanded="expanded"
                          aria-controls="faqs-text-12"
                        >
                          <span>Promotional and free plan trials</span>
                          <span
                            class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8"
                          >
                            <svg
                              class="fill-gray-400 transform origin-center transition duration-200 ease-out"
                              :class="{'!rotate-180': expanded}"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="6"
                              fill="none"
                            >
                              <path
                                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="faqs-text-02"
                        role="region"
                        aria-labelledby="faqs-title-02"
                        class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                        :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                      >
                        <div class="overflow-hidden">
                          <p class="px-4 pb-3">
                            Yes, but you'll still pay the remainder of the term
                            for the plan you signed up for.
                          </p>
                        </div>
                      </div>
                    </div>
                    `,
                    }}
                  ></div>
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                    <!-- Accordion item -->
                    <div
                      x-data="{ expanded: false }"
                      class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                    >
                      <h2>
                        <button
                          id="faqs-title-13"
                          class="flex items-center justify-between w-full font-semibold text-left px-4 py-3"
                          @click="expanded = !expanded"
                          :aria-expanded="expanded"
                          aria-controls="faqs-text-13"
                        >
                          <span>I'm unable to verify my account</span>
                          <span
                            class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8"
                          >
                            <svg
                              class="fill-gray-400 transform origin-center transition duration-200 ease-out"
                              :class="{'!rotate-180': expanded}"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="6"
                              fill="none"
                            >
                              <path
                                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="faqs-text-03"
                        role="region"
                        aria-labelledby="faqs-title-03"
                        class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                        :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                      >
                        <div class="overflow-hidden">
                          <p class="px-4 pb-3">
                            Yes, but you'll still pay the remainder of the term
                            for the plan you signed up for.
                          </p>
                        </div>
                      </div>
                    </div>
                    `,
                    }}
                  ></div>
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                    <!-- Accordion item -->
                    <div
                      x-data="{ expanded: false }"
                      class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                    >
                      <h2>
                        <button
                          id="faqs-title-14"
                          class="flex items-center justify-between w-full font-semibold text-left px-4 py-3"
                          @click="expanded = !expanded"
                          :aria-expanded="expanded"
                          aria-controls="faqs-text-14"
                        >
                          <span>Copyright (DMCA) Takedown Notice</span>
                          <span
                            class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8"
                          >
                            <svg
                              class="fill-gray-400 transform origin-center transition duration-200 ease-out"
                              :class="{'!rotate-180': expanded}"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="6"
                              fill="none"
                            >
                              <path
                                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="faqs-text-04"
                        role="region"
                        aria-labelledby="faqs-title-04"
                        class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                        :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                      >
                        <div class="overflow-hidden">
                          <p class="px-4 pb-3">
                            Support is available 24/7 via email, chat, and
                            phone. We're here to help you with any questions or
                            concerns you may have.
                          </p>
                        </div>
                      </div>
                    </div>
                    `,
                    }}
                  ></div>
                  {/* <!-- Accordion item --> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                    <!-- Accordion item -->
                    <div
                      x-data="{ expanded: false }"
                      class="relative bg-white/70 shadow-lg shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
                    >
                      <h2>
                        <button
                          id="faqs-title-15"
                          class="flex items-center justify-between w-full font-semibold text-left px-4 py-3"
                          @click="expanded = !expanded"
                          :aria-expanded="expanded"
                          aria-controls="faqs-text-15"
                        >
                          <span>How to report an unrecognized charge</span>
                          <span
                            class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8"
                          >
                            <svg
                              class="fill-gray-400 transform origin-center transition duration-200 ease-out"
                              :class="{'!rotate-180': expanded}"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="6"
                              fill="none"
                            >
                              <path
                                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="faqs-text-05"
                        role="region"
                        aria-labelledby="faqs-title-05"
                        class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
                        :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                      >
                        <div class="overflow-hidden">
                          <p class="px-4 pb-3">
                            Yes! You can invite clients or coworkers to
                            collaborate on your projects, and they can upload
                            their own content.
                          </p>
                        </div>
                      </div>
                    </div>
                    `,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
