export default function Home() {
  return (
    <nav className="max-w-screen-xl p-5 md:px-0 grid grid-cols-2 md:grid-cols-12 py-4  items-center mx-auto">
      <h1 className="col-span-1 md:col-start-2 md:col-span-2 text-xl font-bold">
        Nama Team
      </h1>
      <div className="hidden md:flex col-start-4 col-span-6 justify-center space-x-10">
        <a href="">Home</a>
        <a href="">Advertise</a>
        <a href="">Supports</a>
        <a href="">Contact</a>
      </div>
      <div className="col-start-2 md:col-span-2 col-span-1 md:col-start-11  flex justify-end md:space-x-0 space-x-4">
        <button className="py-2 px-4 md:py-4 border md:px-8 rounded-full">
          Get started
        </button>
        <button className="md:hidden" aria-label="control nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
