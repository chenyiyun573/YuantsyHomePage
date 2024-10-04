import { Button } from 'antd';

const Download = () => {
  return (
    <>
      {/* Download Section */}
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
            <div className="pb-12 md:pb-16">
              <div
                className="mb-6 border-y"
                style={{
                  borderImage: 'linear-gradient(to right, transparent, rgba(107, 114, 128, 0.8), transparent) 1',
                }}
                data-aos="zoom-y-out"
              ></div>

              <h1 className="text-4xl font-bold mb-4">Desktop Agent - Downloads  下载</h1>
              
              <p className="text-md text-gray-500 mb-16">
                The official release is planned for March 2025. Stay tuned!
                <br/><br/>
                正式用户版本计划于2025年3月发布，敬请期待！
              </p>
              
            </div>

            {/* Demo Download Section */}
            <div className="text-left mb-16">
              <h2 className="text-2xl font-bold mb-4">Demo Downloads 演示下载</h2>
              <ul className="list-disc list-inside">
                <li><a href="#" className="text-blue-600 hover:underline">Download macOS Demo 下载 macOS 演示</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Download Windows App Demo 下载 Windows 应用演示</a></li>
              </ul>
            </div>

            {/* Release Versions Section */}
            <div className="text-left mb-16">
              <h2 className="text-2xl font-bold mb-4">Releases 发布版本</h2>
              {/* <ul className="list-disc list-inside">
                {Array.from({ length: 20 }, (_, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline"
                    >
                      Version {index + 1}.0.0 - Release Notes & Download 版本 {index + 1}.0.0 - 发布说明与下载
                    </a>
                  </li>
                ))}
              </ul> */}
            </div>

            {/* Official App Section 
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-4">Official Release 正式发布</h2>
              <p className="text-md text-gray-600 mb-4">
                Desktop Agent is currently in its demo stage. The official release in March 2025 will provide a stable, feature-rich version for users, incorporating feedback from this demo phase. Thank you for your support and interest in transforming productivity with AI!
              </p>
              <p className="text-md text-gray-600 mb-4">
                桌面代理目前处于演示阶段。正式版本将于2025年3月发布，提供稳定且功能丰富的用户版本，并结合此次演示阶段的反馈。感谢您对利用AI提升生产力的支持与关注！
              </p>
            </div>*/}

          </div>

        </div>
      </section>
    </>
  );
};

export default Download;