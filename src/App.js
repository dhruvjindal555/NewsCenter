

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import Spinner from './component/Spinner';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={4} category="sports" country="in"/>
      </>
    )
  }
}

export default App;

