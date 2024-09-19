"use client"
import React from "react"
import "./productCard.scss"
// import parse from "html-react-parser"
import Titles from "./titles"
import Paragraph from "./paragraph"
// import Item from "../../ui-kit/item"
// import LinkItem from "../../ui-kit/link"
import Image from "../components/image"
// import { InViewObserver } from "../../../hooks/useInView"
// import ButtonPrimary from "../../../components/buttons/buttonPrimary"
import { useImageHook } from "../hooks/useImageHook"

const ProductCard = ({ data }) => {
  switch (true) {
    case data?.model === "first":
      return <ProductCardFirst data={data} />
      break

    default:
      return ''
  }
}

const ProductCardLayout = ({ children }) => {
  return (
    <>
      <section className="cardContentLayout">
        <div className="cardContentLayout__container">{children}</div>
      </section>
    </>
  )
}

const ProductCardFirst = ({ data }) => {
  const imageData = useImageHook({ data });

  console.log(imageData, 'imageData')
  const InformationSection = ({ data }) => {
    return (
      <div id="info" className="cardContentPrimary__section">
   
        <Titles data={data.title} style={"h2"} />
        <Paragraph data={data.paragraph} style="primary"/>
        {/* {data?.button && <ButtonPrimary data={data?.button} />} */}
      </div>
    )
  }

  const ImageSection = ({ data}) => {
    return (
      <div id="image" className="cardContentPrimary__section">
   
          { <Image data={data} className="cardContentPrimary__image" /> }
      </div>
    )
  }

  if (data.left) {
    return (
      <ProductCardLayout>
        <InformationSection data={data} />
        <ImageSection data={imageData} />
      </ProductCardLayout>
    )
  }
  return (
    <>
      <ProductCardLayout>
        <ImageSection data={imageData}/>
        <InformationSection data={data} />
      </ProductCardLayout>
    </>
  )
}

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
}

export default ProductCard

