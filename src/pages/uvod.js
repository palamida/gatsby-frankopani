import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Objekt from "../components/objekt"
import Slika from "../components/slika"
import HeaderPic from '../images/frankopani-news1-header.jpg'
import grafizam from '../images/pasica-ikone.png'
import mapa from '../images/mapa-objekti-frankopani.png'

export default ({data}) =>
<Layout title="Kulturno-turistička ruta „Putovima Frankopana“" headerImage={HeaderPic}>
<article className="article-text">
<p>Povijest Krčkih knezova Frankopana trajala je vi&scaron;e od pet i pol stoljeća: članovi ove velika&scaron;ke obitelji bili su nositelji političkog, dru&scaron;tvenog, gospodarskog i kulturnog razvoja na svojim prostorima, prvenstveno na području dana&scaron;nje hrvatske regije Kvarner.</p>
<p>Frankopani su sudjelovali u brojnim bitkama, a snalažljivost, obrazovanje, diplomacija, te prije svega želja za očuvanjem vlastitih posjeda, održali su ovu obitelj stoljećima. Iza njih su do dana&scaron;njih dana ostali brojni ka&scaron;teli, utvrđeni gradovi i dvorci koji prizivaju duh pro&scaron;losti, intriga, sukoba, kulture, pismenosti i religioznosti.</p>
<img className="slika-grafizam" src={grafizam} alt="Grafika Frankopani"/>
<h2>Obitelj Frankopan</h2>
<p>Doba u kojem su djelovali Krčki knezovi Frankopani bilo je doba srednjeg vijeka i prijelaza u novi vijek. Srednji vijek u Europi bio je feudalno doba, a moć kraljevskih dvorova bila je ograničena u usporedbi s moći feudalaca &ndash; lokalnih veleposjednika poput Frankopana.</p>
<p>Članovi obitelji Frankopan obna&scaron;ali su važne dru&scaron;tvene i političke dužnosti &ndash; bili su kneževi, banovi, potkraljevi i ratnici, podupiratelji umjetnosti i pjesnici, a na kraju i politički prevratnici, pa su tako njihovi životi bili inspiracija mnogim umjetnicima. Uživali su ugled među europskim plemstvom, primali priznanja za zasluge od pape u Rimu, sklapali obiteljske i prijateljske veze &scaron;irom Europe, pratili su modu, osnivali brojne tiskare i promicali hrvatsku riječ i pismo- glagoljicu. U njihovoj lozi bilježi se niz od 114 Frankopana u 17 nara&scaron;taja. Tijekom povijesti koristili su dva grba - stari sa &scaron;estokrakom zvijezdom na crvenom polju, a potom grb rimske patricijske obitelji de Frangepanibus s dva lava koja lome kruh.</p>
<section className="slike-galerija">
{ data.slikeuvod.edges.map(({node}) => (
  <Slika slika={node} />
)
)
}
</section>
<p>Zlatno doba obitelji Frankopan bilo je doba kneza Nikole IV u 15. stoljeću. Nakon njega, brojni su uzroci doveli do slabljenja utjecaja obitelji, a među njima i osmanlijska osvajanja i prevlast Habsbur&scaron;ke dinastije nad prostorima Hrvatske i Ugarske.<br />Urota zrinsko-frankopanska, kojom su se Fran Krsto Frankopan i Petar Zrinski poku&scaron;ali oduprijeti nastojanjima Bečkog dvora da se Hrvatskoj i Ugarskoj nametne centralizam i apsolutizam, obilježila je kraj ove plemićke obitelji. Urotnici su 1671. godine pogubljeni u Bečkom Novom Mjestu. Prije smaknuća dvojice velika&scaron;a, obitelj je li&scaron;ena plemstva, a sva imanja su im zaplijenjena. Kako je Fran Krsto Frankopan bio posljednji mu&scaron;ki član obitelji, njegovom smrću prestaje loza hrvatskih Frankopana.</p>
<p>Iako utjecaji Frankopana sežu mnogo dalje, ishodi&scaron;te njihove moći je regija Kvarner u kojoj se nalazi glavnina njihove ba&scaron;tine. Kulturno-turistička ruta &bdquo;Putovima Frankopana&ldquo; obuhvaća 17 ka&scaron;tela, utvrđenih gradova i dvoraca i 3 sakralna kompleksa. Ruta se dijeli u četiri teritorijalne cjeline koje nagla&scaron;avaju raznovrsnost krajolika regije Kvarner, a to su otok Krk, Gorski kotar, Rijeka s okolicom i Vinodol.</p>
</article>
<p className="mapa-wrapper">
  <img className="slika-mapa" src={mapa} alt="Mapa s pozicijama objekata"/>
</p>

<section className="objekti"> 
    {data.objektiuvod.edges.map(({node}) => (
        <Objekt node={node} />
    )
    )}
</section>
</Layout>


export const query = graphql`
{
  objektiuvod: allMarkdownRemark (sort: {order: ASC, fields: frontmatter___rednibroj}) {
    edges {
      node {
        frontmatter {
          path
          title
          podnaslov
          rednibroj
          previewSlika {
            childImageSharp {
              fluid(sizes: "960px") {
                ...GatsbyImageSharpFluid
                src
              }
            }
          }
        }
        html
      }
    }
  }
    slikeuvod: allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "uvod"}}) {
      edges {
        node {
          childImageSharp {
            fluid(srcSetBreakpoints: [680, 960], maxWidth:960) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
}
`
