import Title_EN from "./title_en"
import Title_CN from "./title_cn"
import AppButtons_EN from "./button_en"
import AppButtons_CN from "./button_cn"

const Agent = () => {
  return (
    <>
      {/* <!-- Hero --> */}
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
            <div className="text-center pb-12 md:pb-16">
              <div
                className="mb-6 border-y"
                style={{
                  borderImage: 'linear-gradient(to right, transparent, rgba(107, 114, 128, 0.8), transparent) 1',
                }}
                data-aos="zoom-y-out"
              ></div>

              {/* English Version */}
              <Title_EN />
              <AppButtons_EN />

              {/* Space Between EN and CN Versions */}
              <div style={{ marginBottom: '16rem' }}></div> {/* Adjust this value as needed for spacing */}

              {/* Chinese Version */}
              <Title_CN />
              <AppButtons_CN />
            </div>


            

          </div>

        </div>
      </section>
    </>
  )
}

export default Agent