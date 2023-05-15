function ListProducts({data, index}) {
    const attributesList = Object.keys(data.attributes).map((key) => (
        <p key={`${index}-${key}`}>
          {key}: <b>{data.attributes[key]}</b>
        </p>
      ));
    return ( 
        <div className="listProducts">
            <p id="header">Plato: {index + 1}</p>
            <p>
                Categoria: <b>{data.category}</b>
            </p>
            <p>
                Precio: <b>${data.price}</b>
            </p>
            {attributesList}
        </div>
     );
}

export default ListProducts;