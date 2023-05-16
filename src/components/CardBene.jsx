import Image from "next/image";


function CardBene({text, img}) {
    return ( 
        <div className="cardBene">  
            <div className="cardBene-header">
                <Image src={img} alt={text} />
            </div>
            <div className="cardBene-body">
                <p>{text}</p>
            </div>
        </div>
     );
}

export default CardBene;