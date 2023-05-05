import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends Component {

 static defaultsProps = {
  country : "in",
  pageSize : 6 ,
   
 }
  static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,

  }

  constructor(){
    super();
 
    this.state ={
    articles : [],
    loading : false,
    page:1,
    totalResults :0 
    }
  } 

  async updateNews (){
    this.setState({ loading:true});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34dafb44e329498e8f84249b893f125d&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ loading:false });
    this.setState({articles: parsedData.articles , totalResults : parsedData.totalResults})

  }

   async componentDidMount(){
    this.updateNews()

    // this.setState({ loading:true});
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34dafb44e329498e8f84249b893f125d&page=1&pagesize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({ loading:false});
    // this.setState({articles: parsedData.articles , totalResults : parsedData.totalResults})
    
   }
   fetchMoreData = async() =>{
    this.setState({ loading:true});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34dafb44e329498e8f84249b893f125d&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
    this.setState({ page:this.state.page+1,});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: this.state.articles.concat(parsedData.articles),
       totalResults : parsedData.totalResults ,loading:false})
   
  
   }
    // handleNextClick = async () =>{
      // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      
      //   this.setState({ loading:true});
      
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34dafb44e329498e8f84249b893f125d&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
      // let data =  await fetch(url);
      // let parsedData = await data.json()
      
    // this.setState({
    //   articles: parsedData.articles,
    //   page:this.state.page+1,
     
    //   loading:false
      
    // })
  
  // }

  // this.setState({page:this.state.page+1});
  // this.updateNews();

  //  }
  //  handlePrevClick = async () => {
  //   this.setState({ loading:true});
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34dafb44e329498e8f84249b893f125d&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
  //     let data =  await fetch(url);
  //     let parsedData = await data.json() 
  //   console.log("previous button is clicked")

  //   this.setState({
  //     page : this.state.page-1,
  //     articles: parsedData.articles,
  //    loading:false,
  //   })
    
  // this.setState({page:this.state.page-1});
  // this.updateNews();
     
  //  }
    
 

  render() {
    return (
      <div className="container my-3 ">
        <h1 className='text-center ' style={{marginTop:'90px'}}>SAGE news - TOP HEADLINES</h1>
        {this.state.loading&&<Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading&&<Spinner />}
        >
        <div className="row my-2 container ">
                {this.state.articles.map((element)=>{
                   return <div className="col-md-3 my-2 mx-3 ">
                  <NewsItem title= {element.title?element.title:""} disc={element.description?element.description:""}
                   imageUrl={element.urlToImage} newsUrl={element.url} dateTime={element.publishedAt} source={element.source.name} />
                  </div>

                })}
        
        
            
         </div>
         </InfiniteScroll>
             {/* <div className="container d-flex justify-content-between">
             <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
             <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
             </div> */}
       </div>
    ) 
  }
}