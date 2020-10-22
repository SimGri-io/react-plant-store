import React from "react";

export default function Banner({children}) {
  return <div className="banner-back">
    <div className="banner"> 
    <h1>When you fall short of words</h1>
  <p>flowers are never a bad idea</p>
  {children}
      </div >
      </div>
}
