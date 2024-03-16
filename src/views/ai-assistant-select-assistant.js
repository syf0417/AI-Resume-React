import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './ai-assistant-select-assistant.css'

const AIAssistantSelectAssistant = (props) => {
  return (
    <div className="ai-assistant-select-assistant-container">
      <Helmet>
        <title>AIAssistant-SelectAssistant - AI Resume</title>
        <meta
          property="og:title"
          content="AIAssistant-SelectAssistant - AI Resume"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name5"></Navbar>
      <section className="ai-assistant-select-assistant-cards">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxmZW1hbGV8ZW58MHx8fHwxNzAwMjkxMTE4fDA&amp;ixlib=rb-4.0.3&amp;w=200"
          className="ai-assistant-select-assistant-image"
        />
        <span className="ai-assistant-select-assistant-text">Alice</span>
        <Link
          to="/ai-assistant-video"
          className="ai-assistant-select-assistant-navlink button"
        >
          开始聊天
        </Link>
      </section>
      <section className="ai-assistant-select-assistant-cards1">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQyfHxmZW1hbGV8ZW58MHx8fHwxNzAwMjkxMTE5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200"
          className="ai-assistant-select-assistant-image1"
        />
        <span className="ai-assistant-select-assistant-text1">Lucy</span>
        <button
          type="button"
          className="ai-assistant-select-assistant-button button"
        >
          开始聊天
        </button>
      </section>
      <section className="ai-assistant-select-assistant-cards2">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1605642969091-694bacbbf7d8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ4fHxmZW1hbGV8ZW58MHx8fHwxNzAwMjkxMTE5fDA&amp;ixlib=rb-4.0.3&amp;w=200"
          className="ai-assistant-select-assistant-image2"
        />
        <span className="ai-assistant-select-assistant-text2">Tina</span>
        <button
          type="button"
          className="ai-assistant-select-assistant-button1 button"
        >
          开始聊天
        </button>
      </section>
    </div>
  )
}

export default AIAssistantSelectAssistant
