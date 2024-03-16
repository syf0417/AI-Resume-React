import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './multiple-resume-through-one-click.css'

const MultipleResumeThroughOneClick = (props) => {
  return (
    <div className="multiple-resume-through-one-click-container">
      <Helmet>
        <title>MultipleResumeThroughOneClick - AI Resume</title>
        <meta
          property="og:title"
          content="MultipleResumeThroughOneClick - AI Resume"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name11"></Navbar>
      <section className="multiple-resume-through-one-click-cards">
        <div className="multiple-resume-through-one-click-container1">
          <h1 className="multiple-resume-through-one-click-text">
            请输入您需要投递的岗位JD
          </h1>
          <textarea
            placeholder="placeholder"
            className="multiple-resume-through-one-click-textarea textarea"
          ></textarea>
          <textarea
            placeholder="placeholder"
            className="multiple-resume-through-one-click-textarea1 textarea"
          ></textarea>
          <button
            type="button"
            className="button multiple-resume-through-one-click-button"
          >
            添加新JD
          </button>
        </div>
      </section>
      <button
        type="button"
        className="multiple-resume-through-one-click-button1 button"
      >
        <span>
          <span>一键生成</span>
          <br></br>
        </span>
      </button>
    </div>
  )
}

export default MultipleResumeThroughOneClick
