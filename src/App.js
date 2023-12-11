

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {
  render() {


    return (
      <>
        <Router>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<News key="general" pageSize={20} category="general" country="in" />}>
              </Route>
              <Route path="/general" element={<News key="general" pageSize={20} category="general" country="in" />}>
              </Route>
              <Route path="/entertainment" element={<News key="entertainment" pageSize={20} category="entertainment" country="in" />}>
              </Route>
              <Route path="/business" element={<News key="business" pageSize={20} category="business" country="in" />}>
              </Route>
              <Route path="/health" element={<News key="health" pageSize={20} category="health" country="in" />}>
              </Route>
              <Route path="/science" element={<News key="science" pageSize={20} category="science" country="in" />}>
              </Route>
              <Route path="/sports" element={<News key="sports" pageSize={20} category="sports" country="in" />}>
              </Route>
              <Route path="/technology" element={<News key="technology" pageSize={20} category="technology" country="in" />}>
              </Route>
            </Routes>
          </div>

        </Router>
      </>
    )
  }
}

export default App;

