import React from 'react'

const Card = (props) => {
  return (
    <div className="ui card">
  <div className="content">
    {props.children}
  <div className="extra content">
    <span className="left floated like">
      <i className="like icon"></i>
      Beğen
    </span>
    <span className="right floated star">
      <i className="star icon"></i>
      Favorilere Ekle
    </span>
  </div>
</div>
</div>
  )
}

export default Card;