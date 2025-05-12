import React from 'react'
import '../styles/not_found.css'
import { Link } from 'react-router-dom'

function NotFound() {

  return (
    <div className='not-found'>
        <h1>404</h1>
<div class="cloak__wrapper">
  <div class="cloak__container">
    <div class="cloak"></div>
  </div>
</div>
<div class="info">
  <h2>We can't find that page</h2>
  <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p><Link to={'/'}>
  <span class="span-mother">
    <span>H</span>
    <span>o</span>
    <span>m</span>
    <span>e</span>
   
  </span>
  <span class="span-mother2">
    <span>H</span>
    <span>o</span>
    <span>m</span>
    <span>e</span>
   
  </span>
</Link>
</div>
    </div>
  )
}

export default NotFound