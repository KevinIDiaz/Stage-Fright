import { Link } from "react-router-dom"
import mainLogo from '/Main Logo.svg'
import './NavBar.css'
export function NavBar(){
    return(
        
            <div id="navbar">
            <ul>
            <li><Link to = "/"><button>Home</button></Link></li>
            <li><Link to = "/About"><button>About</button></Link></li>
            </ul>
            <img id='mainLogo'src={mainLogo}/>
            <ul>
            <li><Link to = "/Merch"><button>Merch</button></Link></li>
            <li><Link to = "/Tour"><button>Tour</button></Link></li>
            </ul>
            
            </div>
            
    
    )
}