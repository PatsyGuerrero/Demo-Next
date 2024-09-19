"use client"
import React, { useEffect, useState } from "react"
import "./articlesLanding.scss"
import Titles from "./titles"
import useWindowDimensions from "../hooks/useWindowDimensions"
import PostCardPreview from "./cardBlog"

const ArticlesLanding = ({ data }) => {
  const { width } = useWindowDimensions()
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (width < 420) {
      setMessage("ver más")
    } else {
      setMessage("ver más artículos")
    }
  }, [width])

  return (
    <>
      <section className="articleBlog">
        <div className="articleBlog__container">
          <div className="articleBlog__section">
            <div className="articleBlog__hero">
              <Titles data={"Artículos del Blog"} style={"h3"} />
              <a
                href={`https://www.bancoguayaquil.com/blog/categoria/ahorro-e-inversion/`}
                className="articleBlog__verMas"
                target="_blank"
              >
                {message}
              </a>
            </div>
          </div>
          <hr />

          <div className="articleBlog__section">
            {data.post.map((item, index) => (
              <PostCardPreview data={item} key={index}/>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ArticlesLanding

