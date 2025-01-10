import "./Footer.css"
import mainLogo from '/Main Logo.svg'
import instagram from "/Instagram.svg"
import { Link } from "react-router-dom"
import x from '/x-logo.svg'
import spotify from '/spotify-simple.svg'
import youtube from '/Youtube.svg'
export function Footer(){
    return(
        <div id='footer'>
            <img src={mainLogo} id='footerLogo'/>
            <ul>
            <li><Link to = "1/"><button><p>Home</p></button></Link></li>
            
            <li><Link to = "2/Contact"><button><p>Contact Us!</p></button></Link></li>
            <li><Link to = "3/Merch"><button><p>Merch</p></button></Link></li>
            <li><Link to = "4/Tour"><button><p>Tour</p></button></Link></li>
            <li><Link to = "5/About"><button><p>About</p></button></Link></li>
            </ul>
            <ul id='socials'>
                <li>
                    <a><img src={instagram}/></a>
                </li>
                <li><a><img src={x}/></a></li>
                <li><a><img src={spotify}/></a></li>
                <li><a><img src={youtube}/></a></li>
                    
                
            </ul>
        </div>
    )
}