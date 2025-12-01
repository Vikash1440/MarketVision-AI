import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className='container'>
         <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock Prediction Portal</h1>
          <p className='text-light lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus officia modi dolor sint at aliquid est, quidem ex cupiditate pariatur quam distinctio praesentium provident corporis saepe tempore veniam veritatis.</p>
          <Button text="Login" class="btn-outline-info"/>
         </div>
      </div>
    </>
  )
}

export default Main
