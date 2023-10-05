import Image from "next/image";

function CardHeader() {
    return ( 
        <div className="header-cardHeader">
            <div className="cardHeader-img">
                <Image src="/OrderSyncProIcon.png" alt="OrderSync" width={200} height={200}/>
            </div>
            <div className="cardHeader-body">
                <b>Osync Pro</b>
                <p>Sincroniza tus sabores y eleva tu servicios</p>
            </div>
        </div>
     );
}

export default CardHeader;