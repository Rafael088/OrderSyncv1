import { AiOutlineCheck } from "react-icons/ai";
import '../style/cardService.scss'
function CardService({title, name, price, array, priceOri}) {
    return ( 
        <div className="service-cardService">
            <div className="cardService-header">
                <b>{title}</b>
                <p>{name}</p>
            </div>
            <div className="cardService-body">
                
                <p id="col">CO$ <b>{priceOri}</b>/mes</p>
                <p>El primer Mes</p>
                <p>CO$ <b>{price}</b>/mes</p>
                <a className="body-btn" href="https://api.whatsapp.com/send?phone=573148186762&text=Hola%20me%20gustar%C3%ADa%20obtener%20uno%20de%20los%20servicios%20de%20OrderSync" target="_black">
                ¡Lo Quiero!
                </a>
            </div>
            <div className="cardService-footer">
                <b>Obtienes</b>
                {
                    array? <>
                        {
                            array.map((element, index) => (
                                <div key={index} className="footer-content">
                                    <AiOutlineCheck className="icon"/>
                                    <p>{element}</p>
                                </div>
                            ))
                        }
                    </>:<></>
                }
            </div>
        </div>
     );
}

export default CardService;