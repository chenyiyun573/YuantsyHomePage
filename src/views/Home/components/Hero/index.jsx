const Hero = () => {
  return (
    <>
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
    </>
  )
}

export default Hero