import React from "react"
import "../sass/_titles.scss"
import "./titles.scss"
import parse from "html-react-parser"

const Titles = ({ data, style }) => {
  switch (true) {
    case style === "h2":
      return <H2 data={data} />
    case style === "h3":
      return <H3 data={data} />
    case style === "h4":
      return <H4 data={data} />
    case style === "h3Variant":
      return <H3Variant data={data} />
    default:
      return <h1>No elegiste un estilo</h1>
  }
}

const H2 = ({ data }) => {
  return <h2 className="level-one">{parse(data)}</h2>
}

const H3 = ({ data }) => {
  return <h3 className="h3">{parse(data)}</h3>
}

const H4 = ({ data }) => {
  return <h4 className="level-three">{parse(data)}</h4>
}

const H3Variant = ({ data }) => {
  return <h3 className="h3Variant">{parse(data)}</h3>
}

export default Titles
