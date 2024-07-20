export function UISpinner({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="0" fill="currentColor">
        <animate
          id="svgSpinnersPulseMultiple0"
          fill="freeze"
          attributeName="r"
          begin="0;svgSpinnersPulseMultiple2.end"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        />
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="0;svgSpinnersPulseMultiple2.end"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </circle>
      <circle cx="12" cy="12" r="0" fill="currentColor">
        <animate
          id="svgSpinnersPulseMultiple1"
          fill="freeze"
          attributeName="r"
          begin="svgSpinnersPulseMultiple0.begin+0.2s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        />
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinnersPulseMultiple0.begin+0.2s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </circle>
      <circle cx="12" cy="12" r="0" fill="currentColor">
        <animate
          id="svgSpinnersPulseMultiple2"
          fill="freeze"
          attributeName="r"
          begin="svgSpinnersPulseMultiple0.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        />
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinnersPulseMultiple0.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </circle>
    </svg>
  );
}
