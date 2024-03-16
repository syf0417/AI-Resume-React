import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './ai-assistant-video.css'

const AIAssistantVideo = (props) => {
  return (
    <div className="ai-assistant-video-container">
      <Helmet>
        <title>AIAssistant-Video - AI Resume</title>
        <meta property="og:title" content="AIAssistant-Video - AI Resume" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name8"></Navbar>
      <section className="ai-assistant-video-cards">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxmZW1hbGV8ZW58MHx8fHwxNzAwMjkxMTE4fDA&amp;ixlib=rb-4.0.3&amp;w=200"
          className="ai-assistant-video-image"
        />
        <span className="ai-assistant-video-text">Alice</span>
        <button type="button" className="ai-assistant-video-button button">
          开始视频
        </button>
      </section>
      <section className="ai-assistant-video-cards1">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1701309209296-bdfe97087074?ixid=M3w5MTMyMXwwfDF8YWxsfDU5fHx8fHx8Mnx8MTcwMTQ4NTA3NHw&amp;ixlib=rb-4.0.3&amp;w=200"
          className="ai-assistant-video-image1"
        />
        <span className="ai-assistant-video-text1">Mary</span>
        <button type="button" className="ai-assistant-video-button1 button">
          开始视频
        </button>
      </section>
    </div>
  )
}

export default AIAssistantVideo
