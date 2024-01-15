import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {
  state={
    progress: 0
  }

  apiKey= process.env.REACT_APP_NEWS_API ;
  // "459ebdee766c40af823c8a7615a49fc0"
  // 
  setProgress = (progress) => {
    this.setState({ progress : progress })
  }
  render() {
    return (
      <>
        <Router>
          <LoadingBar 
          color='#f11946'
           progress={this.state.progress}
           height={3} />
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={20} category="general" country="in" />}>
              </Route>
              <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={20} category="general" country="in" />}>
              </Route>
              <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={20} category="entertainment" country="in" />}>
              </Route>
              <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={20} category="business" country="in" />}>
              </Route>
              <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={20} category="health" country="in" />}>
              </Route>
              <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={20} category="science" country="in" />}>
              </Route>
              <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={20} category="sports" country="in" />}>
              </Route>
              <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={20} category="technology" country="in" />}>
              </Route>
            </Routes>
          </div>

        </Router>
      </>
    )
  }
}

export default App;

