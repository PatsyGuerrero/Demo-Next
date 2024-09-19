"use client"
import React from "react"
import useWindowDimensions from "../hooks/useWindowDimensions"
import "./image.scss"

function Image({ data }) {
  console.log(data, 'data')
  const { width } = useWindowDimensions()
  // const metaData = {
  //   src: notFoundImage,
  //   alt: "Imagen No Encontrada - Banco Guayaquil",
  //   title: "Imagen No Encontrada - Banco Guayaquil",
  // }

  return (
    <>
      <img
        alt='not found'
        src={data}
        title="not found"
        className="imageComponent"
        
      />
    </>
  )
}

export default Image
