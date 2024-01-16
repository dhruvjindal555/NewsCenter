import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App =()=> {
  const [progress, setProgress] = useState(0)

  
  const [apiKey] = useState(process.env.REACT_APP_NEWS_API)
  // "459ebdee766c40af823c8a7615a49fc0"
  // 
    return (
      <>
        <Router>
          <LoadingBar 
          color='#f11946'
           progress={progress}
           height={3} />
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={20} category="general" country="in" />}>
              </Route>
              <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={20} category="general" country="in" />}>
              </Route>
              <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={20} category="entertainment" country="in" />}>
              </Route>
              <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={20} category="business" country="in" />}>
              </Route>
              <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={20} category="health" country="in" />}>
              </Route>
              <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={20} category="science" country="in" />}>
              </Route>
              <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={20} category="sports" country="in" />}>
              </Route>
              <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={20} category="technology" country="in" />}>
              </Route>
            </Routes>
          </div>

        </Router>
      </>
    )
  }

export default App;

