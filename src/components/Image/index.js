import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
/* eslint-disable */

const Image = ({ className, src, alt, width, height }) => {
  const [load, setLoad] = useState(false)

  return (
    <InView
      as="div"
      {...{ className }}
      onChange={(inView) => {
        if (inView) setLoad(true)
      }}
    >
      {load ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />
      ) : null}
    </InView>
  )
}

export default Image
