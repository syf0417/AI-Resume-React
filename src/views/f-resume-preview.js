import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './f-resume-preview.css'

const FResumePreview = (props) => {
  return (
    <div className="f-resume-preview-container">
      <Helmet>
        <title>F-ResumePreview - AI Resume</title>
        <meta property="og:title" content="F-ResumePreview - AI Resume" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name4"></Navbar>
      <section className="f-resume-preview-cards">
        <div className="f-resume-preview-container1">
          <h1 className="f-resume-preview-text">分区修改</h1>
          <textarea
            placeholder="placeholder"
            className="f-resume-preview-textarea textarea"
          ></textarea>
        </div>
        <Link
          to="/f-information-page"
          className="f-resume-preview-navlink button"
        >
          <span>
            <span>上一步</span>
            <br></br>
          </span>
        </Link>
      </section>
      <button type="button" className="f-resume-preview-button button">
        <span>
          <span>导出简历</span>
          <br></br>
        </span>
      </button>
    </div>
  )
}

export default FResumePreview
