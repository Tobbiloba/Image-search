import React from 'react'

const ImageShow = ({ image }) => {
    // console.log(image)
    return (
        <div className=''>
            <img src={image?.urls.small} alt={image.alt_description} />
        </div>
    )
}

export default ImageShow