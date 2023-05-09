
import { useDispatch } from 'react-redux';
import { deleteOrder } from "@/redux/reducers/orderSelect";
import { useSelector } from "react-redux"
import moment from "moment/moment";
import React, { useState, useEffect } from 'react';
import ListProducts from './ListProducts';

function OrderSelect() {
    const dispatch = useDispatch()
    const [timeLast, setTimeLast] = useState(0);
    const [price, setPrice] = useState(0);
    const {orderSelect} = useSelector((state) => state.orderSelect)
    let countList = orderSelect.listProducts.length
    useEffect(() => {
      getTime()
      getPrice()
    }, [])
    
    function goBack() {
        dispatch(deleteOrder())
    }
    function getTime() {
        // Obtenemos la fecha del pedido
        const fechaPedido = moment(orderSelect.createDate)

        // Obtenemos la fecha actual
        const fechaActual = moment(Date.now())

        // Calculamos la diferencia de tiempo en minutos
        setTimeLast(fechaActual.diff(fechaPedido, 'minutes'))
    }
    function getPrice() {
        let pri = 0
        orderSelect.listProducts.forEach(element => {
            pri = parseInt(element.price, 10) + pri;
        });
        setPrice(pri)
    }
    return ( 
        <div className="order-select">
            <div className="select-header">
                <button className="btn" onClick={() => goBack()}>
                    Volver
                </button>
            </div>
            <div className='select-info'>
                <p className='info-lip'>
                    Estado: <b>
                        {orderSelect.state}
                    </b>
                </p>
                <p className='info-lip'>
                    Hace: <b>
                        {timeLast}
                    </b>
                    /Minutos
                </p>
                <p className='info-lip'>
                    Platos en total: <b>
                        {countList}
                    </b>
                </p>
                <p className='info-lip'>
                    Precio total: <b>
                        ${price}
                    </b>
                </p>
            </div>
            <div className='select-body'>
                {
                    countList > 0 ?
                    <>
                        {
                            orderSelect.listProducts.map((element, index) => (
                                <ListProducts data={element} key={index} index={index}/>
                            ))
                        }
                    </>:<></>
                }
            </div>
        </div>
     );
}

export default OrderSelect;