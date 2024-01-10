import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const Input = ({ inputValue, setInputValue, handleSubmit }) => {
  return (
    <section className='input-section'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Message ChatGPT...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button><FaArrowUp /></button>
        </form>
    </section>
  )
}

export default Input