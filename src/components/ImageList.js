import React from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'

const ImageList = (props)=>{
    const Image = props.images.map((image)=>{
        return <ImageCard  key={image.id} image={image}  />
    })
    return(
        <div className='image-list'>
         {Image}
        </div>
    )
}

export default ImageList