import React from 'react'

const TerminalStatic = ({ lines = [], title = 'Terminal' }) => {

  const offset = 55
  const lineHeight = 16

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 127 600 375">
      <g fill="none" fillRule="evenodd">
        <path fill="#000" d="M0 151h600v500H0z"/>
        <text fill="#FFF" fontFamily='"Roboto Mono", Menlo, Consolas, monospace' fontSize="12" letterSpacing="0" transform="translate(0 127)">
          {lines.map((line, index) => <tspan key={index} x="20" y={offset + index * lineHeight}>{line}</tspan>)}
        </text>
        <g transform="translate(0 127)">
          <rect width="600" height="24" fill="#F2F2F2" rx="6"/>
          <ellipse cx="12.5" cy="12.5" fill="#E96E4C" rx="5.5" ry="5.5"/>
          <path fill="#E6AA34" d="M30.5 18c3 0 5.5-2.5 5.5-5.5S33.5 7 30.5 7 25 9.5 25 12.5s2.5 5.5 5.5 5.5z"/>
          <ellipse cx="48.5" cy="12.5" fill="#85C33D" rx="5.5" ry="5.5"/>
          <text fill="#727272" fontSize="12" letterSpacing="0">
            <tspan x="276.2" y="17">{title}</tspan>
          </text>
        </g>
      </g>
    </svg>
  )
}

export default TerminalStatic
