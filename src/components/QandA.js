import React, { useState } from 'react'
import Section from './Section'
import Main from './Main'

const QandA = ({ inputValue, aiResponse }) => {
  return (
    aiResponse ? <Section inputValue={inputValue} aiResponse={aiResponse} /> : <Main />
  )
}

export default QandA