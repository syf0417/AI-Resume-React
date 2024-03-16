import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Card from '../components/card'
import './select-communication-method.css'

const SelectCommunicationMethod = (props) => {
  return (
    <div className="select-communication-method-container">
      <Helmet>
        <title>SelectCommunicationMethod - AI Resume</title>
        <meta
          property="og:title"
          content="SelectCommunicationMethod - AI Resume"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="select-communication-method-cards">
        <div className="select-communication-method-container1">
          <div className="select-communication-method-container2">
            <Card rootClassName="card-root-class-name5"></Card>
          </div>
          <Link
            to="/ai-assistant-select"
            className="select-communication-method-navlink button"
          >
            选择
          </Link>
        </div>
        <div className="select-communication-method-container3">
          <Card
            header="手动填写"
            imageSrc="https://images.unsplash.com/photo-1579705379005-1cdcdc76f793?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHx0ZXh0fGVufDB8fHx8MTcwMDI4MTAyMXww&amp;ixlib=rb-4.0.3&amp;w=1500"
            imageSrc1="https://images.unsplash.com/photo-1579705379005-1cdcdc76f793?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHx0ZXh0fGVufDB8fHx8MTcwMDI4MTAyMXww&amp;ixlib=rb-4.0.3&amp;h=300"
            rootClassName="card-root-class-name7"
          ></Card>
          <Link
            to="/f-information-page"
            className="select-communication-method-navlink1 button"
          >
            选择
          </Link>
        </div>
        <div className="select-communication-method-container4">
          <Card
            header="一键速投"
            imageSrc="https://images.unsplash.com/photo-1579705379005-1cdcdc76f793?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHx0ZXh0fGVufDB8fHx8MTcwMDI4MTAyMXww&amp;ixlib=rb-4.0.3&amp;w=1500"
            imageSrc1="https://images.unsplash.com/photo-1655271916005-12152fe420a1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1NHx8ZmFzdHxlbnwwfHx8fDE3MDE0ODY4NzF8MA&amp;ixlib=rb-4.0.3&amp;h=300"
            rootClassName="card-root-class-name6"
          ></Card>
          <Link
            to="/multiple-resume-through-one-click"
            className="select-communication-method-navlink2 button"
          >
            选择
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SelectCommunicationMethod
