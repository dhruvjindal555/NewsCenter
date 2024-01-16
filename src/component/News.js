import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
const News = (props) => {
  News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  }
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(true)

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    props.setProgress(10);
    let response = await fetch(url);
    props.setProgress(20);
    let parsedData = await response.json();
    props.setProgress(30);

    props.setProgress(40);
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    setArticles(parsedData.articles)
    props.setProgress(50);
    console.log(page)
    props.setProgress(60);
    props.setProgress(70);
    console.log(articles)
    props.setProgress(80);
    console.log(parsedData)
    props.setProgress(90);
    console.log(url)
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews()
  },[])

  const handlePrevClick = async () => {

    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
    // setState({
    //   loading: true,
    // })
    // let response = await fetch(url);
    // let parsedData = await response.json();
    // setState({
    //   loading: false,
    //   page: page - 1,
    //   articles: parsedData.articles,


    // })
    // console.log(page)
    setPage(page - 1)
    updateNews()


  }
  const handleNextClick = async () => {
    setPage(page + 1)
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    // console.log(url)
    // setState({
    //   loading: true,
    // })
    // let response = await fetch(url);
    // let parsedData = await response.json();
    // setState({
    //   loading: false,
    //   page: (page + 1),
    //   articles: parsedData.articles
    // })
    updateNews()
    // console.log(page)


  }
  const fetchMoreData = async () => {
    setPage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    console.log(url)
    setLoading(true)
    let response = await fetch(url);
    let parsedData = await response.json();
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    setArticles(articles.concat(parsedData.articles))
    setPage(page + 1)
    console.log("running")
  }
  return (
    <>

      <div className='container mt-3 h-screen'>
        <h1 className='text-center'>NewsCenter - Top Headlines</h1>
        <InfiniteScroll
          dataLength={articles.length} //is important field to render the next data
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }

        >

          <div className='row'>
            {!loading && articles.map((element) => {
              return <div className='col' key={element.url}>
                <NewsItem
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  desc={element.description && element.description.slice(0, 88)}
                  title={element.title && element.title.slice(0, 45)}
                  date={element.publishedAt}
                  author={element.author}
                />
              </div>
            })}
          </div>
        </InfiniteScroll>
        {/* {loading && <Spinner />} */}
        {/* <div className='d-flex justify-content-between mt-3 mx-5'>
            <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>Previous</button>
            <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next</button>
          </div> */}
      </div>
    </>
  )
}

export default News