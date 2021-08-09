import * as React from 'react'

export const BarsIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="bars"
      className="prefix__svg-inline--fa prefix__fa-bars prefix__fa-w-14"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      />
    </svg>
  )
}

export const PlusCircleIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      overflow="visible"
      {...props}
    >
      <path
        d="M11.6 11.6V6.5h1.9v5.1h5.1v1.9h-5.1v5.1h-1.9v-5.1H6.5v-1.9h5.1z"
        fill="#fff"
      />
      <circle
        cx={12.5}
        cy={12.5}
        r={11.8}
        fill="none"
        stroke="#fff"
        strokeWidth={1.5}
      />
    </svg>
  )
}

export const PlusCircleIconDark = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={31.7}
      height={31.7}
      viewBox="0 0 31.7 31.7"
      overflow="visible"
      {...props}
    >
      <path
        d="M14.2 14.2V7.9h3.2v6.3h6.3v3.2h-6.3v6.3h-3.2v-6.3H7.9v-3.2h6.3zm1.6 17.5C7.1 31.7 0 24.6 0 15.8 0 7.1 7.1 0 15.8 0c8.7 0 15.8 7.1 15.8 15.8.1 8.8-7 15.9-15.8 15.9zm0-3.2c3.4 0 6.6-1.3 9-3.7 2.4-2.4 3.7-5.6 3.7-9 0-3.4-1.3-6.6-3.7-9-2.4-2.4-5.6-3.7-9-3.7s-6.6 1.3-9 3.7c-2.4 2.4-3.7 5.6-3.7 9s1.3 6.6 3.7 9c2.5 2.4 5.7 3.7 9 3.7z"
        fill="#544a41"
      />
    </svg>
  )
}

export const ArrowDownIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      overflow="visible"
      {...props}
    >
      <style>
        {
          '.prefix__st1{fill:none;stroke:#f7f0e6;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
        }
      </style>
      <path
        d="M29 15c0 7.7-6.3 14-14 14S1 22.7 1 15 7.3 1 15 1s14 6.3 14 14z"
        fill="none"
        stroke="#f7f0e6"
        strokeWidth={2}
      />
      <path className="prefix__st1" d="M14.8 8.5v13M9.5 16.5l5.3 5.3 5.3-5.3" />
    </svg>
  )
}
export const Divider = (props) => {
  return (
    <svg
      width="100%"
      height={25}
      className=""
      fill="none"
      viewBox="0 0 720 25"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M719.913 24.954V.073H-2v24.88h721.913z" fill="#F7F0E7" />
      <path
        d="M594.9 0h35.721l-32.726 24.966h-35.722L594.9 0zM406.842 0h35.722l-32.727 24.966h-35.722L406.842 0zM218.785 0h35.722L221.78 24.966h-35.722L218.785 0z"
        fill="#C694EA"
      />
      <path
        d="M684.192 0h35.721l-32.751 24.966h-35.697L684.192 0zM496.135 0h35.721l-32.751 24.966h-35.697L496.135 0zM308.077 0h35.722l-32.751 24.966h-35.697L308.077 0zM120.02 0h35.722l-32.751 24.966H87.293L120.02 0z"
        fill="#F9B046"
      />
      <path d="M30.727 0H66.45L33.722 24.966H-2L30.727 0z" fill="#C694EA" />
    </svg>
  )
}
