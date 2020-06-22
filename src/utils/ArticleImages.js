import React from 'react';

export function ArticleImages(content) {
    let images = [];
    content.blocks.forEach(block => {
        let type = block.type;
        let data = block.data;
        if(type === 'image'){
            images.push(data.url)
        }
    })
    return images;
}