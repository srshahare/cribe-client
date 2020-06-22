import React from 'react';
import './Publish.css';

const PublishImageList = (props) => {

    const {images} = props;

    return(
        <div className='PublishImageList'>
            {images.map((image, i) => {
                return (
                    <img 
                        key={i}
                        onClick={() => props.clickPreview(image)}
                        src={image} alt={image}></img>
                )
            })}
        </div>
    )
}

export default PublishImageList;