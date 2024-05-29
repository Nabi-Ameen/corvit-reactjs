import React from 'react'

const Button = ({button}) => {
  return (
    <div>
      <button className={`${button === "fill" ? "bg-blue-500" : "border-2"} p-4 `}>button</button>
    </div>
  )
}

export default Button
