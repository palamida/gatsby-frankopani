import React from "react"
import { Link } from "gatsby"
// import Header from "../components/header"
import Layout from "../components/layout"
import HeaderPic from '../images/frankopani-header.jpg'
// import "../css/style.css"
const ListLink = props => (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default () => (
<Layout title="Putovima Frankopana" headerImage={HeaderPic}>
    <h3>Objavljeni newsletteri:</h3>
    <ul>
        <ListLink to="/uvod/">Upoznajte projekt</ListLink>
        <ListLink to="/putovanje-u-potrazi-za-frankopanima/">Putovanje u potrazi za Frankopanima</ListLink>
        <ListLink to="/scoprite-il-quarnaro/">Scoprite il Quarnaro</ListLink>
        <ListLink to="/lernen-sie-den-kvarner-kennen/">Lernen Sie den Kvarner kennen</ListLink>
      </ul>
    </Layout>
)