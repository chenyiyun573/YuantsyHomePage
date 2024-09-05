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
            <h3 className="text-sm font-medium">Product 业务</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="https://yuantsy.com">Agent 智能体</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="https://tree.yuantsy.com">Knowledge Tree 知识树</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="https://service.yuantsy.com">All in One AI Models <br></br>AI模型推理</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="https://search.yuantsy.com">RAG Search Service <br></br>增强生成搜索</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="http://chip.yuantsy.com">Neural Engine Chip <br></br>神经引擎芯片</a>
              </li>
            </ul>
          </div>

          {/* <!-- 3rd block --> */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2">
            <h3 className="text-sm font-medium">Contact 联系</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="http://wiki.yuantsy.com">About Us 关于我们</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="mailto:hr@yuantsy.com">Join US 加入我们</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="https://yuantsy.com/investment/">Investor 投资者</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="mailto:customer@yuantsy.com">Customer 用户</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="mailto:legal@yuantsy.com">Legal 法务</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="mailto:research@yuantsy.com">Research 科研合作</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 transition" href="mailto:business@yuantsy.com">Business 商务合作</a>
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