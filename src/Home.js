import React from 'react'
import { Link } from 'react-router-dom'

export default () =>
  (<div>
    <h1>Welcome Home!</h1>
    <Link to="/blog">Go To Blog</Link>
  </div>)