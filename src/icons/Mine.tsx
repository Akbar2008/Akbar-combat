import { IconProps } from "../utils/types";

const Mine: React.FC<IconProps> = ({ size = 24, className = "" }) => {
  const svgSize = `${size}px`;

  return (
    <svg
      className={className}
      height={svgSize}
      width={svgSize}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.34278 6.56429C2.92028 6.14608 2.93385 5.46429 3.34278 5.05L3.76778 4.62143L5.04636 3.34285C5.07279 3.31821 5.101 3.28749 5.13208 3.27142C5.33722 3.10362 5.59739 3.01802 5.86209 3.03122C6.12679 3.04441 6.37715 3.15548 6.56458 3.34285L8.25388 5.03214C8.3853 5.165 8.82173 5.60358 8.94709 5.72858C9.1338 5.91614 9.24471 6.16602 9.25855 6.4303C9.27239 6.69459 9.18819 6.95469 9.02209 7.16073C8.98102 7.21001 8.57745 7.61716 8.52209 7.67144L7.67209 8.5218L7.24351 8.95038C6.84708 9.36538 6.12494 9.36574 5.72886 8.95038L3.34278 6.56429ZM2.76421 4.6175C2.551 4.36605 2.44002 4.04369 2.45325 3.71429C2.46648 3.38488 2.60295 3.07246 2.83564 2.83892C3.31064 2.36392 4.11064 2.33892 4.61779 2.76392C4.59279 2.78892 4.56422 2.81392 4.54279 2.83892L2.76421 4.6175ZM9.02566 8.17537C9.07745 8.11216 9.48638 7.72323 9.52924 7.66823L19.6164 17.7515C20.1275 18.2454 20.1282 19.1226 19.6164 19.6161C19.1221 20.1272 18.2461 20.1279 17.7521 19.6161L7.66852 9.53252C7.70066 9.50395 7.72566 9.47895 7.74709 9.45395L9.02566 8.17537ZM0.935627 11.8757C1.49388 10.3062 2.26928 8.82261 3.23921 7.46823L5.07493 9.30395C3.32921 11.3768 1.84992 13.694 0.678125 16.1301C0.617411 16.2586 0.492413 16.3336 0.356697 16.3336C0.150982 16.3365 -0.0258045 16.1486 0.00312424 15.9372C0.153461 14.5515 0.466686 13.1883 0.935627 11.8757ZM16.1268 0.678197C13.6782 1.85356 11.3863 3.3305 9.30424 5.07464C8.94816 4.71393 7.84352 3.6125 7.46851 3.23892C9.96802 1.45598 12.8821 0.342096 15.9336 0.00319419C16.3228 -0.0471632 16.4875 0.512125 16.1268 0.678197Z"
        fill="#595d61"
      />
    </svg>
  );
};

export default Mine;
