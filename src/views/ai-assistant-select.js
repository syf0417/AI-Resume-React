import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Card from '../components/card'
import './ai-assistant-select.css'

const AIAssistantSelect = (props) => {
  return (
    <div className="ai-assistant-select-container">
      <Helmet>
        <title>AIAssistantSelect - AI Resume</title>
        <meta property="og:title" content="AIAssistantSelect - AI Resume" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <section className="ai-assistant-select-cards">
        <div className="ai-assistant-select-container1">
          <div className="ai-assistant-select-container2">
            <Card
              header="视频通话"
              imageSrc1="https://images.unsplash.com/photo-1586985564150-11ee04838034?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHZpZGVvY2FsbHxlbnwwfHx8fDE3MDAyODE0OTZ8MA&amp;ixlib=rb-4.0.3&amp;h=300"
              rootClassName="card-root-class-name1"
            ></Card>
          </div>
          <Link
            to="/ai-assistant-select-assistant"
            className="ai-assistant-select-navlink button"
          >
            选择
          </Link>
        </div>
        <div className="ai-assistant-select-container3">
          <Card
            header="文字/语音聊天"
            imageSrc="https://images.unsplash.com/photo-1503324010925-71cfe52dad2a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHBob25lY2FsbHxlbnwwfHx8fDE3MDAyODE0NzZ8MA&amp;ixlib=rb-4.0.3&amp;w=400"
            imageSrc1="https://images.unsplash.com/photo-1503324010925-71cfe52dad2a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHBob25lY2FsbHxlbnwwfHx8fDE3MDAyODE0NzZ8MA&amp;ixlib=rb-4.0.3&amp;h=300"
            rootClassName="card-root-class-name2"
          ></Card>
          <Link
            to="/ai-assistant-select-assistant"
            className="ai-assistant-select-navlink1 button"
          >
            选择
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AIAssistantSelect
