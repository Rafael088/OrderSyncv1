
import { useRouter } from "next/navigation"
import { useDispatch } from 'react-redux';
import { addOrder } from "@/redux/reducers/orderSelect";
import moment from "moment/moment";
import React, { useState, useEffect } from 'react';

function CardOrders({data}) {
    const dispatch = useDispatch()
    const router = useRouter()
    const [timeLast, setTimeLast] = useState(0);
    let countList = data.listProducts.length
    useEffect(() => {
      getTime()

    }, [])
    
    function getData() {
        dispatch(addOrder(data))
        //router.push('/ordersyncPro/order')
    }
    function getTime() {
        // Obtenemos la fecha del pedido
        const fechaPedido = moment(data.createDate)

        // Obtenemos la fecha actual
        const fechaActual = moment(Date.now())

        // Calculamos la diferencia de tiempo en minutos
        setTimeLast(fechaActual.diff(fechaPedido, 'minutes'))
    }
    return ( 
        <button className="cardOrders" onClick={() => getData()}>
            <div className="card-header">
                <div className="header-info">
                    <p>{countList} Platos</p>
                </div>
                <div className="header-num">
                    <p>{data.mesa}</p>
                </div>
            </div>
            <div className="card-body">
                <p>Hace {timeLast} Minutos</p>
            </div>
        </button>
     );
}

export default CardOrders;