import React, { Component } from 'react'

const NewsItem = (props) => {


  let { title, desc, imageUrl, newsUrl, date, author } = props;




  return (
    <div className="card m-1" style={{ width: "18rem" }}>
      <img className="card-img-top" style={{ height: "9rem" }} src={imageUrl || "https://helios-i.mashable.com/imagery/articles/04jpBDIlj4vN0u2N8lgCWEX/hero-image.fill.size_1200x675.v1700902109.png"} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <h6 className="card-title">{author ? "Author: " + author : " "}</h6>
        <p className='card-text'><small className='text-muted'>Last updated : {new Date(date).toGMTString()}</small></p>
        <p className="card-text">{desc}...</p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read more !</a>
      </div>
    </div>
  )

}

export default NewsItem;