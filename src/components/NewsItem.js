import React from 'react'

const NewsItem = (props) => {

  


  
  let{title , disc , imageUrl , newsUrl, dateTime , source} =  props
    return (
      <div>
        <div className="card" style={{width:"18rem"}}>
          <span className='position-absolute top-0 translate-midlle badge rounded-pill bg-danger'> {source} </span>
            <img src={imageUrl?imageUrl:"https://tse2.mm.bing.net/th?id=OIP.L238H9ExiZ8M5CICSidRSgHaEV&pid=Api&P=0"} className="card-img-top" alt="..." />
           <div className="card-body">
           <h5 className="card-title">{title}...</h5>
           <p className='card-text'>{dateTime}</p>
             <p className="card-text">{disc}...</p>
             <a  rel="noreferrer" href={newsUrl} target="_blank" className='btn btn-danger btn-sm'> read more</a>
  </div>
</div>
      </div>
    )
  }

  export default NewsItem ;