import SvgLine from "./svg_line";

export default function Tree() {
  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .responsive-heading {
              font-size: 2.25rem; // Reduces the font size on small devices
            }
            .responsive-paragraph {
              font-size: 1rem; // Adjusts the font size for the paragraph on small devices
              padding: 0 20px; // Adds padding for better text readability
            }
          }
        `}
      </style>

      {/* <!-- Tree --> */}
      <section className="text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* <!-- Yiyun Chen: I added h1 and the subtitle here. --> */}
          <h1 className="text-4xl md:text-4xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] responsive-heading" data-aos="zoom-y-out" data-aos-delay="150">
            Knowledge Tree 知识树<br className="hidden lg:block" />
          </h1>
          <p className="text-lg text-gray-700 mb-8 responsive-paragraph" data-aos="zoom-y-out" data-aos-delay="300">
            Knowledge Tree Plan of Yuantsy. Simplify the world you live in. 源子知识树计划 - 简化这个世界。
          </p>
        </div>
      </section>

      <SvgLine />

      <section>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="space-y-3">
              <p className="text-2xl font-bold text-gray-900">
                Yuantsy Knowledge Tree Plan 源子知识树计划{" "}
                <br />
                <em className="italic text-gray-500">Know the world better. 更好地了解这个世界。</em>
              </p>
              <div className="font-medium text-gray-500">
                <span className="text-gray-700">For human and AI both 同时面向AI和人类:</span> 
                <span className="text-gray-400">/</span> 
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
