import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-5 py-3 rounded-full text-lg hover:scale-105 transition">
      {props.content}
      </button>
    </div>
  )
}

export default Button
