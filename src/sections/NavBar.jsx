import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import "../styles/sections/navbar.css"
import { Icon } from "@iconify/react";

function NavBar({ redirect }) {

    const [ isOpen, setIsOpen ] = useState(false)

    const isMobile = useWindowSize((width, height) => {
        return (width < 580);
    });

    const handleClick = function () {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    function smoothScroll(event, element) {

        if (redirect) {
            window.location.href = event.target.href
            return
        }

        if (event)
            event.preventDefault();
        
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    }   

    return (<>
        {isMobile ? <nav className="mobile">
            <div className="visible">
                {isOpen && 
                <Icon icon={"line-md:menu-to-close-alt-transition"} onClick={handleClick} className="icon" />
                }
                {!isOpen && 
                <Icon icon={"line-md:menu"} onClick={handleClick} className="icon" />
                }
            </div>
            <div className={`appear ${isOpen ? 'open' : 'close'}`}>
                <a href="/#home" onClick={(e) => smoothScroll(e, document.querySelector('section#home'))}>Home</a>
                <a href="/#about" onClick={(e) => smoothScroll(e, document.querySelector('section#about'))}>About</a>
                <a href="/#services" onClick={(e) => smoothScroll(e, document.querySelector('section#services'))}>Services</a>
                <a href="/#contact" onClick={(e) => smoothScroll(e, document.querySelector('section#contact'))}>Contact</a>
            </div>
        </nav> : 
        <nav className="desktop">
            <div className="item">
                <a href="/#home" onClick={(e) => smoothScroll(e, document.querySelector('section#home'))}>Home</a>  
                <div className="bottom-bar"></div>  
            </div>
            <div className="item">
                <a href="/#about" onClick={(e) => smoothScroll(e, document.querySelector('section#about'))}>About</a>    
                <div className="bottom-bar"></div>  
            </div>
            <div className="item">
                <a href="/#services" onClick={(e) => smoothScroll(e, document.querySelector('section#services'))}>Services</a>    
                <div className="bottom-bar"></div>  
            </div>
            <div className="item">
                <a href="/#contact" onClick={(e) => smoothScroll(e, document.querySelector('section#contact'))}>Contact</a>    
                <div className="bottom-bar"></div>  
            </div>
        </nav>
        }
    </>
    )
}

export default NavBar;