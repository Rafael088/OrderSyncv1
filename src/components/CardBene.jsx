import Image from "next/image";
import { BsSpeedometer2, BsPersonHeart, BsServer, BsRocketTakeoff } from "react-icons/bs";

function CardBene({text, position}) {
    return ( 
        <div className="cardBene">  
            <div className="cardBene-header">
                {
                    position === 1 ? <>
                        <BsSpeedometer2 className="icon" />
                    </>:<>
                        {
                            position === 2 ? <>
                            <BsRocketTakeoff className="icon" />
                        </>: <>
                            {
                                position === 3 ? <>
                                    <BsServer className="icon" />
                                </>: <>
                                    {
                                        position === 4 ? <>
                                            <BsPersonHeart className="icon" />
                                        </>: <>
                                            
                                        </>
                                    }
                                </>
                            }
                        </>
                        }
                    </>
                }
                
            </div>
            <div className="cardBene-body">
                <p>{text}</p>
            </div>
        </div>
     );
}

export default CardBene;