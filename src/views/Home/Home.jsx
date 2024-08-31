import { useState } from 'react'
import SiteHeader from '../../components/SiteHeader'
import SiteFooter from '../../components/SiteFooter'


function Home() {
    const [activeTab, setActiveTab] = useState(1)

    return (
        //  <!-- Page wrapper -->
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

            {/* <!-- Site header --> */}
            <SiteHeader />

            {/* <!-- Page content --> */}
            <main className="grow">
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
                                <div className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]" data-aos="zoom-y-out">

                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]" data-aos="zoom-y-out" data-aos-delay="150">Let AI handle the repetitive, free you<br className="max-lg:hidden" />with Yuantsy Desktop Agent</h1>
                                <div className="max-w-3xl mx-auto">
                                    <p className="text-lg text-gray-700 mb-8" data-aos="zoom-y-out" data-aos-delay="300">Yuantsy Desktop Agent is an AI powered remote control software that can help you to do anything you can do with a computer.</p>
                                    <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="450">
                                            <a className="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full mb-4 sm:w-auto sm:mb-0 group" href="#0">
                                                <span className="relative inline-flex items-center">
                                                    MacOS App <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform ml-1">-&gt;</span>
                                                </span>
                                            </a>
                                            <a className="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full mb-4 sm:w-auto sm:mb-0 group" href="#0">
                                                <span className="relative inline-flex items-center">
                                                    Windows App <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform ml-1">-&gt;</span>
                                                </span>
                                            </a>
                                            <a className="btn text-gray-800 bg-white hover:bg-gray-50 shadow w-full sm:w-auto sm:ml-4" href="#0">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Hero image --> */}
                            <div className="max-w-3xl mx-auto" data-aos="zoom-y-out" data-aos-delay="600">
                                <div className="relative aspect-video bg-gray-900 rounded-2xl px-5 py-3 shadow-xl before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] before:pointer-events-none after:absolute after:-inset-5 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1] after:-z-10">
                                    <div className="relative flex items-center justify-between before:block before:w-[41px] before:h-[9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] before:bg-[length:16px_9px] after:w-[41px] mb-8">
                                        <span className="text-white font-medium text-[13px]">cruip.com</span>
                                    </div>
                                    <div className="text-gray-500 font-mono [&_span]:opacity-0">
                                        <span className="text-gray-200 animate-[code-1_10s_infinite]">npm login</span> <span className="animate-[code-2_10s_infinite]">--registry=https://npm.pkg.github.com</span><br />
                                        <span className="animate-[code-3_10s_infinite]">--scope=onphanatic</span> <span className="animate-[code-4_10s_infinite]">Successfully logged-in.</span><br /><br />
                                        <span className="text-gray-200 animate-[code-5_10s_infinite]">npm publish</span><br />
                                        <span className="animate-[code-6_10s_infinite]">Package published.</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* <!-- Business Categories --> */}
                <section>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6">

                        {/* <!-- Yiyun Chen: I added h1 and the subtitle here. --> */}
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]" data-aos="zoom-y-out" data-aos-delay="150">Knowledge Tree<br className="max-lg:hidden" />Simplify the world you live in.</h1>
                        <p className="text-lg text-gray-700 mb-8" data-aos="zoom-y-out" data-aos-delay="300">Know the world better. Knowledge Tree will be the knowledge platform both for agentic AIs and human beings. </p>

                        <div>

                            {/* <!-- Tabs component --> */}
                            <div>

                                {/* <!-- Buttons --> */}
                                <div className="flex justify-center">
                                    <div
                                        role="tablist"
                                        className="relative max-[480px]:max-w-[180px] inline-flex flex-wrap justify-center bg-white rounded-xl p-2 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none mb-8 min-[480px]:mb-12"
                                        onKeyDown={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            if (e.key === 'ArrowRight') {
                                                if (activeTab === 4) {
                                                    setActiveTab(1)
                                                    return
                                                }
                                                setActiveTab(activeTab + 1)
                                            } else if (e.key === 'ArrowLeft') {
                                                if (activeTab === 1) {
                                                    setActiveTab(4)
                                                    return
                                                }
                                                setActiveTab(activeTab - 1)
                                            } else if (e.key === 'Home') {
                                                setActiveTab(1)
                                            } else if (e.key === 'End') {
                                                setActiveTab(4)
                                            }
                                        }}
                                    >
                                        {/* <!-- Button #1 --> */}
                                        <button
                                            id="tab-1"
                                            className={`flex-1 flex items-center gap-2.5 text-sm font-medium h-8 px-3 rounded-lg whitespace-nowrap  focus-visible:ring focus-visible:ring-blue-300 focus-visible:outline-none transition-colors ${activeTab === 1 ? 'bg-gray-800 text-gray-200' : 'text-gray-700'}`}
                                            tabindex={activeTab === 1 ? 0 : -1}
                                            aria-selected={activeTab === 1}
                                            aria-controls="tabpanel-1"
                                            onClick={() => { setActiveTab(1) }}
                                            onFocus={() => { setActiveTab(1) }}
                                        >
                                            <svg
                                                className={`${activeTab === 1 ? 'text-gray-400' : 'text-gray-500'} fill-current`}
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
                                            </svg>
                                            <span>Startups</span>
                                        </button>
                                        {/* <!-- Button #2 --> */}
                                        <button
                                            id="tab-2"
                                            className={`flex-1 flex items-center gap-2.5 text-sm font-medium h-8 px-3 rounded-lg whitespace-nowrap  focus-visible:ring focus-visible:ring-blue-300 focus-visible:outline-none transition-colors ${activeTab === 2 ? 'bg-gray-800 text-gray-200' : 'text-gray-700'}`}
                                            tabindex={activeTab === 2 ? 0 : -1}
                                            aria-selected={activeTab === 2}
                                            aria-controls="tabpanel-2"
                                            onClick={() => { setActiveTab(2) }}
                                            onFocus={() => { setActiveTab(2) }}
                                        >
                                            <svg
                                                className={`${activeTab === 2 ? 'text-gray-400' : 'text-gray-500'} fill-current`}
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                <path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Zm.132 7.204A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />
                                            </svg>
                                            <span>Web Apps</span>
                                        </button>
                                        {/* <!-- Button #3 --> */}
                                        <button
                                            id="tab-3"
                                            className={`flex-1 flex items-center gap-2.5 text-sm font-medium h-8 px-3 rounded-lg whitespace-nowrap  focus-visible:ring focus-visible:ring-blue-300 focus-visible:outline-none transition-colors ${activeTab === 3 ? 'bg-gray-800 text-gray-200' : 'text-gray-700'}`}
                                            tabindex={activeTab === 3 ? 0 : -1}
                                            aria-selected={activeTab === 3}
                                            aria-controls="tabpanel-3"
                                            onClick={() => { setActiveTab(3) }}
                                            onFocus={() => { setActiveTab(3) }}
                                        >
                                            <svg
                                                className={`fill-current ${activeTab === 3 ? 'text-gray-400' : 'text-gray-500'}`}
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                <path d="M3 2a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0V2Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 0-2 0v12a1 1 0 1 0 2 0V2Z" />
                                            </svg>
                                            <span>eCommerce</span>
                                        </button>
                                        {/* <!-- Button #4 --> */}
                                        <button
                                            id="tab-4"
                                            className={`flex-1 flex items-center gap-2.5 text-sm font-medium h-8 px-3 rounded-lg whitespace-nowrap  focus-visible:ring focus-visible:ring-blue-300 focus-visible:outline-none transition-colors ${activeTab === 4 ? 'bg-gray-800 text-gray-200' : 'text-gray-700'}`}
                                            tabindex={activeTab === 4 ? 0 : -1}
                                            aria-selected={activeTab === 4}
                                            aria-controls="tabpanel-4"
                                            onClick={() => { setActiveTab(4) }}
                                            onFocus={() => { setActiveTab(4) }}
                                        >
                                            <svg
                                                className={`fill-current ${activeTab === 4 ? 'text-gray-400' : 'text-gray-500'}`}
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                <path d="M.06 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 1 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331A2.162 2.162 0 0 1 .06 10.003Zm7.855-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33a.172.172 0 0 0 .17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.084 2.023a.172.172 0 0 0-.17-.001h.001ZM9.075.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.924.285a2.173 2.173 0 0 1 2.15 0h.001Z" />
                                            </svg>
                                            <span>Enteprise</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-center h-[324px]">
                                    {/* <!-- Small blue dots --> */}
                                    <div className="absolute -z-10">
                                        <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="164" height="41" viewBox="0 0 164 41" fill="none">
                                            <circle cx="1" cy="8" r="1" fill-opacity="0.24" />
                                            <circle cx="1" cy="1" r="1" fill-opacity="0.16" />
                                            <circle cx="1" cy="15" r="1" />
                                            <circle cx="1" cy="26" r="1" fill-opacity="0.64" />
                                            <circle cx="1" cy="33" r="1" fill-opacity="0.24" />
                                            <circle cx="8" cy="8" r="1" />
                                            <circle cx="8" cy="15" r="1" />
                                            <circle cx="8" cy="26" r="1" fill-opacity="0.24" />
                                            <circle cx="15" cy="15" r="1" fill-opacity="0.64" />
                                            <circle cx="15" cy="26" r="1" fill-opacity="0.16" />
                                            <circle cx="8" cy="33" r="1" />
                                            <circle cx="1" cy="40" r="1" />
                                            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 7)" fill-opacity="0.24" />
                                            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 0)" fill-opacity="0.16" />
                                            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 14)" />
                                            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 25)" fill-opacity="0.64" />
                                            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 32)" fill-opacity="0.24" />
                                            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 157 7)" />
                                            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 157 14)" />
                                            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 157 25)" fill-opacity="0.24" />
                                            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 150 14)" fill-opacity="0.64" />
                                            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 150 25)" fill-opacity="0.16" />
                                            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 157 32)" />
                                            <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 39)" />
                                        </svg>
                                    </div>
                                    {/* <!-- Blue glow --> */}
                                    <div className="absolute -z-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="432" height="160" viewBox="0 0 432 160" fill="none">
                                            <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                                                <path className="fill-blue-500" fill-rule="evenodd" clip-rule="evenodd" d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_f_2044_9" x="0" y="0" width="432" height="160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_2044_9" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                    {/* <!-- Horizontal lines --> */}
                                    <div className="absolute -z-10 inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
                                    <div className="absolute -z-10 inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
                                    <div className="absolute -z-10 inset-x-[200px] top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
                                    <div className="absolute -z-10 inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-[82px] before:absolute before:inset-y-0 before:w-24 before:bg-gradient-to-r before:via-blue-500 before:animate-[line_10s_ease-in-out_infinite_both] mix-blend-multiply"></div>
                                    <div className="absolute -z-10 inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent translate-y-[82px] before:absolute before:inset-y-0 before:w-24 before:bg-gradient-to-r before:via-blue-500 before:animate-[line_10s_ease-in-out_infinite_5s_both] mix-blend-multiply"></div>
                                    {/* <!-- Diagonal lines --> */}
                                    <div className="absolute -z-10 inset-x-[300px] top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent rotate-[20deg] mix-blend-multiply"></div>
                                    <div className="absolute -z-10 inset-x-[300px] top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -rotate-[20deg] mix-blend-multiply"></div>
                                    {/* <!-- Vertical lines --> */}
                                    <div className="absolute -z-10 inset-y-0 left-1/2 w-px bg-gradient-to-b from-gray-200 to-transparent -translate-x-[216px] mix-blend-multiply"></div>
                                    <div className="absolute -z-10 inset-y-0 left-1/2 w-px bg-gradient-to-t from-gray-200 to-transparent translate-x-[216px] mix-blend-multiply"></div>
                                    {/* <!-- Logos --> */}
                                    <div className="absolute before:absolute before:-inset-3 before:rounded-full before:[background:conic-gradient(from_180deg,transparent,theme(colors.blue.500))_border-box] before:border before:border-transparent before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:animate-[spin_3s_linear_infinite]">
                                        <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                                            <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                <img className="relative" src="./images/logo-01.svg" width="32" height="32" alt="Logo 01" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Panel #1 --> */}
                                    <div
                                        id="tabpanel-1"
                                        className="w-full h-full flex items-center justify-center"
                                        role="tabpanel"
                                        // tabindex="0"
                                        aria-labelledby="tab-1"
                                        style={{ opacity: activeTab === 1 ? 100 : 0, scale: activeTab === 1 ? 100 : 125, transition: 'opacity 0.7s ease-[cubic-bezier(0.38,0,0.32,1)], scale 0.7s ease-[cubic-bezier(0.38,0,0.32,1)]' }}
                                        x-show={activeTab === 1}
                                    // x-transition:enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform order-first"
                                    // x-transition:enter-start="opacity-0 scale-90"
                                    // x-transition:enter-end="opacity-100 scale-100"
                                    // x-transition:leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform absolute"
                                    // x-transition:leave-start="opacity-100 scale-100"
                                    // x-transition:leave-end="opacity-0 scale-125"                        
                                    >
                                        <div className="absolute -translate-x-[136px]">
                                            <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-02.svg" width="23" height="22" alt="Logo 02" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[136px]">
                                            <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-03.svg" width="22" height="22" alt="Logo 03" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-04.svg" width="24" height="22" alt="Logo 04" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[216px] -translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-05.svg" width="25" height="25" alt="Logo 05" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[216px] translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-06.svg" width="20" height="18" alt="Logo 06" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-x-[216px] translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-07.svg" width="25" height="25" alt="Logo 07" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-x-[292px] opacity-40">
                                            <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                                    <img className="relative" src="./images/logo-08.svg" width="20" height="20" alt="Logo 08" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[292px] opacity-40">
                                            <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                                                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                                    <img className="relative" src="./images/logo-09.svg" width="21" height="13" alt="Logo 09" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Panel #2 --> */}
                                    <div
                                        id="tabpanel-2"
                                        className="w-full h-full flex items-center justify-center"
                                        role="tabpanel"
                                        // tabindex="0"
                                        aria-labelledby="tab-2"
                                        style={{ opacity: activeTab === 2 ? 100 : 0, scale: activeTab === 2 ? 100 : 125, transition: 'opacity 0.7s ease-[cubic-bezier(0.38,0,0.32,1)], scale 0.7s ease-[cubic-bezier(0.38,0,0.32,1)]' }}
                                    >
                                        <div className="absolute -translate-x-[136px]">
                                            <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-03.svg" width="23" height="22" alt="Logo 03" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[136px]">
                                            <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-04.svg" width="22" height="22" alt="Logo 04" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-05.svg" width="24" height="22" alt="Logo 05" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[216px] -translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-02.svg" width="25" height="25" alt="Logo 02" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[216px] translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-07.svg" width="20" height="18" alt="Logo 07" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-x-[216px] translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-06.svg" width="25" height="25" alt="Logo 06" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-x-[292px] opacity-40">
                                            <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                                    <img className="relative" src="./images/logo-09.svg" width="20" height="20" alt="Logo 09" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[292px] opacity-40">
                                            <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                                                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                                    <img className="relative" src="./images/logo-08.svg" width="21" height="13" alt="Logo 08" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Panel #3 --> */}
                                    <div
                                        id="tabpanel-3"
                                        className="w-full h-full flex items-center justify-center"
                                        role="tabpanel"
                                        // tabindex="0"
                                        aria-labelledby="tab-3"
                                        style={{ opacity: activeTab === 3 ? 100 : 0, scale: activeTab === 3 ? 100 : 125, transition: 'opacity 0.7s ease-[cubic-bezier(0.38,0,0.32,1)], scale 0.7s ease-[cubic-bezier(0.38,0,0.32,1)]' }}
                                    >
                                        <div className="absolute -translate-x-[136px]">
                                            <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-02.svg" width="23" height="22" alt="Logo 02" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[136px]">
                                            <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-03.svg" width="22" height="22" alt="Logo 03" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-04.svg" width="24" height="22" alt="Logo 04" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[216px] -translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-05.svg" width="25" height="25" alt="Logo 05" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[216px] translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-06.svg" width="20" height="18" alt="Logo 06" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-x-[216px] translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-07.svg" width="25" height="25" alt="Logo 07" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-x-[292px] opacity-40">
                                            <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                                    <img className="relative" src="./images/logo-08.svg" width="20" height="20" alt="Logo 08" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[292px] opacity-40">
                                            <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                                                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                                    <img className="relative" src="./images/logo-09.svg" width="21" height="13" alt="Logo 09" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Panel #4 --> */}
                                    <div
                                        id="tabpanel-4"
                                        className="w-full h-full flex items-center justify-center"
                                        role="tabpanel"
                                        // tabindex="0"
                                        aria-labelledby="tab-4"
                                        style={{ opacity: activeTab === 4 ? 100 : 0, scale: activeTab === 4 ? 100 : 125, transition: 'opacity 0.7s ease-[cubic-bezier(0.38,0,0.32,1)], scale 0.7s ease-[cubic-bezier(0.38,0,0.32,1)]' }}
                                    >
                                        <div className="absolute -translate-x-[136px]">
                                            <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-03.svg" width="23" height="22" alt="Logo 03" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[136px]">
                                            <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-04.svg" width="22" height="22" alt="Logo 04" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-05.svg" width="24" height="22" alt="Logo 05" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[216px] -translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-02.svg" width="25" height="25" alt="Logo 02" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[216px] translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-07.svg" width="20" height="18" alt="Logo 07" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-x-[216px] translate-y-[82px]">
                                            <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                                                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                                                    <img className="relative" src="./images/logo-06.svg" width="25" height="25" alt="Logo 06" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -translate-x-[292px] opacity-40">
                                            <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                                                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                                    <img className="relative" src="./images/logo-09.svg" width="20" height="20" alt="Logo 09" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute translate-x-[292px] opacity-40">
                                            <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                                                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                                                    <img className="relative" src="./images/logo-08.svg" width="21" height="13" alt="Logo 08" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- End: Tabs component --> */}

                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter />


        </div>
    )
}

export default Home
