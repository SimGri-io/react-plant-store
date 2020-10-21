import React from "react";

export default function Hero({children}) {
  return <div className="hero">
    <div className="banner"> 
    <h1>When you fall short of words</h1>
  <p>flowers are never a bad idea</p>
  {children}
      </div >
      </div>
}
