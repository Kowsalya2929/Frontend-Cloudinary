import React from 'react'
import './app.css'

const App = () => {
  return (
    <div className='wrapper'>
      <h1 className='img1'>Image Uploader for fun</h1>
      <br />
      <form action="" className='form1'>
        <div className='face'>
          <div className='eye1'>
            <div className="eye-white1"></div>
          </div>
          <div className='eye2'>
            <div className="eye-white2"></div>
          </div>
        </div>
        <div className='mouth'>
          <input type="file" />
          <button type='button'>Upload Image</button>
        </div>
      </form>
    </div>
  )
}

export default App