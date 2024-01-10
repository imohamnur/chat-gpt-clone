import React from 'react'
import clearLogo from "./images/clear-logo.png"

const Main = () => {
    return (
      <section className='overlay'>
        <div className='img-h2'>
          <img className="clear-main" src={clearLogo} alt="clear logo" />
          <h2>How can I help you today?</h2>
        </div>
      </section>
    )
}

export default Main