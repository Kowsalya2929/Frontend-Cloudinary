import React, { useState } from 'react'
import './app.css'

const App = () => {

  const [loading,setLoading] = useState(false)

  const handleFileUpload = async(e) => {
    setLoading(true)
    const file = e.target.files[0]
    if(!file) return;
    const formdata = new FormData()
    formdata.append('file',file)
    formdata.append('upload_preset','ml_default')
    formdata.append('cloud_name','dqt80mvk6')
    const res = await fetch('https://api.cloudinary.com/v1_1/dqt80mvk6/image/upload',{
      method: 'POST',
      body: formdata
    })
    const uploadImageURL = await res.json()
    console.log(uploadImageURL.url)
    console.log(file)
    setLoading(false)
  }

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
          {loading ? "Uploading..." : <img src="https://img.freepik.com/free-vector/modern-download-upload-web-symbol-cloud-storage_1017-59711.jpg?semt=ais_hybrid&w=740&q=80" alt="img-upload" className='img' />}
          <input type="file" onChange={handleFileUpload} />
        </div>
      </form>
    </div>
  )
}

export default App