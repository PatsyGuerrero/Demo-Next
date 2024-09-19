import React from "react"
import "./paragraph.scss"
import parse from "html-react-parser"

const Paragraph = ({ data, style, align }) => {
  switch (true) {
    case style === "primary":
      return <PrimaryParagraph data={data} align={align} />
    case style === "secondary":
      return <SecondaryParagraph data={data} />
    case style === "tertiary":
      return <TertiaryParagraph data={data} />
    case style === "boldParagraph":
      return <BoldParagraph data={data} />
  }
}

const PrimaryParagraph = ({ data, align }) => {
  return (
    <>
      <div className="primaryParagraph" style={{ textAlign: align }}>
        {data}
      </div>
    </>
  )
}

const SecondaryParagraph = ({ data }) => {
  return (
    <>
      <div className="secondaryParagraph">{data}</div>
    </>
  )
}

const TertiaryParagraph = ({ data }) => {
  return (
    <>
      <div className="tertiaryParagraph">{data}</div>
    </>
  )
}

const BoldParagraph = ({ data }) => {
  return (
    <>
      <div className="boldParagraph">{data}</div>
    </>
  )
}

export default Paragraph
