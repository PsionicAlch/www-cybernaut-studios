interface DefaultLayoutProps {
  children?: React.ReactElement | React.ReactElement[];
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const year = new Date().getFullYear();

  return (
    <div className="relative w-full h-full border border-black">
      <div className="p-1.5 bg-white absolute -top-4 -left-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>

      <div className="p-1.5 bg-white absolute -bottom-4 -right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>

      <nav className="w-full flex flex-row justify-between items-center absolute -top-5.5 left-0 px-5 py-2">
        <h1 className="bg-white px-2 font-normal text-xl">
          <a href="/" className="hover:underline">
            Cybernaut Studio
          </a>
        </h1>

        <ul className="flex flex-row gap-6 font-normal">
          <li className="bg-white px-2">
            <a href="#" className="hover:underline hover:cursor-not-allowed">
              About
            </a>
          </li>
          <li className="bg-white px-2">
            <a href="#" className="hover:underline hover:cursor-not-allowed">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="w-full h-full p-16 flex flex-row items-center justify-start">
        {children}
      </div>

      <footer className="w-full flex flex-row justify-between items-center absolute -bottom-5.5 right-0 px-5 py-2">
        <ul className="flex flex-row gap-6 font-normal">
          <li className="bg-white px-2">
            <a href="#" className="hover:underline hover:cursor-not-allowed">
              Privacy
            </a>
          </li>
          <li className="bg-white px-2">
            <a href="#" className="hover:underline hover:cursor-not-allowed">
              Legal
            </a>
          </li>
        </ul>

        <p className="bg-white px-2 font-normal">
          &copy;{" "}
          {year === 2026
            ? "Cybernaut Studios 2026"
            : `Cybernaut Studios 2026 - ${year}`}
        </p>
      </footer>
    </div>
  );
}
