import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps ={
    country :"in",
    pageSize:8,
    category:"general",
  }
  static propTypes ={
    country :PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  
  articles = []
  constructor() {
    super();
    console.log("Helo i am constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      disableNextClick: false
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=459ebdee766c40af823c8a7615a49fc0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    })
    let response = await fetch(url);
    let parsedData = await response.json();

    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })

    console.log(url);
  }
  handlePrevClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=459ebdee766c40af823c8a7615a49fc0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    })
    let response = await fetch(url);
    let parsedData = await response.json();
    this.setState({
      loading: false,
      page: this.state.page - 1,
      articles: parsedData.articles,


    })
    console.log(this.state.page)


  }
  handleNextClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=459ebdee766c40af823c8a7615a49fc0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    console.log(url)
    this.setState({
      loading: true,
    })
    let response = await fetch(url);
    let parsedData = await response.json();
    this.setState({
      loading: false,
      page: (this.state.page + 1),
      articles: parsedData.articles
    })
    console.log(this.state.page)


  }
  render() {
    return (
      <>

        <div className='container mt-3 h-screen'>
          <h1 className='text-center'>NewsCenter - Top Headlines</h1>
          <div className='row md-4'>
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className='col' key={element.url}>
                <NewsItem
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  desc={element.description && element.description.slice(0, 88)}
                  title={element.title && element.title.slice(0, 45)}
                />
              </div>
            })}
          </div>
          {this.state.loading && <Spinner />}
          <div className='d-flex justify-content-between mt-3 mx-5'>
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
          </div>
        </div>
      </>
    )
  }
}

export default News