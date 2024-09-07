import SvgComponent from "./chip_svg";

export default function Chip() {
  return (
    <>
      {/* <!-- Chip --> */}
      <section className="relative before:absolute before:inset-0 before:h-[120%] before:pointer-events-none before:bg-gradient-to-b before:from-gray-100 before:-z-10">
        <div className="pt-12 md:pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Yuantsy Neural Engine <br /> Agentic AI calls new Hardware.</h2>
            </div>
          </div>
          <div className="relative flex justify-center max-w-[94rem] mx-auto">
            <div className="absolute bottom-20 -translate-x-36 -z-10" aria-hidden="true">
              <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px]"></div>
            </div>
            <div className="absolute -bottom-10 -z-10" aria-hidden="true">
              <div className="w-80 h-80 rounded-full bg-blue-500 opacity-40 blur-[160px]"></div>
            </div>
            <div className="absolute bottom-0 -z-10" aria-hidden="true">
              <div className="w-56 h-56 rounded-full border-[20px] border-white blur-[20px]"></div>
            </div>
            

            {/* <!-- Row --> */}
            <div className="w-full inline-flex flex-nowrap py-12 md:py-20 group">
              <div className="flex items-start justify-center md:justify-start [&>*]:mx-3">
                {/* Blank Lines */}
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                <div style={{ height: '20px' }}></div>
                {/* More blank lines as needed */}
              </div>
            </div>

            

          </div>
        </div>
      </section>
    </>
  )
}