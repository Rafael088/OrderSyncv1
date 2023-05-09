

function CardBene({text, img}) {
    return ( 
        <div className="cardBene">  
            <div className="cardBene-header">
                <img src={img} alt={text} />
            </div>
            <div className="cardBene-body">
                <p>{text}</p>
            </div>
        </div>
     );
}

export default CardBene;