import React from 'react'
import useMouseLoc from '../hooks/useMouseLoc'

export default function TestBox() {
    // const mouseLoc = useMouseLoc();
    const {x, y} = useMouseLoc();

  return (
    <div style={{height:100, width: 100, background: x > 100 ? "royalblue" : 'tomato' 
    }}>testBox</div>
  )
}
