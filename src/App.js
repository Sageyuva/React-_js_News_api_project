import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
import { Route, Routes  } from "react-router-dom";

export default class App extends Component {


  render() { 

    this.pageSizeg = 6;
  
    return (
      <>
      <NavBar />
     <Routes>
     <Route exact  path="/" element={<News  key='general' pageSize={this.pageSizeg} country={"in"} category="general" />} />
     <Route exact path="/business" element={<News key='business' pageSize={this.pageSizeg} country={"in"} category="business" />} />
     <Route exact path="/entertainment" element={<News key='entertainment' pageSize={this.pageSizeg} country={"in"} category="entertainment" />} />
     <Route exact path="/health" element={<News key='health' pageSize={this.pageSizeg} country={"in"} category="health" />} />
     <Route exact path="/science" element={<News key='science' pageSize={this.pageSizeg} country={"in"} category="science" />} />
     <Route exact path="/sports" element={<News key='sports' pageSize={this.pageSizeg} country={"in"} category="sports" />} />
     <Route exact path="/technology" element={<News key='technology' pageSize={this.pageSizeg} country={"in"} category="technology" />} />

   
     </Routes>
   
   </>
    )
  }
}
