import React from "react";
import loading from '../assets/load.gif'

export default function Loading() {
  return (
  <div className="loading"><h2>Loading</h2>
  <img src={loading} alt="loading gif" style={{width: "50px"}}/>
  </div>
  )
}
