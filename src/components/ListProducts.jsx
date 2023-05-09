function ListProducts({data, index}) {
    return ( 
        <div className="listProducts">
            <p id="header">Plato: {index + 1}</p>
            <p>
                Arroz: <b>{data.Arroz}</b>
            </p>
            <p>
                Proteina: <b>{data.Plato}</b>
            </p>
            <p>
                Sopa: <b>{data.Sopa}</b>
            </p>
            <p>
                Jugo: <b>{data.Jugo}</b>
            </p>
            
            <p>
                Tipo: <b>{data.tipo}</b>
            </p>
            <p>
                Precio: <b>${data.price}</b>
            </p>
        </div>
     );
}

export default ListProducts;