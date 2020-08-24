import Img from 'gatsby-image'
import React, { CSSProperties, FC } from 'react'
import useImage from '../../hooks/useImage'

interface ImageProps {
  alt: string
  fileName: string
  style?: CSSProperties
  title?: string
}

const Image: FC<ImageProps> = ({ alt, fileName, title, style }) => {
  const imageSizes = useImage(fileName)
  return (
    <Img
      alt={alt}
      sizes={imageSizes ? imageSizes : 0}
      style={style}
      title={title}
    />
  )
}
export default Image
