export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <div className="text-sm font-medium sm:pb-20 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-10 pb-20">
          <div className="space-y-5">
            <h2 className="text-2xl tracking-wide text-white text-center pt-32">Connect</h2>
            <div className="grid-cols-3 grid">
              <div className="text-center">
                <a
                  className="hover:text-white transition-colors duration-200 text-xl text-center"
                  href="/"
                >
                  Twitter
                </a>
              </div>
              <div className="text-center">
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Facebook
                </a>
              </div>
              <div className="text-center">
                <a
                  className="hover:text-white transition-colors duration-200 font-semibold text-xl"
                  href="/"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2021 Company Inc.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
