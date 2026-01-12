import Debug from "../components/Debug";

export default function HomeExperience() {
  // const {} = useControls({});

  return (
    <>
      <Debug />

      <main className="w-dvw h-dvh overflow-hidden bg-white font-black p-10">
        <div className="relative w-full h-full border border-black">
          <div className="p-1 bg-white absolute -top-4 -left-4">
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

          <div className="p-1 bg-white absolute -bottom-4 -right-4">
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
        </div>
      </main>
    </>
  );
}
