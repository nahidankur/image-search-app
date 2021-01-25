import React from 'react'

const ImageList = (props)=>{
    const Image = props.images.map((image)=>{
        return <img src={image.urls.small} />
    })
    return(
        <div>
         {Image}
        </div>
    )
}

export default ImageList