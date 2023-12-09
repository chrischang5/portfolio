export function Namecard() {
  return (
    <div
      id="namecard"
      className="hidden transition delay-150 duration-300 ease-in-out hover:scale-110 group-hover:-translate-y-1 sm:visible sm:basis-1/4"
    >
      {/* <h1 className="text-source-code text-bold text-center text-title text-light transition delay-150 duration-300 ease-in-out hover:text-accent-100">
        &lt;CC/&gt;
      </h1>
       */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    </div>
  );
}
