import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Card from '../components/card'
import './ai-assistant-text.css'

const AIAssistantText = (props) => {
  return (
    <div className="ai-assistant-text-container">
      <Helmet>
        <title>AIAssistant-Text - AI Resume</title>
        <meta property="og:title" content="AIAssistant-Text - AI Resume" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name7"></Navbar>
      <section className="ai-assistant-text-cards">
        <div className="ai-assistant-text-container1">
          <div className="ai-assistant-text-container2">
            <Card
              header="文字聊天"
              imageSrc1="https://images.unsplash.com/photo-1586985564150-11ee04838034?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHZpZGVvY2FsbHxlbnwwfHx8fDE3MDAyODE0OTZ8MA&amp;ixlib=rb-4.0.3&amp;h=300"
              rootClassName="card-root-class-name4"
            ></Card>
          </div>
          <button type="button" className="ai-assistant-text-button button">
            选择
          </button>
        </div>
      </section>
    </div>
  )
}

export default AIAssistantText
