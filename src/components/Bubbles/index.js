import React from 'react'

const Bubbles = ({reverse}) => {
  return (
    <svg className={`babelki ${reverse === true ? 'odwroc' : ''}`}
      width={58}
      height={41}
      viewBox="0 0 58 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: "soft-light" }}>
        <circle
          cx="9.4706"
          cy="9.4706"
          r="9.4706"
          transform="matrix(-1 0 0 1 57.0386 0.133057)"
          fill="#D9D9D9"
        />
      </g>
      <g style={{ mixBlendMode: "soft-light" }}>
        <circle
          cx="7.10295"
          cy="7.10295"
          r="7.10295"
          transform="matrix(-1 0 0 1 30.7781 18.8176)"
          fill="#D9D9D9"
        />
      </g>
      <g style={{ mixBlendMode: "soft-light" }}>
        <circle
          cx="3.55147"
          cy="3.55147"
          r="3.55147"
          transform="matrix(-1 0 0 1 7.25659 33.0237)"
          fill="#D9D9D9"
        />
      </g>
    </svg>
  )
}

export default Bubbles
