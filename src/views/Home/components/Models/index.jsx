import BoxButton from "./boxbutton";

export default function Models() {
  return (
    <>
      {/* <!-- Features --> */}
      <section className="relative before:absolute before:inset-0 before:bg-gray-900 before:-z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

            {/* <!-- Section header Yiyun Chen: I changed text in this section --> */}
            <div className="max-w-3xl mx-auto text-center pb-16 md:pb-20">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-200">AI models, all in one - Yuantsy Service Platform </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-200">AI模型，尽在 - 源子推理服务平台 </h2>
            </div>

            <BoxButton />

            {/* <!-- Grid with 3 articles --> */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 overflow-hidden [&>*]:p-6 md:[&>*]:p-10 [&>*]:relative [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-inline-start:-1px] [&>*]:before:[inset-block-start:0] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-inline-start:0] [&>*]:after:[inset-block-start:-1px]">
              <article>
                <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                  <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                  </svg>
                  <span>Diversity 多样</span>
                </h3>
                <p className="text-[15px] text-gray-400">Access a wide range of AI models from various companies and open-source communities. <br></br>访问各大模型企业和开源社区多种AI模型。</p>
              </article>
              <article>
                <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                  <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                  </svg>
                  <span>Flexibility 便利</span>
                </h3>
                <p className="text-[15px] text-gray-400">Pay only for what you use—no monthly subscriptions, just per-call pricing. <br></br>按使用量付费，无月度订阅，仅按每次调用收费。</p>
              </article>
              <article>
                <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                  <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z" opacity=".3" />
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                  </svg>
                  <span>Integration 完整</span>
                </h3>
                <p className="text-[15px] text-gray-400">Seamlessly connect with multiple AI models through one unified platform. <br></br>通过一个统一的平台连接多个AI模型。</p>
              </article>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
