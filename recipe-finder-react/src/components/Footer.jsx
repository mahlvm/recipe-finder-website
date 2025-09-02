import "./Footer.css"
import instagram from "../assets/images/icon-instagram.svg";
import bluesky from "../assets/images/icon-bluesky.svg";
import tiktok from "../assets/images/icon-tiktok.svg";

const Footer = () => {
    return(
      <footer className='footerHome'>
        <div className='footerHomeSocial'>
            <img src={instagram} alt="Instagram" />
            <img src={bluesky} alt="Bluesky" />
            <img src={tiktok} alt="Tiktok" />
        </div>
        <span className='footerHomeText'>Made with ❤️ and 🥑</span>
    </footer>
)}

export default Footer;