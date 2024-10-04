import SvgLine from "./svg_line";

export default function Tree() {
  return (
    <>
      {/* Combined Tree and Knowledge Tree Plan sections */}
      <section className="text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* <!-- Yiyun Chen: I added h1 and the subtitle here. --> */}
          <h1 className="text-4xl md:text-4xl font-bold mb-4 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]" data-aos="zoom-y-out" data-aos-delay="150">
            Knowledge Tree 知识树<br className="hidden lg:block" />
          </h1>
          <p className="text-lg text-gray-700 mb-6" data-aos="zoom-y-out" data-aos-delay="300">
            Efficient and trustworthy information systems with minimal redundancy, designed for agentic AI and humans. <br/>为AI Agent与人类设计的高效、可靠、极简信息系统。
          </p>

          {/* Yuantsy Knowledge Tree Plan */}
          <div className="max-w-2xl mx-auto py-6 md:py-12">
            <div className="space-y-3">
              <p className="text-2xl font-bold text-gray-900">
                Yuantsy Knowledge Tree Plan 源子知识树计划{" "} <br></br>
              </p>
              <div className="font-medium text-gray-500">
                <span className="text-gray-700">For human and AI both 同时面向AI和人类:</span>{" "}
                <span className="text-gray-400">/</span>{" "}
                <a className="text-blue-500" href="https://tree.yuantsy.com">
                  Click here to visit 点击这里访问
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}
