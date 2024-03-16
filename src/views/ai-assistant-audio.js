import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Card from '../components/card'
import './ai-assistant-audio.css'

const AIAssistantAudio = (props) => {
  return (
    <div className="ai-assistant-audio-container">
      <Helmet>
        <title>AIAssistant-Audio - AI Resume</title>
        <meta property="og:title" content="AIAssistant-Audio - AI Resume" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name6"></Navbar>
      <section className="ai-assistant-audio-cards">
        <div className="ai-assistant-audio-container1">
          <Card
            header="语音聊天"
            imageSrc="https://images.unsplash.com/photo-1503324010925-71cfe52dad2a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHBob25lY2FsbHxlbnwwfHx8fDE3MDAyODE0NzZ8MA&amp;ixlib=rb-4.0.3&amp;w=400"
            imageSrc1="https://images.unsplash.com/photo-1503324010925-71cfe52dad2a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHBob25lY2FsbHxlbnwwfHx8fDE3MDAyODE0NzZ8MA&amp;ixlib=rb-4.0.3&amp;h=300"
            rootClassName="card-root-class-name3"
          ></Card>
          <button type="button" className="ai-assistant-audio-button button">
            选择
          </button>
        </div>
      </section>
    </div>
  )
}

export default AIAssistantAudio
