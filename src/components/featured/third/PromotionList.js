import React, {Component} from 'react';
import Promotion from './Promotion';
import './Promotion.css'

const PromotionList = (props) => {

    const {blogs} = props;

    return (
      <div className="FeatureThirdList">
          <div className="PromotionList">
            {blogs.map(blog => {
              return (
                <Promotion
                  key={blog._id} 
                  blog={blog}/>
            )
            })}
        </div>
      </div>
    );

}

export default PromotionList;
