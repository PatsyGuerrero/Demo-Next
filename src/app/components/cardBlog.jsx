import React from "react"
import "./cardBlog.scss"

const PostCardPreview = ({ data }) => {
  return (
    <>
      <a className="cardBlogComponent" href={`${data.slug}`}>
        <picture className="cardBlogComponent__picture">
          <img
            src={data.image}
            width={384}
            height={180}
            className="cardBlogComponent__image"
            alt={data.title}
          />
    
        </picture>
        <span className="cardBlogComponent__metaData">
          {data.date}
        </span>
        <h3 className="cardBlogComponent__title"> {data.title}</h3>
        <p className="cardBlogComponent__paragraph">{data.extract}</p>
      </a>
    </>
  )
}

export default PostCardPreview
