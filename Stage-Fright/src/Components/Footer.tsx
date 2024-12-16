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
            <li><Link to = "1/"><button>H o m e</button></Link></li>
            
            <li><Link to = "2/Contact"><button>C o n t a c t U s !</button></Link></li>
            <li><Link to = "3/Merch"><button>M e r c h</button></Link></li>
            <li><Link to = "4/Tour"><button>T o u r</button></Link></li>
            <li><Link to = "5/About"><button>A b o u t</button></Link></li>
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