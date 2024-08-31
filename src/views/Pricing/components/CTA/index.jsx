export default function CTA() {
  return (
    <>
      {/* <!-- CTA --> */}
      <section className="relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full -z-10"
          aria-hidden="true"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px]"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center border-t [border-image:linear-gradient(to_right,transparent,theme(colors.blue.500/.25),transparent)1]">
            <div className="py-12 md:py-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12">
                Create your next project with Simple
              </h2>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <a
                  className="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full mb-4 sm:w-auto sm:mb-0 group"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Start Free Trial
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform ml-1">
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
