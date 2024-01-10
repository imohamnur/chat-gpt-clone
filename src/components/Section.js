import React, { useEffect, useState } from 'react'
import clearLogo from "./images/clear-logo.png"
import regularLogo from "./images/green-logo.png"


const Section = ({ inputValue, aiResponse }) => {

    const [value, setValue] = useState(inputValue)

    return (
      <section className="main-body">
        <div className='section-div'>
          <img className="clear-pfp" src={clearLogo} alt="Clear Logo" />
          <div>
            <h3>You</h3>
            <p>{value}</p>
          </div>
        </div>

        <div className='section-div'>
          <img className="pfp" src={regularLogo} alt="Regular Logo" />
          <div>
            <h3>ChatGPT</h3>
            <p>{aiResponse}</p>
          </div>
        </div>
      </section>
    )
}

export default Section