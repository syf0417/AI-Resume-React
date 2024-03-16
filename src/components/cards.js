import React from 'react'

import PropTypes from 'prop-types'

import './cards.css'

const Cards = (props) => {
  return (
    <section className={`cards-cards ${props.rootClassName} `}>
      <div className="cards-container">
        <span className="cards-text">{props.text}</span>
        <span className="cards-text1">{props.text1}</span>
      </div>
      <div className="cards-container1">
        <textarea
          placeholder={props.textareaPlaceholder}
          className="cards-textarea textarea"
        ></textarea>
        <textarea
          placeholder={props.textareaPlaceholder1}
          className="cards-textarea1 textarea"
        ></textarea>
      </div>
    </section>
  )
}

Cards.defaultProps = {
  text1: '主修课程',
  rootClassName: '',
  textareaPlaceholder1: 'placeholder',
  textareaPlaceholder: 'placeholder',
  text: '获奖记录',
}

Cards.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  textareaPlaceholder1: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  text: PropTypes.string,
}

export default Cards
