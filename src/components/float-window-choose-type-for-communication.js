import React from 'react'

import PropTypes from 'prop-types'

import './float-window-choose-type-for-communication.css'

const FloatWindowChooseTypeForCommunication = (props) => {
  return (
    <div
      className={`float-window-choose-type-for-communication-container ${props.rootClassName} `}
    ></div>
  )
}

FloatWindowChooseTypeForCommunication.defaultProps = {
  rootClassName: '',
}

FloatWindowChooseTypeForCommunication.propTypes = {
  rootClassName: PropTypes.string,
}

export default FloatWindowChooseTypeForCommunication
