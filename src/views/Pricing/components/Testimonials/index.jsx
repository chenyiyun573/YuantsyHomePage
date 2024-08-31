export default function Testimonials() {
  return (
    <>
      {/* <!-- Testimonials --> */}
      <section className="relative before:absolute before:inset-0 before:h-[120%] before:pointer-events-none before:bg-gradient-to-b before:from-gray-100 before:-z-10">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10"
          aria-hidden="true"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px]"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Top brands grow with Simple
              </h2>
            </div>
            {/* <!-- Logos --> */}
            <div className="pb-12 md:pb-16">
              <div className="flex flex-wrap items-center justify-center text-gray-600">
                <div className="relative px-6 lg:px-12 py-4 before:absolute before:left-0 before:top-1/2 before:w-px before:h-3 before:-translate-y-1/2 before:bg-gray-300 first:before:hidden max-lg:before:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="19"
                    fill="none"
                  >
                    <title>Facebook</title>
                    <path
                      className="fill-current"
                      fill-opacity=".72"
                      fill-rule="evenodd"
                      d="M2.023 18.814h4.049V9.406h2.702l.357-3.242H6.072l.005-1.623c0-.845.083-1.298 1.347-1.298h1.689V0H6.41C3.165 0 2.024 1.572 2.024 4.217v1.947H0v3.242h2.023v9.408Zm47.435-9.061c.604-.265 1.199-.525 2.025-.525 1.376 0 1.687.722 1.687 1.62v2.862c0 1.216-.272 2.088-2.254 2.088-.548 0-.88 0-1.458-.053V9.753Zm-32.923 9.086h3.375v-7.697c0-3.569-1.019-4.977-5.665-4.977h-3.784l-.338 3.241h3.462c2.117 0 2.275.388 2.275 1.71v.56h-2.799c-2.75 0-4.287.924-4.287 3.514 0 2.194 1.318 3.782 3.793 3.782.907 0 2.282-.133 3.823-.953l.145.82Zm-2.594-2.622c-.77 0-1.119-.369-1.119-1.079 0-.714.376-.867 1.231-.867h1.807v1.422l-.172.077c-.529.236-1 .447-1.747.447Zm13.73-6.995c1.01 0 1.614.076 3.714.422v-3.16c-1.84-.398-3.038-.503-4.05-.503-4.347 0-6.075 2.199-6.075 5.372v2.27c0 3.17 1.728 5.365 6.075 5.365 1.012 0 2.21-.104 4.05-.5v-3.162c-2.1.347-2.703.425-3.713.425-1.815 0-2.364-.386-2.364-1.866v-2.799c0-1.48.549-1.864 2.364-1.864Zm9.377 4.42h7.425v-2.596c0-2.8-1.28-5.046-5.736-5.046C34.282 6 33 8.272 33 11.046v2.596c0 3.17 1.729 5.365 6.076 5.365 1.983 0 3.037-.104 5.059-.5v-3.162c-2.097.347-3.092.424-4.723.424-1.815 0-2.364-.386-2.364-1.865v-.262Zm-.417-3.119c0-.897.314-1.622 1.689-1.622 1.373 0 1.687.725 1.687 1.622v.504H36.63v-.504Zm14.148 8.46c5.526 0 6.439-2.235 6.439-5.3v-3.16c0-2.799-.675-4.541-4.723-4.541-1.03 0-2.162.158-3.037.47V.326L45.41.974v17.515c2.203.325 3.373.494 5.37.494Zm13.52-.026c4.756 0 5.893-2.564 5.893-5.207v-2.552c0-2.645-1.136-5.209-5.893-5.209-4.758 0-5.916 2.564-5.916 5.209v2.552c0 2.643 1.158 5.207 5.916 5.207Zm-1.867-8.109c0-.898.477-1.62 1.854-1.62 1.373 0 1.854.722 1.855 1.62v3.279c0 .9-.481 1.624-1.855 1.624-1.377 0-1.854-.724-1.854-1.624v-3.279Zm29.645 7.966h4.387l-4.05-6.488 4.05-6.162h-4.387l-3.71 5.646V.325l-4.05.648v17.841h4.05v-5.946l3.71 5.946Zm-14.812.143c4.755 0 5.894-2.564 5.894-5.207v-2.552c0-2.645-1.139-5.209-5.894-5.209-4.758 0-5.916 2.564-5.916 5.209v2.552c0 2.643 1.158 5.207 5.916 5.207Zm-1.867-8.109c0-.898.478-1.62 1.853-1.62 1.373 0 1.859.722 1.859 1.62v3.279c0 .9-.486 1.624-1.86 1.624s-1.852-.724-1.852-1.624v-3.279ZM100 17.795c0-.666-.543-1.2-1.225-1.2h-.005c-.683 0-1.237.534-1.237 1.2 0 .677.554 1.205 1.237 1.205.687 0 1.23-.528 1.23-1.204Zm-1.23-1.013c-.55 0-.998.454-.998 1.014 0 .57.45 1.017 1.003 1.017a.996.996 0 0 0 .998-1.012c0-.565-.443-1.019-.998-1.019h-.005Zm-.232 1.712h-.223v-1.34h.011a2.6 2.6 0 0 1 .384-.03c.21 0 .349.042.434.1.081.06.125.15.125.277 0 .177-.12.283-.27.326v.01c.121.022.204.128.232.325.033.208.067.288.088.331h-.233c-.032-.043-.066-.165-.094-.342-.032-.17-.122-.234-.3-.234h-.154v.577Zm0-.741h.161c.183 0 .338-.064.338-.23 0-.118-.088-.234-.338-.234-.073 0-.123.005-.16.01v.454Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="relative px-6 lg:px-12 py-4 before:absolute before:left-0 before:top-1/2 before:w-px before:h-3 before:-translate-y-1/2 before:bg-gray-300 first:before:w-0 first:before:hidden max-lg:before:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="34"
                    fill="none"
                  >
                    <title>AirBnB</title>
                    <path
                      className="fill-current"
                      fill-opacity=".72"
                      fill-rule="evenodd"
                      d="M28.43 24.655h.001l.155.377c.406 1.149.531 2.234.283 3.32-.344 2.297-1.875 4.282-4.062 5.151-.78.342-1.655.497-2.53.497a8.292 8.292 0 0 1-3.937-1.117c-1.249-.714-2.498-1.737-3.873-3.227-1.374 1.49-2.593 2.513-3.873 3.227a8.29 8.29 0 0 1-3.125 1.055c-.25.031-.562.062-.812.062a6.45 6.45 0 0 1-2.53-.497 6.603 6.603 0 0 1-4.062-5.15C-.09 27.234.034 26.147.44 25c.156-.404.312-.776.468-1.118.111-.248.223-.49.331-.726.135-.294.267-.58.388-.856l.032-.062c2.155-4.654 4.498-9.371 6.903-14.025l.094-.187c.256-.483.506-.97.75-1.458.312-.56.656-1.149 1.124-1.707C11.562 3.682 12.967 3 14.53 3c1.53 0 2.968.683 3.967 1.924.461.515.762 1.056 1.051 1.575l.074.132c.243.49.493.976.75 1.458l.093.187a322.533 322.533 0 0 1 6.904 14.026l.031.03c.122.278.254.566.39.863h.001c.107.234.218.474.328.72.104.228.208.484.313.74Zm24.273-13.866a2.02 2.02 0 0 1-2.031 2.017 2.02 2.02 0 0 1-2.03-2.017 2 2 0 0 1 2.03-2.017c1.157.031 2.031.931 2.031 2.017Zm-8.372 4.065v.497s-.968-1.242-3.03-1.242c-3.405 0-6.06 2.576-6.06 6.144 0 3.538 2.624 6.144 6.06 6.144 2.093 0 3.03-1.272 3.03-1.272v.527c0 .249.188.434.438.434h2.53V14.42h-2.53a.447.447 0 0 0-.438.435Zm-2.53 8.75c1.124 0 2.062-.589 2.53-1.272v-4.158c-.437-.652-1.437-1.272-2.53-1.272-2 0-3.53 1.241-3.53 3.351s1.53 3.352 3.53 3.352Zm7.372-9.184h2.999v11.667h-3V14.42Zm41.767.93s.969-1.241 3.03-1.241c3.374 0 6.03 2.608 6.03 6.145 0 3.538-2.656 6.144-6.06 6.144-2.062 0-3.031-1.273-3.031-1.273v.528a.445.445 0 0 1-.437.434h-2.53V8.803h2.998v6.548Zm2.531 8.224c-1.156 0-2.062-.59-2.53-1.273v-4.158c.468-.62 1.468-1.272 2.53-1.272 2 0 3.53 1.241 3.53 3.351s-1.53 3.352-3.53 3.352Zm-7.09 2.544v-6.95c0-1.956-.407-3.072-1.469-3.941-.874-.745-1.968-1.118-3.28-1.118-1.156 0-2.312.342-3.186 1.242v-.497a.445.445 0 0 0-.438-.434h-2.373v11.668h2.998v-8.13c.595-.683 1.532-1.15 2.438-1.15 1.686 0 2.31.777 2.31 2.7v6.61h3ZM68.354 14.11c-2.061 0-3.03 1.242-3.03 1.242V8.803h-2.999v17.284h2.53c.25 0 .438-.217.438-.434v-.527s.968 1.272 3.03 1.272c3.405 0 6.06-2.606 6.06-6.144.032-3.538-2.623-6.145-6.029-6.145Zm-3.03 8.192c.469.684 1.375 1.273 2.53 1.273 2 0 3.53-1.242 3.53-3.352s-1.53-3.351-3.53-3.351c-1.061 0-2.061.652-2.53 1.272v4.158Zm-5.592-8.192c.906 0 1.374.156 1.374.156v2.761s-2.499-.838-4.06.931v8.161h-3V14.42h2.53c.25 0 .438.217.438.434v.497c.563-.652 1.78-1.242 2.718-1.242ZM14.497 26.646c-1.687-2.11-2.78-4.096-3.155-5.771-.156-.714-.188-1.335-.094-1.893.062-.497.25-.932.5-1.304.594-.837 1.593-1.365 2.75-1.365 1.155 0 2.186.497 2.749 1.365.25.372.437.807.5 1.304.093.559.062 1.21-.094 1.893-.376 1.644-1.47 3.63-3.156 5.77Zm9.621 5.09c1.53-.621 2.624-2.018 2.843-3.632.125-.806.031-1.582-.218-2.388a5.89 5.89 0 0 0-.265-.668 19.157 19.157 0 0 1-.141-.325c-.125-.248-.241-.51-.358-.774-.118-.264-.235-.529-.36-.778v-.031a409.83 409.83 0 0 0-6.842-13.964l-.094-.186a60.194 60.194 0 0 1-.367-.7c-.128-.245-.255-.49-.383-.728a6.862 6.862 0 0 0-.875-1.366c-.656-.743-1.53-1.147-2.499-1.147-.968 0-1.843.404-2.499 1.147-.344.404-.625.87-.875 1.366-.12.226-.242.46-.364.693-.128.248-.257.495-.386.735l-.093.186A337.46 337.46 0 0 0 3.469 23.11l-.031.061c-.25.528-.5 1.056-.719 1.552-.048.115-.096.223-.142.327-.104.236-.199.451-.264.666a5.101 5.101 0 0 0-.28 2.42c.218 1.614 1.311 3.01 2.842 3.631a5.03 5.03 0 0 0 2.374.31c.78-.092 1.561-.34 2.374-.806 1.124-.62 2.28-1.583 3.561-3.01-2.03-2.514-3.311-4.841-3.78-6.889a6.404 6.404 0 0 1-.156-2.638c.125-.776.407-1.49.844-2.11.968-1.365 2.593-2.203 4.404-2.203 1.812 0 3.437.806 4.406 2.203.437.62.718 1.334.843 2.11a7.71 7.71 0 0 1-.156 2.638c-.469 2.048-1.719 4.344-3.78 6.857 1.312 1.428 2.437 2.39 3.561 3.01a6.18 6.18 0 0 0 2.374.807 4.76 4.76 0 0 0 2.374-.31Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="relative px-6 lg:px-12 py-4 before:absolute before:left-0 before:top-1/2 before:w-px before:h-3 before:-translate-y-1/2 before:bg-gray-300 first:before:w-0 first:before:hidden max-lg:before:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="17"
                    fill="none"
                  >
                    <title>Canon</title>
                    <path
                      className="fill-current"
                      fill-opacity=".72"
                      fill-rule="evenodd"
                      d="M6.306 12.098c1.281 2.149 3.63 3.59 6.245 3.59 3.863 0 5.99-3.41 5.99-3.41l.273.908C17.026 15.566 13.831 17 10.256 17c-4.115 0-7.665-2.009-9.298-4.906A7.284 7.284 0 0 1 0 8.5C0 3.805 4.591 0 10.256 0c4.003 0 7.225 1.754 8.917 4.297l-6.716 4.115L16.29 2.39c-1.097-.706-2.442-1.367-3.833-1.367-3.932 0-7.17 3.358-7.17 7.381a7.18 7.18 0 0 0 1.02 3.694Zm17.983-.003c-.02.138-.03.276-.03.415 0 1.527 1.21 2.766 2.703 2.766 1.492 0 2.702-1.239 2.702-2.766 0-.14-.01-.278-.03-.416-.196-1.33-1.318-2.35-2.673-2.35s-2.477 1.02-2.672 2.351Zm11.372 4.629-1.343-4.63-2.002-6.898s-1.264-3.523-5.254-2.038c-3.99 1.486-4.89 2.038-4.89 2.038h5.408l1.284 4.39c-.988-.892-2.433-1.454-4.043-1.454-2.836 0-5.16 1.747-5.372 3.962-.01.112-.015.223-.015.334 0 2.372 2.412 4.296 5.387 4.296 2.488 0 4.581-1.344 5.202-3.17l.926 3.17h4.712Zm13.72-4.63v4.63h-4.847V6.55c0-.748-.593-1.355-1.325-1.355-.546 0-1.036.343-1.234.863v10.665h-4.759V5.196h-2.775s3.86-2.393 5.2-2.393c1.268 0 2.207.997 2.325 2.268.359-.199.718-.405 1.072-.608 1.486-.853 2.891-1.66 3.92-1.66 1.316 0 2.387 1.073 2.424 2.411v6.88Zm8.144 2.282-.675-2.282-2.038-6.898c.11-.9.977-1.77 1.886-1.77.919 0 1.675.71 1.774 1.623l2.014 7.045.574 2.006c.008.069.012.139.012.21 0 1.009-.8 1.826-1.785 1.826-.964 0-1.75-.782-1.762-1.76Zm7.041-2.281C63.648 14.943 61.026 17 57.934 17c-3.092 0-5.715-2.056-6.633-4.906a7.283 7.283 0 0 1-.35-2.239c0-3.946 3.126-7.145 6.983-7.145 3.856 0 6.982 3.2 6.982 7.145 0 .782-.123 1.535-.35 2.24Zm8.027 4.629V6.059c.198-.52.688-.863 1.234-.863.732 0 1.325.607 1.325 1.355v10.173H80V5.214c-.036-1.338-1.107-2.411-2.424-2.411-1.028 0-2.433.806-3.919 1.66-.354.203-.713.41-1.073.608-.117-1.27-1.056-2.268-2.325-2.268-1.339 0-5.085 2.393-5.085 2.393h2.66v11.528h4.76Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="relative px-6 lg:px-12 py-4 before:absolute before:left-0 before:top-1/2 before:w-px before:h-3 before:-translate-y-1/2 before:bg-gray-300 first:before:w-0 first:before:hidden max-lg:before:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="34"
                    fill="none"
                  >
                    <title>Cadbury</title>
                    <path
                      className="fill-current"
                      fill-opacity=".72"
                      fill-rule="evenodd"
                      d="M33.38 9.574c.81-2.223.3-4.811-1.387-6.538C29.256.366 22.65-1.265 14.95 1.251c-2.774.907-7.048 2.635-10.813 6.796-3.767 4.16-5.63 10.728-2.689 15.41 2.143 3.41 6.553 5.45 11.554 5.362 3.622-.063 7.699-1.881 11.324-4.676-.697 2.084.431 3.393 1.747 3.76 2.918.79 5.139-2.576 5.139-2.576l.003.057c.072 1.116.105 1.629 1.139 2.2 1.774.975 3.003-.354 3.646-1.458.129.84.798 1.767 1.71 1.903 1.438.225 2.755-.809 3.573-1.79 2.887-3.472 4.044-8.008 3.985-12.408.709.14 1.236.103 1.858.06l.271-.019c.419-.025.748-.048 1.167-.102-1.3 2.407-2.4 4.967-3.092 7.72l-.002.012c-.384 1.833-.829 3.96.132 5.518.405.707 1.153 1.102 2.003 1.044 1.075-.035 2.26-1.187 2.856-2.102.404-.548 1.136-1.918 1.482-2.893.156-.059.312-.114.468-.169.314-.111.628-.222.937-.36l.195-.087c.087-.038.167-.072.278-.125-.48 1.074-1.007 2.311-1.034 3.508-.034.83.279 1.65 1.003 2.038 1.197.586 2.917-.719 3.92-1.48l.024-.018c.136.515.33 1.072.806 1.379.564.36 1.465.321 2.146-.157 1.68-1.179 2.852-2.982 3.987-4.73.21-.324.42-.646.631-.962l.143-.208a4.131 4.131 0 0 0 1.224-.192c-.572.845-1.099 1.743-1.48 2.702-.475 1.17-.686 2.764.184 3.661.459.415 1.248.266 1.704.058 1.419-.697 2.565-1.92 3.624-3.049l.15-.16.079-.078c-.218.741-.351 1.778-.144 2.503.116.427.49.856.912.93 1.1.151 1.924-.556 2.738-1.254.142-.122.284-.243.427-.36.09-.073.186-.162.271-.242.071-.066.135-.126.182-.163-.392.817-.877 1.66-1.36 2.501-.407.708-.814 1.414-1.163 2.103-.034.067-.078.148-.127.239-.233.426-.583 1.07-.578 1.549.007.657.358 1.203 1.242 1.53.167.061.278 0 .323-.122.048-1.068.48-1.84 1.265-3.21l1.032-1.885a522.488 522.488 0 0 0 3.568-6.578c.337-.649.739-1.658.258-2.335-.18-.187-.41-.262-.69-.245-.398.044-.726.322-.94.66-.252.359-.497.724-.743 1.091-.827 1.235-1.662 2.482-2.784 3.513-.433.4-1.01.893-1.493.754-.119-.037-.2-.126-.207-.388.038-1.3.883-2.558 1.648-3.696.114-.169.226-.335.333-.499.273-.364.528-.908.436-1.344a.673.673 0 0 0-.438-.475c-.612-.194-1.11.224-1.545.63-.498.538-.985 1.11-1.476 1.688-1.145 1.345-2.314 2.72-3.713 3.777-.045.027-.09.057-.136.086-.247.16-.506.328-.798.224-.146-.061-.235-.208-.239-.422.02-.906.61-2.118 1.256-3.019.163-.228.324-.422.477-.607.286-.345.547-.661.76-1.113.156-.378.126-.758-.184-1.05a.727.727 0 0 0-.665-.16 7.316 7.316 0 0 0-.544.166c-.408.136-.818.273-1.265.245l.131-.223c.195-.325.385-.642.46-1.025.061-.4.05-.87-.273-1.118-.316-.215-.774-.235-1.17-.037-1.162.686-1.607 2.183-1.495 3.484-.684 1.445-1.778 2.707-2.935 3.785l-.118.095c-.377.308-.768.628-1.252.564-.35-.088-.452-.378-.432-.83l.324-.36c.682-.76 1.412-1.573 1.89-2.414.43-.758 1.053-1.938.751-2.843-.055-.217-.276-.41-.547-.458-.504-.112-.97.162-1.354.451-1.52 1.317-2.265 3.118-2.785 5.013-.356.557-.84 1.098-1.444 1.434-.29.167-.735.285-1.004.06a.774.774 0 0 1-.183-.59c.115-1.126.757-2.093 1.37-3.019l.16-.242c.45-.683.848-1.147 1.16-1.51.505-.588.785-.915.7-1.482a.895.895 0 0 0-.62-.707c-.393-.146-.917-.03-1.264.289l-.073.072c-.76.743-1.55 1.516-2.495 2.046l-.179.093c-.498.258-.958.497-1.64.604.058-.394.069-.802.045-1.183-.075-1.214-.497-2.489-1.826-2.74-.462-.089-.963.03-1.323.142.585-1.578 1.421-3.06 2.564-4.276.224-.238.478-.47.728-.699.528-.482 1.04-.95 1.227-1.43a1 1 0 0 0-.197-1.085c-.299-.265-.646-.356-1.081-.27-.898.244-1.586.988-2.187 1.675-.955.629-2.166.71-3.357.67-1.597 0-2.44-.677-3.203-1.85-.214-.283-.49-.606-.89-.674-.41-.112-.918.156-1.153.399-.295.285-.424.751-.3 1.131.149.406.321.794.493 1.183.44.99.878 1.98.916 3.248.01.411 0 .813-.102 1.21-3.357.948-5.958 4.074-6.672 7.371-.071.116-.145.244-.222.377-.509.88-1.167 2.019-2.12 1.717-.534-.264-.84-2.331 2.148-7.428.056-.152.118-.305.18-.458.267-.657.54-1.33.36-2.066-.132-.513-.696-.747-1.159-.852-3.593-.547-6.784 2.814-9.176 5.334l-.324.34c-2.941 2.798-5.954 4.158-8.813 4.757-7.017 1.475-13.751-1.49-12.473-8.48C5.811 10.203 11.761 3.709 21.327 2.38c7.393-1.027 11.24 2.315 10.143 6.242-.534 1.91-3.35 7.48-12.47 8.323-1.567.143-4.236-.32-4.98-1.832-1.164-2.4.05-4.661 1.557-6.09 2.57-2.277 6.178-3.148 9.687-3.127.283.016.538-.048.758-.317.133-.184.178-.377.143-.663-.088-.398-.404-.564-.748-.619-3.114-.35-6.192.212-8.797 1.466-3.125 1.648-5.77 4.147-6.406 7.585-.398 2.247.579 4.624 2.619 5.75 2.281 1.166 5.878.89 8.364.33 5.254-1.412 10.256-4.924 12.184-9.854Zm-6.056 13.879c1.127-2.295 3.125-5.12 5.516-6.473l.008-.004c.315-.15 1.059-.505 1.305-.014.067.283-.126.878-.297 1.16-1.563 2.577-3.968 6.041-5.188 6.857-1.656 1.106-1.925-.659-1.343-1.526Zm11.702-1.32c.647-1.505 1.864-2.96 3.543-3.43l.09-.02c-.188 1.554-.848 2.985-1.599 4.325-.409.642-.895 1.36-1.564 1.822-.197.143-.54.285-.738.041-.48-.646-.07-1.949.268-2.737Zm10.12-2.98c-.874.45-1.371 1.91-1.54 2.718-.212 1.017-.406 2.402.057 3.01a.57.57 0 0 0 .415.173c.694.015 1.176-1.057 1.448-1.672.456-1.024.864-2.642.718-3.676-.055-.533-.565-.769-1.099-.554Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="relative px-6 lg:px-12 py-4 before:absolute before:left-0 before:top-1/2 before:w-px before:h-3 before:-translate-y-1/2 before:bg-gray-300 first:before:w-0 first:before:hidden max-lg:before:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="76"
                    height="34"
                    fill="none"
                  >
                    <title>Quora</title>
                    <path
                      className="fill-current"
                      fill-opacity=".72"
                      fill-rule="evenodd"
                      d="M9.287 24.401a9.385 9.385 0 0 0 2.407-.32C12.615 25.655 13.843 27 16.165 27c3.834 0 4.259-3.527 4.179-4.376h-1.372c-.071.638-.496 1.45-1.55 1.45-.964 0-1.658-.669-2.33-1.676 2.083-1.61 3.517-4.104 3.517-7.171C18.609 9.712 14.059 6 9.287 6 4.595 6 0 9.739 0 15.227 0 20.663 4.595 24.4 9.287 24.4ZM7.57 19.496c1.668 0 2.523 1.447 3.252 2.879a5.455 5.455 0 0 1-1.534.197c-3.524 0-5.047-2.484-5.047-7.345 0-4.888 1.523-7.397 5.047-7.397 3.576 0 5.107 2.51 5.107 7.397 0 1.957-.256 3.536-.796 4.705-.909-1.37-2.054-2.442-4.285-2.442-1.434 0-2.55.469-3.24 1.06l.567 1.132c.292-.133.61-.186.929-.186Zm14.057-.08v-6.284c0-.716-.265-1.033-1.088-1.033h-.877v-1.67h5.728v8.909c0 1.502.814 2.164 2.054 2.164 1.018 0 2.036-.45 2.585-1.476v-6.894c0-.716-.266-1.033-1.089-1.033h-.93v-1.67h5.782v9.332c0 .929.345 1.353 1.407 1.353h.186v1.723l-5.17.822v-1.776h-.106c-1 1.219-2.408 2.041-4.418 2.041-2.257 0-4.064-1.14-4.064-4.507Zm24.13-2.492c-.041 3.561-.815 5.33-2.851 5.33-1.798 0-2.895-1.768-2.895-5.33 0-3.482 1.115-5.17 2.895-5.17 2.036 0 2.89 1.687 2.85 5.17Zm-2.851 7c-3.683 0-7.004-2.81-7.004-7 0-4.11 3.241-6.84 7.004-6.84 3.922 0 7.064 2.783 7.064 6.84 0 4.19-3.142 7-7.064 7Zm7.182-1.935v1.67h8.224v-1.67h-.77c-1.354 0-1.647-.398-1.647-1.591v-4.906c0-1.21.674-2.032 1.54-2.032.465 0 .76.18 1.07.37.339.207.696.426 1.313.426 1.31 0 1.778-1.035 1.778-2.007 0-1.397-.947-2.086-2.16-2.086-1.468 0-3.035 1.034-3.62 2.997h-.106l-.266-2.731h-5.25v1.67h.744c.85 0 1.222.317 1.222 1.033v7.266c0 1.193-.133 1.59-1.514 1.59h-.558Zm17.476-.274c1.674 0 2.364-1.582 2.364-3.172v-2.122c-.438.453-1.084.749-1.732 1.046-1.162.533-2.332 1.07-2.332 2.515 0 1.105.656 1.733 1.7 1.733Zm-1.647 2.21c1.982 0 3.4-.894 4.09-2.22h.106c.133 1.212 1.133 1.954 2.726 1.954 1.833 0 2.798-.981 3.161-1.538l-.443-1.078a1.36 1.36 0 0 1-.787.23c-.744 0-1.054-.46-1.054-1.308v-5.488c0-3.439-2.125-4.393-5.586-4.393-3.656 0-5.604 1.317-5.604 2.943 0 .804.46 1.519 1.646 1.519 1.21 0 1.534-.69 1.865-1.395.345-.735.698-1.485 2.066-1.485.956 0 1.824.345 1.824 2.545v.31c-.745 1.204-2.243 1.699-3.73 2.19-2.046.675-4.069 1.343-4.069 3.846 0 2.147 1.487 3.367 3.789 3.367Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* <!-- Testimonials grid --> */}
            <div className="grid sm:grid-cols-3 gap-4 md:gap-6 [mask-image:_linear-gradient(to_top,theme(colors.white/.3),_black_800px)]">
              <article className="relative flex flex-col rounded-2xl h-full w-full p-5 shadow-lg md:odd:-rotate-1 md:even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                <header className="flex items-center gap-3 mb-4">
                  <img
                    className="shrink-0 rounded-full"
                    src="./images/testimonial-01.jpg"
                    width="44"
                    height="44"
                    alt="Testimonial 01"
                  />
                  <div>
                    <div className="font-bold">Peter Lowe</div>
                    <div>
                      <a
                        className="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                        href="#0"
                      >
                        @peterlowex
                      </a>
                    </div>
                  </div>
                </header>
                <div className="grow text-sm text-gray-700">
                  Simple has revolutionized the way I manage my work. Its
                  intuitive interface and seamless functionality make staying
                  organized effortless. I can't imagine my life without it.
                </div>
                <footer className="mt-4 text-gray-700 flex items-center gap-2.5">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                    />
                  </svg>
                  <div className="text-xs">May 19, 2027</div>
                </footer>
              </article>
              <article className="relative flex flex-col rounded-2xl h-full w-full p-5 shadow-lg md:odd:-rotate-1 md:even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                <header className="flex items-center gap-3 mb-4">
                  <img
                    className="shrink-0 rounded-full"
                    src="./images/testimonial-02.jpg"
                    width="44"
                    height="44"
                    alt="Testimonial 02"
                  />
                  <div>
                    <div className="font-bold">Rodri Alba</div>
                    <div>
                      <a
                        className="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                        href="#0"
                      >
                        @rodri_spn
                      </a>
                    </div>
                  </div>
                </header>
                <div className="grow text-sm text-gray-700">
                  As a busy professional, Simple has been a lifesaver. It
                  streamlines my workflow, allowing me to focus on what truly
                  matters. Plus, its minimalist design is a breath of fresh air.
                </div>
                <footer className="mt-4 text-gray-700 flex items-center gap-2.5">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                    />
                  </svg>
                  <div className="text-xs">May 19, 2027</div>
                </footer>
              </article>
              <article className="relative flex flex-col rounded-2xl h-full w-full p-5 shadow-lg md:odd:-rotate-1 md:even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                <header className="flex items-center gap-3 mb-4">
                  <img
                    className="shrink-0 rounded-full"
                    src="./images/testimonial-03.jpg"
                    width="44"
                    height="44"
                    alt="Testimonial 03"
                  />
                  <div>
                    <div className="font-bold">Michele Lex</div>
                    <div>
                      <a
                        className="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                        href="#0"
                      >
                        @MikyBrown
                      </a>
                    </div>
                  </div>
                </header>
                <div className="grow text-sm text-gray-700">
                  I've tried countless builder tools, but none compare to
                  Simple. Its straightforward approach to creating websites
                  keeps me on track without overwhelming me.
                </div>
                <footer className="mt-4 text-gray-700 flex items-center gap-2.5">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                    />
                  </svg>
                  <div className="text-xs">May 05, 2027</div>
                </footer>
              </article>
              <article className="relative flex flex-col rounded-2xl h-full w-full p-5 shadow-lg md:odd:-rotate-1 md:even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                <header className="flex items-center gap-3 mb-4">
                  <img
                    className="shrink-0 rounded-full"
                    src="./images/testimonial-04.jpg"
                    width="44"
                    height="44"
                    alt="Testimonial 04"
                  />
                  <div>
                    <div className="font-bold">Michael Ross</div>
                    <div>
                      <a
                        className="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                        href="#0"
                      >
                        @michjack
                      </a>
                    </div>
                  </div>
                </header>
                <div className="grow text-sm text-gray-700">
                  I've struggled to find a website builder that suits my needs
                  until I found Simple. Its clean design and user-friendly
                  features make staying organized a breeze. I highly recommend
                  it.
                </div>
                <footer className="mt-4 text-gray-700 flex items-center gap-2.5">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                    />
                  </svg>
                  <div className="text-xs">Apr 12, 2027</div>
                </footer>
              </article>
              <article className="relative flex flex-col rounded-2xl h-full w-full p-5 shadow-lg md:odd:-rotate-1 md:even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                <header className="flex items-center gap-3 mb-4">
                  <img
                    className="shrink-0 rounded-full"
                    src="./images/testimonial-05.jpg"
                    width="44"
                    height="44"
                    alt="Testimonial 05"
                  />
                  <div>
                    <div className="font-bold">Mike Bryan</div>
                    <div>
                      <a
                        className="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                        href="#0"
                      >
                        @mike0point7
                      </a>
                    </div>
                  </div>
                </header>
                <div className="grow text-sm text-gray-700">
                  Simple lives up to its name in every way. It's incredibly easy
                  to use yet powerful enough to handle all my tasks
                  effortlessly. It's become an essential part of my daily
                  routine.
                </div>
                <footer className="mt-4 text-gray-700 flex items-center gap-2.5">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                    />
                  </svg>
                  <div className="text-xs">Mar 10, 2027</div>
                </footer>
              </article>
              <article className="relative flex flex-col rounded-2xl h-full w-full p-5 shadow-lg md:odd:-rotate-1 md:even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                <header className="flex items-center gap-3 mb-4">
                  <img
                    className="shrink-0 rounded-full"
                    src="./images/testimonial-06.jpg"
                    width="44"
                    height="44"
                    alt="Testimonial 06"
                  />
                  <div>
                    <div className="font-bold">Sarah Rodriguez</div>
                    <div>
                      <a
                        className="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                        href="#0"
                      >
                        @sararodriguez
                      </a>
                    </div>
                  </div>
                </header>
                <div className="grow text-sm text-gray-700">
                  I was blown away by how easy it was to create my website using
                  this tool! Within a few hours, I had a professional-looking
                  site up and running, and my client could not believe.
                </div>
                <footer className="mt-4 text-gray-700 flex items-center gap-2.5">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                    />
                  </svg>
                  <div className="text-xs">Feb 27, 2027</div>
                </footer>
              </article>
              <article className="relative flex flex-col rounded-2xl h-full w-full p-5 shadow-lg md:odd:-rotate-1 md:even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                <header className="flex items-center gap-3 mb-4">
                  <img
                    className="shrink-0 rounded-full"
                    src="./images/testimonial-07.jpg"
                    width="44"
                    height="44"
                    alt="Testimonial 07"
                  />
                  <div>
                    <div className="font-bold">Duncan Mitch</div>
                    <div>
                      <a
                        className="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                        href="#0"
                      >
                        @lovingme_
                      </a>
                    </div>
                  </div>
                </header>
                <div className="grow text-sm text-gray-700">
                  Simple has simplified my life in more ways than one. From
                  managing my clients to keeping track of deadlines, it's become
                  my go-to tool for staying on top of everything. I couldn't
                  imagine managing without it!
                </div>
                <footer className="mt-4 text-gray-700 flex items-center gap-2.5">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                    />
                  </svg>
                  <div className="text-xs">Feb 08, 2027</div>
                </footer>
              </article>
              <article className="relative flex flex-col rounded-2xl h-full w-full p-5 shadow-lg md:odd:-rotate-1 md:even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                <header className="flex items-center gap-3 mb-4">
                  <img
                    className="shrink-0 rounded-full"
                    src="./images/testimonial-08.jpg"
                    width="44"
                    height="44"
                    alt="Testimonial 08"
                  />
                  <div>
                    <div className="font-bold">Kavisha Mills</div>
                    <div>
                      <a
                        className="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                        href="#0"
                      >
                        @kavigirl99
                      </a>
                    </div>
                  </div>
                </header>
                <div className="grow text-sm text-gray-700">
                  I'm a freelancer, and having a professional website is crucial
                  for attracting clients. This tool not only helped me create a
                  beautiful portfolio but also boosted my visibility.
                </div>
                <footer className="mt-4 text-gray-700 flex items-center gap-2.5">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                    />
                  </svg>
                  <div className="text-xs">Jan 29, 2027</div>
                </footer>
              </article>
              <article className="relative flex flex-col rounded-2xl h-full w-full p-5 shadow-lg md:odd:-rotate-1 md:even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                <header className="flex items-center gap-3 mb-4">
                  <img
                    className="shrink-0 rounded-full"
                    src="./images/testimonial-09.jpg"
                    width="44"
                    height="44"
                    alt="Testimonial 09"
                  />
                  <div>
                    <div className="font-bold">Dante Luzzi</div>
                    <div>
                      <a
                        className="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition"
                        href="#0"
                      >
                        @dante1987
                      </a>
                    </div>
                  </div>
                </header>
                <div className="grow text-sm text-gray-700">
                  I've never been a fan of complicated website builders, which
                  is why Simple is perfect for me. Its minimalist design and
                  straightforward functionality make staying organized feel like
                  second nature.
                </div>
                <footer className="mt-4 text-gray-700 flex items-center gap-2.5">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
                    />
                  </svg>
                  <div className="text-xs">Jan 02, 2027</div>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
