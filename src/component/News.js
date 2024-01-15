import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
import LoadingBar from 'react-top-loading-bar'
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  articles = []
  constructor() {
    super();
    console.log("Helo i am constructor");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      disableNextClick: false,
      totalResults:0
    }
  }

  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    })
    this.props.setProgress(10);
    let response = await fetch(url);
    this.props.setProgress(20);
    let parsedData = await response.json();
    this.props.setProgress(30);
    
    this.props.setProgress(40);
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
    this.props.setProgress(50);
    console.log(this.state.page)
    this.props.setProgress(60);
    this.props.setProgress(70);
    console.log(this.state.articles)
    this.props.setProgress(80);
    console.log(parsedData)
    this.props.setProgress(90);
    console.log(url)
    this.props.setProgress(100);
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true,
    // })
    // let response = await fetch(url);
    // let parsedData = await response.json();

    // this.setState({
    //   loading: false,
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults
    // })
    this.updateNews()
    // console.log(url);
  }
  handlePrevClick = async () => {

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true,
    // })
    // let response = await fetch(url);
    // let parsedData = await response.json();
    // this.setState({
    //   loading: false,
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,


    // })
    // console.log(this.state.page)
    this.setState({
      page: this.state.page + 1
    })
    this.updateNews()


  }
  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1
    })
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // console.log(url)
    // this.setState({
    //   loading: true,
    // })
    // let response = await fetch(url);
    // let parsedData = await response.json();
    // this.setState({
    //   loading: false,
    //   page: (this.state.page + 1),
    //   articles: parsedData.articles
    // })
    this.updateNews()
    // console.log(this.state.page)


  }
  fetchMoreData=async ()=>{
    this.setState({
      page: this.state.page + 1
    }) 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    console.log(url)
    this.setState({
      loading: true,
    })
    let response = await fetch(url);
    let parsedData = await response.json();
    this.setState({
      totalResults:parsedData.totalResults,
      loading: false,
      page: (this.state.page + 1),
      articles: this.state.articles.concat(parsedData.articles)
    })
    console.log("running")
  }
  render() {
    return (
      <>

        <div className='container mt-3 h-screen'>
          <h1 className='text-center'>NewsCenter - Top Headlines</h1>
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            
          >
            
            <div className='row'>
              {!this.state.loading && this.state.articles.map((element) => {
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
          {/* {this.state.loading && <Spinner />} */}
          {/* <div className='d-flex justify-content-between mt-3 mx-5'>
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
          </div> */}
        </div>
      </>
    )
  }
}

export default News