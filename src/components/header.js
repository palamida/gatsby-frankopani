import React from "react"
import styled from 'styled-components'

import logo from '../images/logo-pasica-putovima-frankopana.png'
import logoFond from '../images/logo-pasica-strukturni-fondovi.png'
import logoEU from '../images/logo-pasica-eu.png'
import logoKvarner from '../images/logo-kvarner-eng.png'



export default ({title, headerImage}) => {
    const HeaderImageDiv = styled.div`
background-color:#ce2027;
background-image: url(${headerImage});
background-size: cover;
`

return (
<header>

<HeaderImageDiv className="header-image">
        <h1 className="page-title">{title}</h1>
        </HeaderImageDiv>
    <section className="logotipi">
    <div className="logo-wrapper">
    <a href="http://www.kvarner.hr"><img className="logo logo-kvarner" src={logoKvarner} alt="Logo TZ Kvarner" /></a>
    </div>
    <div className="logo-wrapper">
        <a href="http://www.frankopani.eu"><img className="logo logo-pf" src={logo} alt="Logo Putovima Frankopana"/></a>
        </div>
        <div className="logo-wrapper">
        <a href="http://www.strukturnifondovi.hr"><img className="logo logo-fond" src={logoFond} alt="Logo Strukturni fondovi"/></a>      
        </div>
        <div className="logo-wrapper">
       
        <a href="http://www.strukturnifondovi.hr"><img className="logo logo-eu" src={logoEU} alt="Logo EU"/></a>
        </div>
    </section>
</header>
)
}