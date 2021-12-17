const Footer = () => {

  return (
    <footer className="flex bottom-0">
      <div className="flex items-center bg-gray-100 rounded-tr-md pr-3">
        <svg
          width="90px"
          height="30px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="180.2400329589844 55.99501953125 200.51993408203126 40.0099609375"
          className="background: rgba(0, 0, 0, 0);"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <linearGradient
              id="editing-shiny-gradient"
              x1="0.5087262032186417"
              x2="0.49127379678135824"
              y1="0.00007615242180436521"
              y2="0.9999238475781956"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0.0" stopColor="#00ffa3" />
              <stop offset="0.5" stopColor="#03e1ff" />
              <stop offset="1.0" stopColor="#dc1fff" />
            </linearGradient>
            <linearGradient
              id="editing-shiny-gradient2"
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop offset="0.2" stopColor="#fff" stopOpacity="0.8" />
              <stop offset="0.8" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <filter
              id="editing-shiny2"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feMorphology operator="erode" radius="2" />
            </filter>
            <filter
              id="editing-shiny"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feFlood floodColor="#fff" result="flood" />
              <feConvolveMatrix
                in="SourceGraphic"
                result="conv"
                order="8,8"
                divisor="1"
                kernelMatrix="0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0"
              />
              <feOffset dx="0" dy="4" in="conv" result="offset" />
              <feComposite
                operator="in"
                in="flood"
                in2="offset"
                result="comp"
              />
              <feGaussianBlur
                in="offset"
                stdDeviation="3"
                result="shadow"
              />
              <feColorMatrix
                in="shadow"
                type="matrix"
                values="0.7 0 0 0 0  0 0.7 0 0 0  0 0 0.7 0 0  0 0 0 0.3 0"
                result="dark-shadow"
              />
              <feOffset
                dx="0"
                dy="4"
                in="dark-shadow"
                result="offset-shadow"
              />
              <feOffset dx="0" dy="2" in="conv" result="offset-2" />
              <feComposite
                operator="out"
                in="offset"
                in2="offset-2"
                result="edge-diff"
              />
              <feGaussianBlur
                in="edge-diff"
                stdDeviation="1"
                result="edge-blur"
              />
              <feColorMatrix
                in="edge-blur"
                result="edge-shadow"
                type="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
              />
              <feComposite
                operator="in"
                in="edge-shadow"
                in2="offset"
                result="edge-shadow-in"
              />
              <feOffset
                dx="0"
                dy="1"
                in="edge-shadow-in"
                result="edge-shadow-final"
              />
              <feMerge result="out">
                <feMergeNode in="offset-shadow" />
                <feMergeNode in="comp" />
                <feMergeNode in="edge-shadow-final" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#editing-shiny)">
            <g transform="translate(206.875, 88.125)">
              <path
                d="M22.50-3.75L3.75-3.75L3.75-7.50L0-7.50L0-11.25L7.50-11.25L7.50-7.50L18.75-7.50L18.75-15L3.75-15L3.75-18.75L0-18.75L0-26.25L3.75-26.25L3.75-30L22.50-30L22.50-26.25L26.25-26.25L26.25-22.50L18.75-22.50L18.75-26.25L7.50-26.25L7.50-18.75L22.50-18.75L22.50-15L26.25-15L26.25-7.50L22.50-7.50L22.50-3.75ZM37.50-3.75L30-3.75L30-30L56.25-30L56.25-26.25L37.50-26.25L37.50-18.75L52.50-18.75L52.50-15L37.50-15L37.50-3.75ZM78.75-3.75L71.25-3.75L71.25-26.25L63.75-26.25L63.75-30L86.25-30L86.25-26.25L78.75-26.25L78.75-3.75Z"
                fill="url(#editing-shiny-gradient)"
              />
            </g>
          </g>
          <g filter="url(#editing-shiny2)">
            <g transform="translate(206.875, 88.125)">
              <path
                d="M22.50-3.75L3.75-3.75L3.75-7.50L0-7.50L0-11.25L7.50-11.25L7.50-7.50L18.75-7.50L18.75-15L3.75-15L3.75-18.75L0-18.75L0-26.25L3.75-26.25L3.75-30L22.50-30L22.50-26.25L26.25-26.25L26.25-22.50L18.75-22.50L18.75-26.25L7.50-26.25L7.50-18.75L22.50-18.75L22.50-15L26.25-15L26.25-7.50L22.50-7.50L22.50-3.75ZM37.50-3.75L30-3.75L30-30L56.25-30L56.25-26.25L37.50-26.25L37.50-18.75L52.50-18.75L52.50-15L37.50-15L37.50-3.75ZM78.75-3.75L71.25-3.75L71.25-26.25L63.75-26.25L63.75-30L86.25-30L86.25-26.25L78.75-26.25L78.75-3.75Z"
                fill="url(#editing-shiny-gradient2)"
              />
            </g>
          </g>
        </svg>
        <p className="text-xs font-light text-gray-500 -ml-6">Solana Funky Trolls 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
