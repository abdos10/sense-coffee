"use client";

export default function LuxuryBadge() {
  const radius = 94;
  const circumference = 2 * Math.PI * radius;

  return (
      <div className="flex justify-center lg:block lg:absolute lg:right-[8%] lg:top-1/2 lg:-translate-y-[calc(90%)] z-20 mt-6 md:mt-10 lg:mt-0">
      <div className="group opacity-0 translate-y-5 animate-[fade-in-up_0.8s_ease-out_forwards] hover:scale-104 transition-transform duration-300 ease-out">
        <svg
          viewBox="0 0 220 220"
          className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="110"
            cy="110"
            r={radius}
            stroke="rgba(238, 180, 100, 0.96)"
            strokeWidth="1.5"
            fill="none"
          />

          <path
            id="top-arc"
            d="M 30 120 A 80 80 0 0 1 190 120"
            fill="none"
          />
          <path
            id="bottom-arc"
            d="M 30 110 A 80 80 0 0 0 190 110"
            fill="none"
          />

          <text className="text-[11px] sm:text-[13px] lg:text-[15px]" fill="#C89B5C" fontWeight="500" letterSpacing="3">
            <textPath href="#top-arc" startOffset="50%" textAnchor="middle">
              FINEST BEANS
            </textPath>
          </text>

          <text className="text-[11px] sm:text-[13px] lg:text-[15px]" fill="#C89B5C" fontWeight="500" letterSpacing="3">
            <textPath href="#bottom-arc" startOffset="50%" textAnchor="middle">
              PERFECT TASTE
            </textPath>
          </text>

          <line x1="88" y1="85" x2="132" y2="85" stroke="#C89B5C" strokeWidth="0.8" opacity="0.9" />

          <text
            x="110"
            y="113"
            textAnchor="middle"
            fill="#C89B5C"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="18"
            fontWeight="700"
            letterSpacing="1"
          >
            COFFEE LAND
          </text>

          <text
            x="110"
            y="128"
            textAnchor="middle"
            fill="#C89B5C"
            fontSize="9"
            fontWeight="500"
            letterSpacing="2"
            opacity="0.8"
          >
            ROASTERS
          </text>

          <text
            x="110"
            y="143"
            textAnchor="middle"
            fontSize="16"
          >
            &#9749;
          </text>
        </svg>
      </div>
    </div>
  );
}
