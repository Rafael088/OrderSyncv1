import Link from "next/link";

function CardInfo() {
    return ( 
        <div className="info-cardInfo">
            <h2> <b>¡Transforme la gestión de pedidos en su restaurante con Osync! </b> </h2>
            <div className="cardInfo-body">
                <p>
                <b>¿Está cansado de lidiar con procesos engorrosos y errores en la gestión de pedidos de su restaurante?</b> ¡Ha llegado el momento de dar un paso hacia el futuro con <b>Osync!</b> Nuestra innovadora aplicación móvil simplifica y optimiza la gestión interna de pedidos, permitiendo a su equipo de meseros trabajar de manera más eficiente y precisa.
                </p>
                <p>
                <b>Osync</b> es la solución perfecta para restaurantes que desean mejorar su productividad y reducir costos. Al adoptar nuestra aplicación, los restaurantes pueden deshacerse de los procesos manuales y centrarse en brindar una experiencia excepcional a sus clientes. Nuestra plataforma es <b>fácil de usar</b>, intuitiva y está diseñada para satisfacer las necesidades específicas de su negocio.
                </p>

                <Link className="body-btn"  href="/servicios">
                ¡Descubra Osync Pro ahora!
                </Link>
            </div>
        </div>
     );
}

export default CardInfo;