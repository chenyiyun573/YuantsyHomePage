const SiteFooter = () => {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* <!-- Top area: Blocks --> */}
        <div className="grid sm:grid-cols-12 gap-10 py-8 md:py-12">

          {/* <!-- 1st block --> */}
          <div className="sm:col-span-12 lg:col-span-4 space-y-2">
            <div>
              {/* <!-- Logo --> */}
              <a className="inline-flex" href="index.html" aria-label="Cruip">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                  <path className="fill-blue-500" fillrule="evenodd" d="M15.052 0c6.914.513 12.434 6.033 12.947 12.947h-5.015a7.932 7.932 0 0 1-7.932-7.932V0Zm-2.105 22.985V28C6.033 27.487.513 21.967 0 15.053h5.015a7.932 7.932 0 0 1 7.932 7.932Z" clip-rule="evenodd" />
                  <path className="fill-blue-300" fill-rule="evenodd" d="M0 12.947C.513 6.033 6.033.513 12.947 0v5.015a7.932 7.932 0 0 1-7.932 7.932H0Zm22.984 2.106h5.015C27.486 21.967 21.966 27.487 15.052 28v-5.015a7.932 7.932 0 0 1 7.932-7.932Z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="text-sm text-gray-600">
              &copy; Yuantsy - All rights reserved. <br /><br />
              Yuantsy LLC (CA, US)<br />
              安徽源子计算机网络有限公司<br />
              北京源子幻想科技有限公司
            </div>

            <div className="text-sm text-gray-600">

              <a href="https://beian.miit.gov.cn" target="_blank" >皖ICP备2020014972号</a> <br />
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34172302000196" target="_blank" >皖公网安备 34172302000196号</a> <br />
              <a >增值电信业务经营许可 皖B2-20230436</a>
            </div>

          </div>

          {/* <!-- 2nd block --> */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">Yuantsy Desktop Agent</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">Knowledge Tree</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">All in One AI Models</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">RAG Search Service</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">Neural Engine Chip</a>
              </li>
            </ul>
          </div>

          {/* <!-- 3rd block --> */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">About us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">Diversity & Inclusion</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">Blog</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">Careers</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">Financial statements</a>
              </li>
            </ul>
          </div>

          {/* <!-- 4th block --> */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">Community</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">Terms of service</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="#0">Report a vulnerability</a>
              </li>
            </ul>
          </div>

          {/* <!-- 5th block --> */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">
              <li>
                <a className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition" href="#0" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition" href="#0" aria-label="Medium">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition" href="#0" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* <!-- Big text --> */}
      <div className="relative w-full h-60 -mt-16" aria-hidden="true">
        <div className="absolute left-1/2 pointer-events-none -z-10 -translate-x-1/2 text-[348px] leading-none text-center font-bold before:content-['Yuantsy'] before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:text-transparent before:bg-clip-text after:content-['Yuantsy'] after:absolute after:inset-0 after:bg-gray-300/70 after:text-transparent after:bg-clip-text after:[text-shadow:0_1px_0_white] after:mix-blend-darken"></div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="w-56 h-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>

    </footer >
  )
}

export default SiteFooter