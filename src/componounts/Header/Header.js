import React from 'react'
import './Header.css'
import home from '../../images/image.png'
function Header() {
  return (
    <div className="header section__padding">
    <div className="header-content">
    
      <h1 className="gradient__text">AQAR, Votre partenaire immobilier privilégié</h1>
      <p>le site des annonces qui vous facilite l'échange, la vente, la location ou la locatin pour vacances de votre bien immobilier</p>
      <div className="reseausocioaux">
        <p>RETROUVEZ-NOUS SUR</p>
       </div>  
       </div> 
        <div className="header-image">
           <img src={home} />
          </div>
      </div>
  )

}

export default Header
