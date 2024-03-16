import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <div className={`card-card ${props.rootClassName} `}>
      <div className="card-container">
        <div className="card-container1">
          <div className="card-container2">
            <div className="card-container3"></div>
          </div>
        </div>
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          loading="lazy"
          className="card-image"
        />
      </div>
      <div className="card-row">
        <div className="card-main">
          <div className="card-content">
            <h2 className="card-header">{props.header}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  imageAlt1: 'image',
  imageSrc1:
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY5fHxiZWF1dHl8ZW58MHx8fHwxNzAwMjgwODgzfDA&ixlib=rb-4.0.3&q=80&w=300',
  rootClassName: '',
  header: '与AI助手对话',
  imageAlt: 'image',
  imageSrc: '26bcad32-6703-4172-be97-7b8c57af3795',
}

Card.propTypes = {
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
  header: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Card
