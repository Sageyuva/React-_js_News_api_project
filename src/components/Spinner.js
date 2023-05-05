import React from 'react'
import Loading from "./loading.gif"

const  Spinner =  () => {

    return (
      <div className='text-center my-3 mx-3'>
        <img src={Loading} alt="loading" />
      </div>
    )
  }
 export default Spinner ;