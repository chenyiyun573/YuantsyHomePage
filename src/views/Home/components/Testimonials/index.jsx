export default function Testimonials() {
  return (
    <>
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
                <!-- Item #1 -->
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
                <!-- Item #2 -->
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
                <!-- Item #3 -->
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
                <!-- Item #4 -->
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
    </>
  )
}