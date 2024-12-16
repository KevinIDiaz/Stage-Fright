import { Link } from "react-router-dom"
import mainLogo from '/Main Logo.svg'
import './NavBar.css'
import { useParams} from "react-router-dom";
export function NavBar(){
    let page=useParams();
    console.log(page);
    if (page.id=="1"){
        console.log("true");
        return(
        <div id="navbar">
            <ul id='hidden1'>
            <li><Link to = "/1/"><button>H o m e</button></Link></li>
            
            <li><Link to = "/2/Contact"><button>C o n t a c t U s !</button></Link></li>
            </ul>
            <img id='bigLogo'src={mainLogo}/>
            <ul id='hidden2'>
            <li><Link to = "/3/Merch"><button>M e r c h</button></Link></li>
            <li><Link to = "/4/Tour"><button>T o u r</button></Link></li>
            <li><Link to = "/5/About"><button>A b o u t</button></Link></li>
            </ul>
            
            </div>)
    }
    else{
        return(
        
            <div id="navbar">
            <ul>
            <li><Link to = "/1/"><button>H o m e</button></Link></li>
            
            <li><Link to = "/2/Contact"><button>C o n t a c t U s !</button></Link></li>
            </ul>
            <img id='mainLogo'src={mainLogo}/>
            <ul>
            <li><Link to = "/3/Merch"><button>M e r c h</button></Link></li>
            <li><Link to = "/4/Tour"><button>T o u r</button></Link></li>
            <li><Link to = "/5/About"><button>A b o u t</button></Link></li>
            </ul>
            
            </div>
            
    
    )
        console.log("false");
    }
    
    
}
window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("bigLogo").style.width = "10%";
        document.getElementById("bigLogo").style.margin = "1%";
        document.getElementById('navbar').style.backgroundImage='linear-gradient(#000000, rgb(0, 0, 0, 0)';
    } 
    else if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("bigLogo").style.width = "20%";
        document.getElementById("bigLogo").style.margin = "5%";

    } 
    else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("bigLogo").style.width = "60%";
        document.getElementById("bigLogo").style.margin = "10%";
       
    } 
    else {
        document.getElementById("bigLogo").style.width = "80%";
        document.getElementById("bigLogo").style.margin = "15%";
        document.getElementById('navbar').style.backgroundImage='none';
        
    }
    if(document.getElementById('bigLogo').style.width=='10%'){
        document.getElementById("hidden1").style.visibility='visible';
        document.getElementById("hidden2").style.visibility='visible';
    }
    else{
        document.getElementById("hidden1").style.visibility='hidden';
        document.getElementById("hidden2").style.visibility='hidden';

    }
    }