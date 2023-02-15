import React from 'react'
import { useEffect, useState } from 'react'
import {  Link} from 'react-scroll'
import Hero from './Hero'
const Header = () => {
    const [menuOpen, setmenuOpen] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [activeMenu,setActiveMenu]=useState('Home')
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth)
        });
        window.addEventListener('scroll', () => {
            setScrollHeight(window.scrollY)
        });
      

    }, []);
  
   const handleClick=(e)=>{
    if(e.target.innerText==="m.hasan") 
    setActiveMenu('Home')
     else setActiveMenu(e.target.innerText)
   }
    return (
        <section id="header">
            <div className={scrollHeight > 100.0 ? "header fixed-top" : 'header'}>

                <div className="container nav-Bar">
                    <div className="nav_logo">
                        <p><  Link onClick={handleClick} className="logo" to="header" smooth={true} duration
                                    ={50}    >m<span className="dot">.</span>hasan</Link></p>
                    </div>
                    {windowSize <= 992 ? <button onClick={() => setmenuOpen(!menuOpen)} className="togglebtn">{!menuOpen ? <span><i className="fa fa-bars" aria-hidden="true"></i></span> :
                        <i className="fa fa-times" aria-hidden="true"></i>}</button>
                        :
                        <div className="nav_links">
                            <ul>
                                <li> <  Link style={{color:`${activeMenu==='Home'?'#7b9dff':''}`}} onClick={handleClick}  to="header" smooth={true} duration
                                    ={50} activeClass="active"    >Home</Link></li>
                                <li > <  Link style={{color:`${activeMenu==='About'?'#7b9dff':''}`}} onClick={handleClick} to="about" smooth={true} duration
                                    ={50} activeClass="active"    >About</Link></li>
                                <li > <  Link style={{color:`${activeMenu==='Skills'?'#7b9dff':''}`}}onClick={handleClick} to="skills" smooth={true} duration
                                    ={50} activeClass="active"    >Skills</Link></li>
                                <li > <  Link style={{color:`${activeMenu==='Services'?'#7b9dff':''}`}}onClick={handleClick} to="services" smooth={true} duration
                                    ={50} activeClass="active"    >Services</Link></li>
                                <li > <  Link style={{color:`${activeMenu==='Portfolio'?'#7b9dff':''}`}}onClick={handleClick} to="portfolio" smooth={true} duration
                                    ={50} activeClass="active"    >Portfolio</Link></li>
                                <li > <  Link style={{color:`${activeMenu==='Contact'?'#7b9dff':''}`}}onClick={handleClick} to="contact" smooth={true} duration
                                    ={50} activeClass="active"    > Contact</Link></li>
                            </ul>
                        </div>
                    }
                </div>

                <div className="container  toggle-nav-Bar">
                    {menuOpen && windowSize <= 992 ?
                        <div className="toggle_nav_links">
                            <ul>
                                <li> <  Link style={{color:`${activeMenu==='Home'?'#7b9dff':''}`}}onClick={handleClick} to="header" smooth={true} duration
                                    ={50} activeClass="active"    >Home</Link></li>
                                <li > <  Link style={{color:`${activeMenu==='About'?'#7b9dff':''}`}}onClick={handleClick} to="about" smooth={true} duration
                                    ={50} activeClass="active"    >About</Link></li>
                                <li > <  Link style={{color:`${activeMenu==='Skills'?'#7b9dff':''}`}}onClick={handleClick} to="skills" smooth={true} duration
                                    ={50} activeClass="active"    >Skills</Link></li>
                                <li > <  Link style={{color:`${activeMenu==='Services'?'#7b9dff':''}`}}onClick={handleClick} to="services" smooth={true} duration
                                    ={50} activeClass="active"    >Services</Link></li>
                                <li > <  Link style={{color:`${activeMenu==='Portfolio'?'#7b9dff':''}`}}onClick={handleClick} to="portfolio" smooth={true} duration
                                    ={50} activeClass="active"    >Portfolio</Link></li>
                                <li > <  Link style={{color:`${activeMenu==='Contact'?'#7b9dff':''}`}}onClick={handleClick} to="contact" smooth={true} duration
                                    ={50} activeClass="active"    > Contact</Link></li>
                            </ul>
                        </div> : null}


                </div>
            </div>
         
           
            <Hero/>
        
        </section>
    )
}

export default Header
