import React from "react"
import Header from "./header"
import Footer from "./footer"

export default ({ title, headerImage, children }) => (
  <div className="page" style={{ margin: 0}}>
      <Header title={title} headerImage={headerImage}/>

    <div className="main">
    {children}
    </div>
    <Footer/>
  </div>
)