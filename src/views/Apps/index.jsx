export default function Apps() {
  return (
    <>
      {/* <!-- Hero --> */}
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
          <div className="max-w-3xl mx-auto pt-32 pb-10 md:pt-40">
            {/* <!-- Section header --> */}
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                Apps & Extensions
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700">
                  Enhance your projects with our professionally-built app
                  extensions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Cards --> */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* <!-- Categories --> */}
          <div className="pb-12 md:pb-20">
            <div className="flex flex-wrap justify-center gap-2">
              <button className="btn-sm font-normal text-gray-200 bg-gray-800 hover:bg-gray-900 shadow">
                <svg
                  className="fill-gray-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M6.669.715a1 1 0 0 1-.673 1.244 6.014 6.014 0 0 0-4.037 4.037 1 1 0 0 1-1.917-.571A8.014 8.014 0 0 1 5.425.042a1 1 0 0 1 1.244.673ZM7.71 4.71a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM9.996.042a1 1 0 1 0-.57 1.917 6.014 6.014 0 0 1 4.037 4.037 1 1 0 0 0 1.917-.571A8.015 8.015 0 0 0 9.996.042Zm4.71 8.71a1 1 0 0 1 .674 1.243 8.015 8.015 0 0 1-5.384 5.384 1 1 0 0 1-.57-1.917 6.014 6.014 0 0 0 4.037-4.037 1 1 0 0 1 1.243-.673ZM1.96 9.425a1 1 0 1 0-1.917.57 8.014 8.014 0 0 0 5.383 5.384 1 1 0 0 0 .57-1.917A6.014 6.014 0 0 1 1.96 9.425Z" />
                </svg>
                All
              </button>
              <button className="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">
                <svg
                  className="fill-gray-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M2 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H2Zm0 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Zm1-3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H3Z" />
                </svg>
                Layout & Design
              </button>
              <button className="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">
                <svg
                  className="fill-gray-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="m15.447 6.605-.673-.336a6.973 6.973 0 0 0-.761-1.834l.238-.715a.999.999 0 0 0-.242-1.023l-.707-.707a.995.995 0 0 0-1.023-.242l-.715.238a6.96 6.96 0 0 0-1.834-.761L9.394.552A1 1 0 0 0 8.5-.001h-1c-.379 0-.725.214-.895.553l-.336.673a6.973 6.973 0 0 0-1.834.761l-.715-.238a.997.997 0 0 0-1.023.242l-.707.707a1.001 1.001 0 0 0-.242 1.023l.238.715a6.959 6.959 0 0 0-.761 1.834l-.673.336a1 1 0 0 0-.553.895v1c0 .379.214.725.553.895l.673.336c.167.653.425 1.268.761 1.834l-.238.715a.999.999 0 0 0 .242 1.023l.707.707a.997.997 0 0 0 1.023.242l.715-.238a6.959 6.959 0 0 0 1.834.761l.336.673a1 1 0 0 0 .895.553h1c.379 0 .725-.214.895-.553l.336-.673a6.973 6.973 0 0 0 1.834-.761l.715.238a1.001 1.001 0 0 0 1.023-.242l.707-.707c.268-.268.361-.664.242-1.023l-.238-.715a6.959 6.959 0 0 0 .761-1.834l.673-.336A1 1 0 0 0 16 8.5v-1c0-.379-.214-.725-.553-.895ZM8 13a5 5 0 1 1 .001-10.001 5 5 0 0 1 0 10.001Z" />
                </svg>
                Productivity
              </button>
              <button className="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">
                <svg
                  className="fill-gray-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M0 6a6 6 0 0 1 6-6c1.077 0 2.062.304 2.912.78a1 1 0 1 1-.976 1.745A3.945 3.945 0 0 0 6 2a4 4 0 0 0-4 4c0 .693.194 1.344.525 1.936a1 1 0 1 1-1.746.976A5.944 5.944 0 0 1 0 6Z" />
                  <path d="M10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" />
                </svg>
                Effects
              </button>
              <button className="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">
                <svg
                  className="fill-gray-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H2Z" />
                </svg>
                Domains
              </button>
              <button className="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">
                <svg
                  className="fill-gray-400 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M14.75 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM2.5 14.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM1.25 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z" />
                </svg>
                Commerce
              </button>
            </div>
          </div>

          <div className="space-y-10">
            {/* <!-- Section #1 --> */}
            <section>
              <div className="flex justify-between items-center space-x-2 mb-5">
                <h2 className="font-bold text-xl truncate">Noteworthy</h2>
                <a
                  className="shrink-0 text-sm font-medium text-blue-500 hover:text-blue-600 transition"
                  href="#0"
                >
                  View All
                </a>
              </div>
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-01.svg"
                        width="48"
                        height="48"
                        alt="Icon 01"
                      />
                      <img
                        className="absolute top-0 right-0"
                        src="./images/badge.svg"
                        width="16"
                        height="16"
                        alt="Badge"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Google Drive
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-02.svg"
                        width="48"
                        height="48"
                        alt="Icon 02"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Linear
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-03.svg"
                        width="48"
                        height="48"
                        alt="Icon 03"
                      />
                      <img
                        className="absolute top-0 right-0"
                        src="./images/badge.svg"
                        width="16"
                        height="16"
                        alt="Badge"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Framer
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-04.svg"
                        width="48"
                        height="48"
                        alt="Icon 04"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Retool
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-05.svg"
                        width="48"
                        height="48"
                        alt="Icon 05"
                      />
                      <img
                        className="absolute top-0 right-0"
                        src="./images/badge.svg"
                        width="16"
                        height="16"
                        alt="Badge"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Webflow
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-06.svg"
                        width="48"
                        height="48"
                        alt="Icon 06"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Syrus Inc.
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-07.svg"
                        width="48"
                        height="48"
                        alt="Icon 07"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Decipad
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-08.svg"
                        width="48"
                        height="48"
                        alt="Icon 08"
                      />
                      <img
                        className="absolute top-0 right-0"
                        src="./images/badge.svg"
                        width="16"
                        height="16"
                        alt="Badge"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Zapier
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-09.svg"
                        width="48"
                        height="48"
                        alt="Icon 09"
                      />
                      <img
                        className="absolute top-0 right-0"
                        src="./images/badge.svg"
                        width="16"
                        height="16"
                        alt="Badge"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Bonsai
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-10.svg"
                        width="48"
                        height="48"
                        alt="Icon 10"
                      />
                      <img
                        className="absolute top-0 right-0"
                        src="./images/badge.svg"
                        width="16"
                        height="16"
                        alt="Badge"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      GitHub
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-11.svg"
                        width="48"
                        height="48"
                        alt="Icon 11"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Poppins
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-12.svg"
                        width="48"
                        height="48"
                        alt="Icon 12"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Jotform
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
              </div>
            </section>
            {/* <!-- Section #2 --> */}
            <section>
              <div className="flex justify-between items-center space-x-2 mb-5">
                <h2 className="font-bold text-xl truncate">Trending</h2>
                <a
                  className="shrink-0 text-sm font-medium text-blue-500 hover:text-blue-600 transition"
                  href="#0"
                >
                  View All
                </a>
              </div>
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-13.svg"
                        width="48"
                        height="48"
                        alt="Icon 13"
                      />
                      <img
                        className="absolute top-0 right-0"
                        src="./images/badge.svg"
                        width="16"
                        height="16"
                        alt="Badge"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Miro
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-14.svg"
                        width="48"
                        height="48"
                        alt="Icon 14"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      WeTransfer
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-15.svg"
                        width="48"
                        height="48"
                        alt="Icon 15"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Hotjar
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-16.svg"
                        width="48"
                        height="48"
                        alt="Icon 16"
                      />
                      <img
                        className="absolute top-0 right-0"
                        src="./images/badge.svg"
                        width="16"
                        height="16"
                        alt="Badge"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      GitLab
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-17.svg"
                        width="48"
                        height="48"
                        alt="Icon 17"
                      />
                      <img
                        className="absolute top-0 right-0"
                        src="./images/badge.svg"
                        width="16"
                        height="16"
                        alt="Badge"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Coda
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-18.svg"
                        width="48"
                        height="48"
                        alt="Icon 18"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Airtable
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
              </div>
            </section>
            {/* <!-- Section #3 --> */}
            <section>
              <div className="flex justify-between items-center space-x-2 mb-5">
                <h2 className="font-bold text-xl truncate">Coming soon</h2>
                <a
                  className="shrink-0 text-sm font-medium text-blue-500 hover:text-blue-600 transition"
                  href="#0"
                >
                  View All
                </a>
              </div>
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-19.svg"
                        width="48"
                        height="48"
                        alt="Icon 19"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Klarna
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-20.svg"
                        width="48"
                        height="48"
                        alt="Icon 20"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      Trustpilot
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
                <article className="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                  <svg
                    className="absolute top-5 right-5 group-hover:rotate-45 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path
                      className="fill-gray-400"
                      d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
                    />
                  </svg>
                  <div className="inline-flex mb-3">
                    <div className="relative">
                      <img
                        className="rounded-full shadow-lg shadow-black/[0.03]"
                        src="./images/integration-21.svg"
                        width="48"
                        height="48"
                        alt="Icon 21"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1">
                    <a
                      className="font-bold before:absolute before:inset-0"
                      href="#0"
                    >
                      YouTube
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">
                    Simple simplifies the process of building sites, landing
                    pages, and any apps.
                  </p>
                </article>
              </div>
            </section>
          </div>

          {/* <!-- Load more --> */}
          <div className="text-center mt-12">
            <button className="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow py-1.5 min-w-[220px]">
              Load more{" "}
              <span className="tracking-normal text-gray-500 ml-2">↓</span>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- CTA --> */}
      <section className="relative">
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
                    Start Free Trial{" "}
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
