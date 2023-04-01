import React from 'react'
import { Link } from 'react-router-dom'
export default function Show() {
  return (
    <div>
      <Link to="/Blog1">First blog</Link><br/>
      <Link to="/Blog2">Second blog</Link><br/>
      <Link to="/Blog3">Third blog</Link><br/>
      <Link to="/Blog4">Fourth blog</Link><br/>
    </div>
  )
}
