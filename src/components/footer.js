// import React from "react"
import React, { useState } from 'react'
import { Link } from "gatsby"
import addToMailchimp from 'gatsby-plugin-mailchimp'
// import emailList from './emailList'
// import styled from 'styled-components'

import logoKvarner from '../images/logo-kvarner-eng.png'
import logoPGZ from '../images/logo-pgz.png'
import logoFrankopaniTrans from '../images/frankopani-logo-bijeli-trans.png'

function EmailListForm(props) {

  const [emailadresa, setEmail] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault()
    // console.log(emailadresa)
    // addToMailchimp(emailadresa)
    setEmail("Upisano")
  }

  const onFocusHandler = (event) => {
    console.log(event.target.placeholder)
    event.target.placeholder =''
  }

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value)
  }

  const handleDumpChange = (event) => {
    event.target.value="dump"
  }

  return (
<div id="mc_embed_signup">
  {/* <form onSubmit={handleSubmit}> */}
  <form action="https://makol.us3.list-manage.com/subscribe/post?u=e691cad92062cdb7842472a4f&amp;id=5a735664c0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>

  <div id="mc_embed_signup_scroll">
  
<div className="mc-field-group">
  <label htmlFor="mce-EMAIL">Email Address </label>
  <input type="email" value={emailadresa} onChange={handleEmailChange} name="EMAIL" onFocus={onFocusHandler} className="required email" placeholder="e-mail adresa" id="mce-EMAIL" />
</div>
  <div id="mce-responses" className="clear">
    <div className="response" id="mce-error-response" style={{ display:"none"}}></div>
    <div className="response" id="mce-success-response" style={{ display:"none"}}></div>
  </div>   
   {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
    <div style={{ position:"absolute",left:"-5000px"}} aria-hidden="true"><input type="text" name="b_e691cad92062cdb7842472a4f_5a735664c0" tabIndex="-1" onChange={handleDumpChange} value="" /></div>
    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
    </div>
</form>
</div>
  )
}

export default function footer() {
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const result = await addToMailchimp(email, listFields)
  //   // I recommend setting `result` to React state
  //   // but you can do whatever you want
  // }

  // onSubmit={this.handleSubmit(email, {listFields})} 

  return (
<footer>
<section className="footer-content">
<section className="footer-mailchimp">
{/* <!-- Begin Mailchimp Signup Form --> */}
<h4>Putevima Frankopana newsletter</h4>
<EmailListForm/>
{/* <!--End mc_embed_signup--> */}
</section>
    <section className="footer-contacs"><a href="http://www.frankopani.eu"><img className="logo-frankopani" src={logoFrankopaniTrans} alt="Logo Putovima Frankopana" /></a><p>Kulturno-turistička ruta „Putovima Frankopana“<br/><a href="http://www.frankopani.eu">www.frankopani.eu</a></p><p><Link to="/">Objavljeni newsletteri...</Link></p></section>

</section>

<section className="footer-links">
    <a href="http://www.kvarner.hr"><img className="logo-kvarner" src={logoKvarner} alt="Logo TZ Kvarner" /></a>
    <a href="https://www.pgz.hr"><img className="logo-pgz" src={logoPGZ} alt="Logo Primorsko-goranska županija" /></a>
</section>
</footer>
  )
}