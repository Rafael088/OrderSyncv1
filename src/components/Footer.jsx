import '../style/footer.scss'
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
function Footer() {
    return ( 
        <div className="Footer">
            <b>Si tienes alguna duda del producto o del servicio comunicate con nuestras redes oficiales.</b>
            <div className='footer-redes'>
                <a href="http://www.facebook.com" target="_black">
                    <BsFacebook className="icon" />
                </a>
                <a href="http://www.instagram.com" target="_black">
                    <BsInstagram className="icon" />
                </a>
                <a href="http://www.instagram.com" target="_black">
                    <BsWhatsapp className="icon" />
                </a>
            </div>
            <div className='footer-redes'>
                <p>+57 3148186762</p>
                <p>Colombia - Manizales, Caldas</p>
            </div>
            <p>Osync es marca registrada con todos los derechos reservados 2023.</p>
            <p>Desarrollado por <a href="https://digitalempower.vercel.app/" target='_black'><b>Digital Empower GEN</b></a></p>
        </div>
     );
}

export default Footer;