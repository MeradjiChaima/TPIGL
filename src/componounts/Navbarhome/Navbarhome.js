import React , { useState }  from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../images/logo.png';
import Modal from './Modal' ; 
import './Navbarhome.css' ; 
function Navbarhome() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className = "navbar">
      <div className="navbar-links">
        <div className="logo">
        <img src={logo} />   
        </div>
        <div className="navbar-links_container">
          <p><a href="/apropos">A propos</a></p>
          <p><a href="/aide">Aide</a></p>  
        <div className="navbar-sign">
      <div className="navbar-signin"> 
      <button type="button" className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}>
          S'inscrire
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
      <div className="navbar-signup"> 
      <button type="button">Connexion</button>
      </div>
      </div>
        </div>
      </div>
      
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#053070" size={30} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#053070" size={30} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
          <p><a href="/apropos">A propos</a></p>
          <p><a href="/aide">Aide</a></p>  
          </div>
          <div className="navbar-menu_container-links-sign">
             <div className="navbar-menu_container-links-signin"> 
               <button type="button">S'inscrire</button>
             </div>
             <div className="navbar-menu_container-links-signup"> 
               <button type="button">Connexion</button>
             </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbarhome
