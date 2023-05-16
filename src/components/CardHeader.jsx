import Image from "next/image";

function CardHeader() {
    return ( 
        <div className="header-cardHeader">
            <div className="cardHeader-img">
                <Image src="/OrderSyncProIcon.png" alt="OrderSync"/>
            </div>
            <div className="cardHeader-body">
                <b>OrderSync Pro</b>
                <p>Sincroniza tus sabores y eleva tu servicios</p>
            </div>
        </div>
     );
}

export default CardHeader;