import React from "react"
import Img from "gatsby-image"

export default ({slika}) => {
 let slikaprikaz=slika.childImageSharp.fluid
return (
    <div className="galerija-slika">
<Img fluid={slikaprikaz} />
</div>
)
}