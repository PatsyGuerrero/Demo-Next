"use client";
import React, { useState, useEffect } from "react"
import useWindowDimensions from "./useWindowDimensions"

export const useImageHook = ({ data }) => {

  const { width } = useWindowDimensions()
  const [imageData, setImageData] = useState(null)

  useEffect(() => {
    switch (true) {
      case width <= 573:
        setImageData(data?.image)
        break
      case width <= 979:
        setImageData(data?.image )
        break
      case width >= 980:
        setImageData(data?.image)
        break
    }
  }, [width])

  return imageData
}
