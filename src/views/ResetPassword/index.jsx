import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <>
      {/* <!-- Page wrapper --> */}
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        {/* <!-- Site header --> */}
        <header className="absolute w-full z-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* <!-- Site branding --> */}
              <div className="shrink-0 mr-4">
                {/* <!-- Logo --> */}
                <Link className="inline-flex" to="/home" aria-label="Cruip">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                  >
                    <path
                      className="fill-blue-500"
                      fill-rule="evenodd"
                      d="M15.052 0c6.914.513 12.434 6.033 12.947 12.947h-5.015a7.932 7.932 0 0 1-7.932-7.932V0Zm-2.105 22.985V28C6.033 27.487.513 21.967 0 15.053h5.015a7.932 7.932 0 0 1 7.932 7.932Z"
                      clip-rule="evenodd"
                    />
                    <path
                      className="fill-blue-300"
                      fill-rule="evenodd"
                      d="M0 12.947C.513 6.033 6.033.513 12.947 0v5.015a7.932 7.932 0 0 1-7.932 7.932H0Zm22.984 2.106h5.015C27.486 21.967 21.966 27.487 15.052 28v-5.015a7.932 7.932 0 0 1 7.932-7.932Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="relative grow flex">
          <div
            className="absolute left-0 -translate-x-1/3 bottom-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px]"></div>
          </div>

          {/* <!-- Content --> */}
          <div className="w-full">
            <div className="h-full flex flex-col justify-center before:min-h-[4rem] md:before:min-h-[5rem] before:flex-1 after:flex-1">
              <div className="px-4 sm:px-6">
                <div className="w-full max-w-sm mx-auto">
                  <div className="py-16 md:py-20">
                    <div className="mb-10">
                      <h1 className="text-4xl font-bold">Reset password</h1>
                    </div>

                    {/* <!-- Form --> */}
                    <form>
                      <div className="space-y-4">
                        <div>
                          <label
                            className="block text-sm text-gray-700 font-medium mb-1"
                            for="email"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            className="form-input py-2 w-full"
                            type="email"
                            placeholder="corybarker@email.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <button className="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full">
                          Reset Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right side --> */}
          <div className="hidden relative lg:block shrink-0 w-[572px] my-6 mr-6 rounded-2xl overflow-hidden">
            {/* <!-- Background --> */}
            <div
              className="bg-blue-50 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -ml-24 pointer-events-none -z-10"
              aria-hidden="true"
            >
              <img
                src="./images/auth-bg.svg"
                className="max-w-none"
                width="1285"
                height="1684"
                alt="Auth bg"
              />
            </div>
            {/* <!-- Illustration --> */}
            <div className="absolute top-1/2 -translate-y-1/2 left-32 w-[500px]">
              <div className="w-full aspect-video bg-gray-900 rounded-2xl px-5 py-3 shadow-xl transition duration-300">
                <div className="relative flex items-center justify-between before:block before:w-[41px] before:h-[9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] before:bg-[length:16px_9px] after:w-[41px] mb-8">
                  <span className="text-white font-medium text-[13px]">
                    cruip.com
                  </span>
                </div>
                <div className="text-gray-500 font-mono [&amp;_span]:opacity-0 text-sm transition duration-300">
                  <span className="text-gray-200 animate-[code-1_10s_infinite]">
                    npm login
                  </span>{" "}
                  <span className="animate-[code-2_10s_infinite]">
                    --registry=https://npm.pkg.github.com
                  </span>
                  <br />
                  <span className="animate-[code-3_10s_infinite]">
                    --scope=@phanatic
                  </span>{" "}
                  <span className="animate-[code-4_10s_infinite]">
                    Successfully logged-in.
                  </span>
                  <br />
                  <br />
                  <span className="text-gray-200 animate-[code-5_10s_infinite]">
                    npm publish
                  </span>
                  <br />
                  <span className="animate-[code-6_10s_infinite]">
                    Package published.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
