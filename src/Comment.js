import React from 'react'

 const Comment = ({avatar,fullname,daysago,star,comment}) => {
  //const {fullname,daysago,star,comment} = props;
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img alt="" src={avatar}/>
      </a>
      <div className="content">
        <a className="author" href="/">{fullname}</a>
        <div className="metadata">
          <div className="date">{daysago} days ago</div>
          <div className="rating">
            <i className="star icon"></i>
            {star} Yıldız
          </div>
        </div>
        <div className="text">
          {comment}
        </div>
      </div>
    </div>
  )
}
export default Comment;