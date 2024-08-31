export default function Customers() {
  return (
    <>
      {/* <!-- Hero --> */}
      <section class="relative">
        {/* <!-- Stripes illustration --> */}
        <div
          class="absolute left-1/2 transform -translate-x-1/2 top-0 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <img
            class="max-w-none"
            src="./images/stripes.svg"
            width="768"
            height="432"
            alt="Stripes"
          />
        </div>

        {/* <!-- Circles --> */}
        <div
          class="absolute left-1/2 -translate-x-1/2 -top-32 ml-[580px] pointer-events-none"
          aria-hidden="true"
        >
          <div class="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-50 blur-[160px]"></div>
        </div>
        <div
          class="absolute left-1/2 -translate-x-1/2 top-[420px] ml-[380px] pointer-events-none"
          aria-hidden="true"
        >
          <div class="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]"></div>
        </div>
        <div
          class="absolute left-1/2 -translate-x-1/2 top-[640px] -ml-[300px] pointer-events-none"
          aria-hidden="true"
        >
          <div class="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]"></div>
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          {/* <!-- Main content --> */}
          <div class="max-w-3xl mx-auto pt-32 pb-12 md:pt-40 md:pb-20">
            {/* <!-- Section header --> */}
            <div class="text-center pb-10">
              <h1 class="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                Our wall of love
              </h1>
              <div class="max-w-3xl mx-auto">
                <p class="text-lg text-gray-700 mb-8">
                  Read and listen to what our customers are saying about Simple.
                </p>
                <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <a
                    class="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full mb-4 sm:w-auto sm:mb-0 group"
                    href="#0"
                  >
                    <span class="relative inline-flex items-center">
                      Share Your Testimonial{" "}
                      <span class="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform ml-1">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials --> */}
      <section>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pb-12 md:pb-20">
            {/* <!-- Testimonials grid --> */}
            <div
              class="grid sm:grid-cols-3 gap-4 md:gap-6 items-start"
              data-masonry
            >
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-01.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 01"
                    />
                    <div>
                      <div class="font-bold">Peter Lowe</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @peterlowex
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    Simple has revolutionized the way I manage my work. Its
                    intuitive interface and seamless functionality make staying
                    organized effortless. I can't imagine my life without it.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">May 19, 2027</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-02.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 02"
                    />
                    <div>
                      <div class="font-bold">Rodri Alba</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @rodri_spn
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    As a busy professional, Simple has been a lifesaver. It
                    streamlines my workflow, allowing me to focus on what truly
                    matters. Plus, its minimalist design is a breath of fresh
                    air in a cluttered digital world.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">May 19, 2027</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-03.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 03"
                    />
                    <div>
                      <div class="font-bold">Michele Lex</div>
                    </div>
                  </header>
                  {/* <!-- Rating --> */}
                  <div class="inline-flex mb-3">
                    <span class="sr-only">Rating is 5 out of 5</span>
                    <div class="relative">
                      <svg
                        class="fill-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="114"
                        height="18"
                      >
                        <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
                      </svg>
                      <div
                        class="absolute inset-0 overflow-hidden"
                        style={{ width: "100%" }}
                      >
                        <svg
                          class="fill-amber-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="114"
                          height="18"
                        >
                          <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="grow text-sm text-gray-700">
                    I run a nonprofit organization, and we needed a website to
                    share our mission and connect with donors. This tool allowed
                    us to create a visually appealing site that effectively
                    communicates our message.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                    >
                      <path d="M15.68 6.546H8.044v3.273h4.328c-.692 2.182-2.4 2.909-4.363 2.909a4.728 4.728 0 1 1 3.035-8.346l2.378-2.265A8 8 0 1 0 8.01 16.001c4.411 0 8.4-2.909 7.671-9.455Z" />
                    </svg>
                    <div class="text-xs">May 05, 2027</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-04.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 04"
                    />
                    <div>
                      <div class="font-bold">Michael Ross</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @michjack
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    I've struggled to find a website builder that suits my needs
                    until I found Simple. Its clean design and user-friendly
                    features make staying organized a breeze. I highly recommend
                    it.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Apr 12, 2027</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-05.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 05"
                    />
                    <div>
                      <div class="font-bold">Mike Bryan</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @mike0point7
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow">
                    <p class="font-semibold mb-4">
                      Simple's mind-blowing AI Site Builder: Crash Course 🚀
                    </p>
                    <img
                      class="w-full"
                      src="./images/video-testimonial-01.jpg"
                      width="312"
                      height="180"
                      alt="Video Testimonial 01"
                    />
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="13"
                      fill="none"
                    >
                      <path d="M16.044 3.416c-.178-1.303-.762-2.213-2.158-2.438C11.693.54 8.294.48 8.294.48s-3.4-.059-5.606.303C1.284.958.568 1.846.446 3.143.223 4.44.19 6.34.19 6.34s-.033 1.9.144 3.203c.178 1.303.762 2.214 2.158 2.438 2.193.438 5.592.498 5.592.498s3.4.059 5.606-.303c1.405-.275 2.02-1.065 2.242-2.36.223-1.297.256-3.197.256-3.197s.033-1.9-.144-3.203ZM6.137 9.444l.105-5.999 4.946 3.087-5.051 2.912Z" />
                    </svg>
                    <div class="text-xs">Mar 10, 2027</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-06.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 06"
                    />
                    <div>
                      <div class="font-bold">Sarah Rodriguez</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @sararodriguez
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    I was blown away by how easy it was to create my website
                    using this tool! Within a few hours, I had a
                    professional-looking site up and running, and my client
                    could not believe.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Feb 27, 2027</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-07.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 07"
                    />
                    <div>
                      <div class="font-bold">Duncan Mitch</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @lovingme_
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    Simple has simplified my life in more ways than one. From
                    managing my clients to keeping track of deadlines, it's
                    become my go-to tool for staying on top of everything. I
                    couldn't imagine managing without it!
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Feb 08, 2027</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-08.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 08"
                    />
                    <div>
                      <div class="font-bold">Kavisha Mills</div>
                    </div>
                  </header>
                  {/* <!-- Rating --> */}
                  <div class="inline-flex mb-3">
                    <span class="sr-only">Rating is 5 out of 5</span>
                    <div class="relative">
                      <svg
                        class="fill-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="114"
                        height="18"
                      >
                        <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
                      </svg>
                      <div
                        class="absolute inset-0 overflow-hidden"
                        style={{ width: "100%" }}
                      >
                        <svg
                          class="fill-amber-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="114"
                          height="18"
                        >
                          <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="grow text-sm text-gray-700">
                    I'm a freelancer, and having a professional website is
                    crucial for attracting clients. This tool not only helped me
                    create a beautiful portfolio but also boosted my visibility.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                    >
                      <path d="M15.68 6.546H8.044v3.273h4.328c-.692 2.182-2.4 2.909-4.363 2.909a4.728 4.728 0 1 1 3.035-8.346l2.378-2.265A8 8 0 1 0 8.01 16.001c4.411 0 8.4-2.909 7.671-9.455Z" />
                    </svg>
                    <div class="text-xs">Jan 29, 2027</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-09.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 09"
                    />
                    <div>
                      <div class="font-bold">Dante Luzzi</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @dante1987
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    I've never been a fan of complicated website builders, which
                    is why Simple is perfect for me. Its minimalist design and
                    straightforward functionality make staying organized feel
                    like second nature.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Jan 02, 2027</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-12.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 12"
                    />
                    <div>
                      <div class="font-bold">Erica Rossi</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @ericaita_7
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    I'm a freelancer, and having a professional website is
                    crucial for attracting clients. This tool not only helped me
                    create a beautiful portfolio but also boosted my visibility
                    online. I couldn't be happier with the results!
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Dec 25, 2026</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-13.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 13"
                    />
                    <div>
                      <div class="font-bold">Emma Riekwel</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @jonnoriek
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    I'm a freelancer, and having a professional website is
                    crucial for attracting clients. This tool not only helped me
                    create a beautiful portfolio but also boosted my visibility
                    online. I couldn't be happier with the results!
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Dec 14, 2026</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-11.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 11"
                    />
                    <div>
                      <div class="font-bold">Jeff Broderick</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @jeff_br
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    I'm a designer, and I wanted a website that would showcase
                    my work beautifully. This tool exceeded my expectations with
                    its stunning gallery options and seamless integration with
                    social media platforms. I've received so many compliments on
                    my portfolio - thank you!
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Feb 27, 2027</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-15.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 15"
                    />
                    <div>
                      <div class="font-bold">Mariana Castilho</div>
                    </div>
                  </header>
                  {/* <!-- Rating --> */}
                  <div class="inline-flex mb-3">
                    <span class="sr-only">Rating is 5 out of 5</span>
                    <div class="relative">
                      <svg
                        class="fill-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="114"
                        height="18"
                      >
                        <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
                      </svg>
                      <div
                        class="absolute inset-0 overflow-hidden"
                        style={{ width: "100%" }}
                      >
                        <svg
                          class="fill-amber-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="114"
                          height="18"
                        >
                          <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="grow text-sm text-gray-700">
                    I've never been one for coding, so finding a website builder
                    that didn't require any technical skills was a dream come
                    true. This tool exceeded my expectations, and I'm proud to
                    show off my new site to friends.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                    >
                      <path d="M15.68 6.546H8.044v3.273h4.328c-.692 2.182-2.4 2.909-4.363 2.909a4.728 4.728 0 1 1 3.035-8.346l2.378-2.265A8 8 0 1 0 8.01 16.001c4.411 0 8.4-2.909 7.671-9.455Z" />
                    </svg>
                    <div class="text-xs">Nov 29, 2026</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-10.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 10"
                    />
                    <div>
                      <div class="font-bold">Keith Kennedy</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @keithyeah
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    Simple has simplified my life in more ways than one. From
                    managing my clients to keeping track of deadlines, it's
                    become my go-to tool for staying on top of everything. I
                    couldn't imagine managing without it!
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Feb 11, 2026</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-14.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 14"
                    />
                    <div>
                      <div class="font-bold">Kate Stevanovic</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @hey_im_kate
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow">
                    <p class="font-semibold mb-4">
                      Simple's mind-blowing AI Site Builder: Crash Course 🚀
                    </p>
                    <img
                      class="w-full"
                      src="./images/video-testimonial-02.jpg"
                      width="312"
                      height="180"
                      alt="Video Testimonial 02"
                    />
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="13"
                      fill="none"
                    >
                      <path d="M16.044 3.416c-.178-1.303-.762-2.213-2.158-2.438C11.693.54 8.294.48 8.294.48s-3.4-.059-5.606.303C1.284.958.568 1.846.446 3.143.223 4.44.19 6.34.19 6.34s-.033 1.9.144 3.203c.178 1.303.762 2.214 2.158 2.438 2.193.438 5.592.498 5.592.498s3.4.059 5.606-.303c1.405-.275 2.02-1.065 2.242-2.36.223-1.297.256-3.197.256-3.197s.033-1.9-.144-3.203ZM6.137 9.444l.105-5.999 4.946 3.087-5.051 2.912Z" />
                    </svg>
                    <div class="text-xs">Dec 14, 2026</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-16.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 16"
                    />
                    <div>
                      <div class="font-bold">Rodri Alba</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @rodri_spn
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    As a founder, having a visually appealing and user-friendly
                    website is essential. This tool not only helped me achieve
                    that but also improved my site's performance and SEO.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Oct 20, 2026</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-17.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 17"
                    />
                    <div>
                      <div class="font-bold">Miguel Liverani</div>
                    </div>
                  </header>
                  {/* <!-- Rating --> */}
                  <div class="inline-flex mb-3">
                    <span class="sr-only">Rating is 5 out of 5</span>
                    <div class="relative">
                      <svg
                        class="fill-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="114"
                        height="18"
                      >
                        <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
                      </svg>
                      <div
                        class="absolute inset-0 overflow-hidden"
                        style={{ width: "100%" }}
                      >
                        <svg
                          class="fill-amber-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="114"
                          height="18"
                        >
                          <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="grow text-sm text-gray-700">
                    I'm not tech-savvy at all, but this tool made me feel like a
                    pro web designer! The step-by-step guides and tutorials were
                    incredibly helpful, and I never felt overwhelmed. I've
                    already recommended it to all my friends who are looking to
                    build their own websites.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                    >
                      <path d="M15.68 6.546H8.044v3.273h4.328c-.692 2.182-2.4 2.909-4.363 2.909a4.728 4.728 0 1 1 3.035-8.346l2.378-2.265A8 8 0 1 0 8.01 16.001c4.411 0 8.4-2.909 7.671-9.455Z" />
                    </svg>
                    <div class="text-xs">Nov 29, 2026</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-18.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 18"
                    />
                    <div>
                      <div class="font-bold">Helena Gynn</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @helena_88
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    I'm a designer, and I wanted a website that would showcase
                    my work beautifully. This tool exceeded my expectations with
                    its stunning gallery options and seamless integration with
                    social media platforms. I've received so many compliments on
                    my portfolio - thank you!
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Feb 21, 2026</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-19.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 19"
                    />
                    <div>
                      <div class="font-bold">James Kenny</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @jameskenny
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    After struggling with other website builders, I stumbled
                    upon this gem, and I'm thrilled I did! The templates are
                    modern, the customization options are endless, and the
                    support team is incredibly helpful.
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">May 08, 2026</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-21.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 21"
                    />
                    <div>
                      <div class="font-bold">Sarah Ferguson</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @sarah_rose
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    I needed a website for my personal brand, and this tool
                    helped me bring my vision to life. The customization options
                    allowed me to create a site that perfectly reflects my style
                    and personality. I've received so many compliments on the
                    design - thank you!
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Mar 01, 2026</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-22.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 22"
                    />
                    <div>
                      <div class="font-bold">Christopher Rossi</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @yo_chris
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    I recently switched from another website builder to this
                    one, and I couldn't be happier with my decision. The
                    migration process was seamless, and the transition was
                    practically effortless. Plus, the new features and updates
                    have made a world of difference!
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Jun 20, 2026</div>
                  </footer>
                </article>
              </div>
              <div class="group">
                <article class="relative flex flex-col rounded-2xl w-full p-5 shadow-lg md:group-odd:-rotate-1 md:group-even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <header class="flex items-center gap-3 mb-4">
                    <img
                      class="shrink-0 rounded-full"
                      src="./images/testimonial-20.jpg"
                      width="44"
                      height="44"
                      alt="Testimonial 20"
                    />
                    <div>
                      <div class="font-bold">Kimberly Rutz</div>
                      <div>
                        <a
                          class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                          href="#0"
                        >
                          @imkimberly
                        </a>
                      </div>
                    </div>
                  </header>
                  <div class="grow text-sm text-gray-700">
                    I've been searching for a website builder that offers both
                    functionality and affordability, and I finally found it with
                    this tool. Can't recommend it enough!
                  </div>
                  <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                      />
                    </svg>
                    <div class="text-xs">Feb 16, 2026</div>
                  </footer>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- CTA --> */}
      <section class="relative">
        <div
          class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full -z-10"
          aria-hidden="true"
        >
          <div class="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px]"></div>
        </div>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="text-center border-t [border-image:linear-gradient(to_right,transparent,theme(colors.blue.500/.25),transparent)1]">
            <div class="py-12 md:py-20">
              <h2 class="text-3xl md:text-4xl font-bold mb-6 md:mb-12">
                Create your next project with Simple
              </h2>
              <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <a
                  class="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full mb-4 sm:w-auto sm:mb-0 group"
                  href="#0"
                >
                  <span class="relative inline-flex items-center">
                    Start Free Trial{" "}
                    <span class="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform ml-1">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
