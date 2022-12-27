import React from 'react'

export default function Card({name,mcolor}) {
  return (
    <div>
      <h1 style={{color:mcolor}}>this is a {name}</h1>
    </div>
  )
}
