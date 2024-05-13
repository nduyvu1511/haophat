export const PhotoIcon = ({ className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        d="M21 13L18.061 10.8839C16.5338 9.78434 14.4467 9.89798 13.0479 11.1569L8.95209 14.8431C7.55331 16.102 5.4662 16.2157 3.93901 15.1161L1 13M5 21H17C19.2091 21 21 19.2091 21 17V5C21 2.79086 19.2091 1 17 1H5C2.79086 1 1 2.79086 1 5V17C1 19.2091 2.79086 21 5 21ZM10 7.5C10 8.88071 8.88071 10 7.5 10C6.11929 10 5 8.88071 5 7.5C5 6.11929 6.11929 5 7.5 5C8.88071 5 10 6.11929 10 7.5Z"
        stroke={'currentColor'}
        strokeLinecap="round"
      />
    </svg>
  )
}
