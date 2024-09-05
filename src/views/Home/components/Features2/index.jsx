export default function Features2() {
  return (
    <>
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
              <p className="text-lg text-gray-700">Revolutionize your search experience with Retrieval-Augmented Generation (RAG)</p>
            </div>

            <div className="flex justify-center mt-12">
              <form action="https://search.yuantsy.com" method="get" className="flex items-center space-x-4">
                <input
                  type="text"
                  name="q"
                  placeholder="Search Yuantsy RAG..."
                  className="w-full max-w-md px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Search
                </button>
              </form>
            </div>


            {/* <!-- Grid --> */}
            <div className="grid lg:grid-cols-3 overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1] [&>*]:p-6 md:[&>*]:px-10 md:[&>*]:py-12 [&>*]:relative [&>*]:before:absolute [&>*]:before:bg-gradient-to-b [&>*]:before:from-transparent [&>*]:before:via-gray-200 [&>*]:before:[block-size:100%] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-inline-start:-1px] [&>*]:before:[inset-block-start:0]">
              <article>
                <h3 className="font-medium flex items-center space-x-2 mb-2">
                  <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="m15.447 6.605-.673-.336a6.973 6.973 0 0 0-.761-1.834l.238-.715a.999.999 0 0 0-.242-1.023l-.707-.707a.995.995 0 0 0-1.023-.242l-.715.238a6.96 6.96 0 0 0-1.834-.761L9.394.552A1 1 0 0 0 8.5-.001h-1c-.379 0-.725.214-.895.553l-.336.673a6.973 6.973 0 0 0-1.834.761l-.715-.238a.997.997 0 0 0-1.023.242l-.707.707a1.001 1.001 0 0 0-.242 1.023l.238.715a6.959 6.959 0 0 0-.761 1.834l-.673.336a1 1 0 0 0-.553.895v1c0 .379.214.725.553.895l.673.336c.167.653.425 1.268.761 1.834l-.238.715a.999.999 0 0 0 .242 1.023l.707.707a.997.997 0 0 0 1.023.242l.715-.238a6.959 6.959 0 0 0 1.834.761l.336.673a1 1 0 0 0 .895.553h1c.379 0 .725-.214.895-.553l.336-.673a6.973 6.973 0 0 0 1.834-.761l.715.238a1.001 1.001 0 0 0 1.023-.242l.707-.707c.268-.268.361-.664.242-1.023l-.238-.715a6.959 6.959 0 0 0 .761-1.834l.673-.336A1 1 0 0 0 16 8.5v-1c0-.379-.214-.725-.553-.895ZM8 13a5 5 0 1 1 .001-10.001 5 5 0 0 1 0 10.001Z" />
                  </svg>
                  <span>Smart Retrieval</span>
                </h3>
                <p className="text-[15px] text-gray-700">Combine cutting-edge AI with traditional search to find the most relevant and accurate information.</p>
              </article>
              <article>
                <h3 className="font-medium flex items-center space-x-2 mb-2">
                  <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="12">
                    <path d="M2 0a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H2Zm0 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm1-3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H3Z" />
                  </svg>
                  <span>Context-Aware</span>
                </h3>
                <p className="text-[15px] text-gray-700">Understands your queries better by integrating vast knowledge bases with real-time data.</p>
              </article>
              <article>
                <h3 className="font-medium flex items-center space-x-2 mb-2">
                  <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M14.75 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM2.5 14.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM1.25 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z" />
                  </svg>
                  <span>Enhanced Accuracy</span>
                </h3>
                <p className="text-[15px] text-gray-700">Delivers precise and comprehensive answers, optimizing decision-making processes.</p>
              </article>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}