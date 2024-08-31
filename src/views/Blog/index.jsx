import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <section className="relative">
        {/* <!-- Stripes illustration --> */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-0 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <img
            className="max-w-none"
            src="./images/stripes.svg"
            width="768"
            height="432"
            alt="Stripes"
          />
        </div>

        {/* <!-- Circles --> */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-32 ml-[580px] pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-50 blur-[160px]"></div>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[420px] ml-[380px] pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]"></div>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[640px] -ml-[300px] pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* <!-- Main content --> */}
          <div className="max-w-3xl mx-auto pt-32 pb-12 md:pt-40 md:pb-20">
            {/* <!-- Section header --> */}
            <div className="pb-16">
              <h1 className="text-5xl font-bold mb-4">The Simple blog</h1>
              <p className="text-lg text-gray-700">
                Content for developers, product, and digital experts.
              </p>
            </div>

            {/* <!-- Categories --> */}
            <div className="flex flex-wrap gap-2 mb-10">
              <button className="btn-sm font-normal text-gray-200 bg-gray-800 hover:bg-gray-900 shadow">
                All
              </button>
              <button className="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">
                Interviews
              </button>
              <button className="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">
                Inspiration
              </button>
              <button className="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">
                Updates
              </button>
              <button className="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">
                Product
              </button>
              <button className="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">
                Miscellaneous
              </button>
            </div>

            {/* <!-- Articles --> */}
            <div className="space-y-10 border-l [border-image:linear-gradient(to_bottom,theme(colors.slate.200),theme(colors.slate.300),transparent)1]">
              <article className="pl-6 sm:pl-10">
                <header className="mb-2">
                  <div className="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                    <img
                      className="rounded-full"
                      src="./images/blog-author-01.jpg"
                      width="24"
                      height="24"
                      alt="Author 01"
                    />
                    <div className="text-sm text-gray-500">Alexandra Moore</div>
                  </div>
                  <h2 className="text-2xl font-bold">
                    <Link className="hover:underline" to="/blog-post">
                      Simple's system for tracking and validating web forms
                    </Link>
                  </h2>
                </header>
                <p className="text-gray-700 mb-4">
                  In this blog post, we'll share technical details on how we
                  built this state-of-the-art web form tracking system, and
                  describe how teams at Simple interact with the data quality
                  metrics that underlie our design builder network.
                </p>
                <footer>
                  <Link
                    className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    to="/blog-post"
                  >
                    Read more{" "}
                    <span className="tracking-normal text-blue-300">-&gt;</span>
                  </Link>
                </footer>
              </article>
              <article className="pl-6 sm:pl-10">
                <header className="mb-2">
                  <div className="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                    <img
                      className="rounded-full"
                      src="./images/blog-author-02.jpg"
                      width="24"
                      height="24"
                      alt="Author 02"
                    />
                    <div className="text-sm text-gray-500">Mark Cruppet</div>
                  </div>
                  <h2 className="text-2xl font-bold">
                    <Link className="hover:underline" to="/blog-post">
                      Introducing AI SDK 3.0 with UI support
                    </Link>
                  </h2>
                </header>
                <p className="text-gray-700 mb-4">
                  In this blog post, we'll share technical details on how we
                  built this state-of-the-art web form tracking system, and
                  describe how teams at Simple interact with the data quality
                  metrics that underlie our design builder network.
                </p>
                <footer>
                  <Link
                    className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    to="/blog-post"
                  >
                    Read more{" "}
                    <span className="tracking-normal text-blue-300">-&gt;</span>
                  </Link>
                </footer>
              </article>
              <article className="pl-6 sm:pl-10">
                <header className="mb-2">
                  <div className="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                    <img
                      className="rounded-full"
                      src="./images/blog-author-01.jpg"
                      width="24"
                      height="24"
                      alt="Author 01"
                    />
                    <div className="text-sm text-gray-500">Alexandra Moore</div>
                  </div>
                  <h2 className="text-2xl font-bold">
                    <Link className="hover:underline" to="/blog-post">
                      8 ways to improve feature adoption (includes strategies)
                    </Link>
                  </h2>
                </header>
                <p className="text-gray-700 mb-4">
                  In this blog post, we'll share technical details on how we
                  built this state-of-the-art web form tracking system, and
                  describe how teams at Simple interact with the data quality
                  metrics that underlie our design builder network.
                </p>
                <footer>
                  <Link
                    className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    to="/blog-post"
                  >
                    Read more{" "}
                    <span className="tracking-normal text-blue-300">-&gt;</span>
                  </Link>
                </footer>
              </article>
              <article className="pl-6 sm:pl-10">
                <header className="mb-2">
                  <div className="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                    <img
                      className="rounded-full"
                      src="./images/blog-author-02.jpg"
                      width="24"
                      height="24"
                      alt="Author 02"
                    />
                    <div className="text-sm text-gray-500">Mark Cruppet</div>
                  </div>
                  <h2 className="text-2xl font-bold">
                    <Link className="hover:underline" to="/blog-post">
                      How to migrate to serverless hosting
                    </Link>
                  </h2>
                </header>
                <p className="text-gray-700 mb-4">
                  In this blog post, we'll share technical details on how we
                  built this state-of-the-art web form tracking system, and
                  describe how teams at Simple interact with the data quality
                  metrics that underlie our design builder network.
                </p>
                <footer>
                  <Link
                    className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    to="/blog-post"
                  >
                    Read more{" "}
                    <span className="tracking-normal text-blue-300">-&gt;</span>
                  </Link>
                </footer>
              </article>
              <article className="pl-6 sm:pl-10">
                <header className="mb-2">
                  <div className="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                    <img
                      className="rounded-full"
                      src="./images/blog-author-01.jpg"
                      width="24"
                      height="24"
                      alt="Author 01"
                    />
                    <div className="text-sm text-gray-500">Alexandra Moore</div>
                  </div>
                  <h2 className="text-2xl font-bold">
                    <Link className="hover:underline" to="/blog-post">
                      Creating a robust platform for documentation with Simple
                    </Link>
                  </h2>
                </header>
                <p className="text-gray-700 mb-4">
                  In this blog post, we'll share technical details on how we
                  built this state-of-the-art web form tracking system, and
                  describe how teams at Simple interact with the data quality
                  metrics that underlie our design builder network.
                </p>
                <footer>
                  <Link
                    className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    to="/blog-post"
                  >
                    Read more{" "}
                    <span className="tracking-normal text-blue-300">-&gt;</span>
                  </Link>
                </footer>
              </article>
              <article className="pl-6 sm:pl-10">
                <header className="mb-2">
                  <div className="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                    <img
                      className="rounded-full"
                      src="./images/blog-author-02.jpg"
                      width="24"
                      height="24"
                      alt="Author 02"
                    />
                    <div className="text-sm text-gray-500">Mark Cruppet</div>
                  </div>
                  <h2 className="text-2xl font-bold">
                    <Link className="hover:underline" to="/blog-post">
                      How Simple helps xWeb manage over 4K sites
                    </Link>
                  </h2>
                </header>
                <p className="text-gray-700 mb-4">
                  In this blog post, we'll share technical details on how we
                  built this state-of-the-art web form tracking system, and
                  describe how teams at Simple interact with the data quality
                  metrics that underlie our design builder network.
                </p>
                <footer>
                  <Link
                    className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    to="/blog-post"
                  >
                    Read more{" "}
                    <span className="tracking-normal text-blue-300">-&gt;</span>
                  </Link>
                </footer>
              </article>
              <article className="pl-6 sm:pl-10">
                <header className="mb-2">
                  <div className="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                    <img
                      className="rounded-full"
                      src="./images/blog-author-01.jpg"
                      width="24"
                      height="24"
                      alt="Author 01"
                    />
                    <div className="text-sm text-gray-500">Alexandra Moore</div>
                  </div>
                  <h2 className="text-2xl font-bold">
                    <Link className="hover:underline" to="/blog-post">
                      Optimizing performance for over 6M monthly visitors
                    </Link>
                  </h2>
                </header>
                <p className="text-gray-700 mb-4">
                  In this blog post, we'll share technical details on how we
                  built this state-of-the-art web form tracking system, and
                  describe how teams at Simple interact with the data quality
                  metrics that underlie our design builder network.
                </p>
                <footer>
                  <Link
                    className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    to="/blog-post"
                  >
                    Read more{" "}
                    <span className="tracking-normal text-blue-300">-&gt;</span>
                  </Link>
                </footer>
              </article>
              <article className="pl-6 sm:pl-10">
                <header className="mb-2">
                  <div className="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                    <img
                      className="rounded-full"
                      src="./images/blog-author-02.jpg"
                      width="24"
                      height="24"
                      alt="Author 02"
                    />
                    <div className="text-sm text-gray-500">Mark Cruppet</div>
                  </div>
                  <h2 className="text-2xl font-bold">
                    <Link className="hover:underline" to="/blog-post">
                      Revolutionizing video editing on the web with Simple
                    </Link>
                  </h2>
                </header>
                <p className="text-gray-700 mb-4">
                  In this blog post, we'll share technical details on how we
                  built this state-of-the-art web form tracking system, and
                  describe how teams at Simple interact with the data quality
                  metrics that underlie our design builder network.
                </p>
                <footer>
                  <Link
                    className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    to="/blog-post"
                  >
                    Read more{" "}
                    <span className="tracking-normal text-blue-300">-&gt;</span>
                  </Link>
                </footer>
              </article>
            </div>

            {/* <!-- Load more --> */}
            <div className="text-center mt-12">
              <button className="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow py-1.5 min-w-[220px]">
                Load more{" "}
                <span className="tracking-normal text-gray-500 ml-2">↓</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
