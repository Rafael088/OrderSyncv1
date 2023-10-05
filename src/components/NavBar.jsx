"use client";
import Link from "next/link";
import "../style/navBar.scss"
import Image from 'next/image'
import { BsFacebook, BsInstagram, BsFillPersonFill, BsWhatsapp } from "react-icons/bs";

function NabVar() {

    return (
        <div className="contNavBar">
            <div className="contNavBar-header">
                <Image src="/OrderSync Proff.png" alt="OrderSync Pro" className="img" width={200} height={200} />
                <b>Osync</b>
            </div>
            <div className="contNavBar-body">
                <Link href="/" className="btn">Inicio</Link>
                <Link href="/servicios" className="btn">Servicios</Link>
                <Link href="/documentacion" className="btn">Documentación</Link>
                <Link href="/contacto" className="btn">Contacto</Link>
            </div>
            <div className="contNavBar-footer">
                <div className="footer-contBtns">
                    {/* <Link href="/login">
                        <BsFillPersonFill className="icon" />
                    </Link> */}
                    <a href="http://www.facebook.com" target="_black">
                        <BsFacebook className="icon" />
                    </a>
                    <a href="http://www.instagram.com" target="_black">
                        <BsInstagram className="icon" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=573148186762&text=Hola%20me%20gustar%C3%ADa%20obtener%20uno%20de%20los%20servicios%20de%20OrderSync" target="_black">
                        <BsWhatsapp className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NabVar;