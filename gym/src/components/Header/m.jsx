import './navbar.css'
import logo from './logg.PNG'
import { useState } from 'react'

const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
    
}
        setIsMenuClicked(!isMenuClicked)
    }



  return (
    <div>
       <nav>
       <img className='logo' src={logo} alt="logo" />

                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>

                </div>

                <ul className='nav-list'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Product</li>
            <li className='nav-item'>Contact</li>
        </ul>

            </nav>

  
       

    <div className={menu_class}>
    <ul className=' mobile-nav-list'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Product</li>
            <li className='nav-item'>Contact</li>
        </ul>
    </div>
      
    </div>
  )
}

export default Navbar
