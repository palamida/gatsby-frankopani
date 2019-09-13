import React from "react"
// import styled from 'styled-components'
import Img from "gatsby-image"
import "../css/objekt.css"

export default ({node}) => {
    let featuredImgFluid = node.frontmatter.previewSlika.childImageSharp.fluid
    // const ObjektImage = styled.div`
    // background-color:#ce2027;
    // background-image: url(${featuredImgFluid.src});
    // background-size: cover;
    // height: 200px;
    // `
    return (
        <article className="objekt">
            {/* <ObjektImage /> */}
            <section className="objekt-slika">
                <Img fluid={featuredImgFluid} />
                <div className="objekt-rednibroj">{node.frontmatter.rednibroj}</div>
            </section>
           <section className="objekt-opis">
                <h3 className="objekt-opis-title">{node.frontmatter.title}</h3>
                <h4 className="objekt-opis-podnaslov">{node.frontmatter.podnaslov}</h4>
                {/* <p>{node.frontmatter.previewSlika.childImageSharp.fluid.src}</p> */}
                <div className="objekt-opis-tekst" dangerouslySetInnerHTML={{ __html: node.html }} />
            </section> 
        

    </article>
    )
}
