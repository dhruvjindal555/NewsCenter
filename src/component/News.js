import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = []

  constructor() {
    super();
    console.log("Helo i am constructor");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=459ebdee766c40af823c8a7615a49fc0";
    let response = await fetch(url);
    let parsedData = await response.json();
    this.setState({
      articles: parsedData.articles
    })
    console.log(this.state.articles);


  }
  render() {
    return (
      <>
        <div className='container mt-3'>
          <h1>NewsCenter - Top Headlines</h1>
          <div className='row md-4'>
            {this.state.articles.map((element) => {
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
        </div>
      </>
    )
  }
}

export default News