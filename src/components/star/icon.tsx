import React from "react"

interface StarIconProps {
  size?: number
  strokeColor?: string
  storkeWidth?: number
  className?: string
  style?: React.CSSProperties
}

export function StarIcon({
  size = 25,
  strokeColor = "none",
  storkeWidth = 0,
  className = "star-svg",
  style = { display: "inline" },
}: StarIconProps) {
  return (
    <svg
      fill="currentColor"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className={className}
      style={{ ...style }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        stroke={strokeColor}
        strokeMiterlimit="10"
        strokeWidth={storkeWidth}
        d="M8.03281 1.27141C8.8375 -0.423802 11.1625 -0.423805 11.9672 1.27141L13.3579 4.20118C13.6774 4.87435 14.2951 5.34094 15.0096 5.44888L18.1193 5.91869C19.9187 6.19053 20.6371 8.48954 19.3351 9.80908L17.0849 12.0896C16.5679 12.6136 16.332 13.3685 16.454 14.1084L16.9852 17.3285C17.2926 19.1918 15.4116 20.6126 13.8022 19.7329L11.0208 18.2126C10.3817 17.8633 9.61825 17.8633 8.97917 18.2126L6.19776 19.7329C4.58839 20.6126 2.70742 19.1918 3.01479 17.3286L3.54599 14.1084C3.66804 13.3685 3.43211 12.6136 2.91508 12.0896L0.664875 9.80908C-0.637134 8.48954 0.0813282 6.19053 1.88066 5.91869L4.99037 5.44888C5.70489 5.34094 6.32257 4.87435 6.64211 4.20118L8.03281 1.27141Z"
      />
    </svg>
  )
}