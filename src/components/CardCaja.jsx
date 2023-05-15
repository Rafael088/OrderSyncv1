import { useRouter } from "next/navigation"
import { useDispatch } from 'react-redux';
import { addOrder } from "@/redux/reducers/orderSelect";
import moment from "moment/moment";
import React, { useState, useEffect } from 'react';
function CardCaja({data}) {
    const dispatch = useDispatch()
    const router = useRouter()
    const [price, setPrice] = useState(0)
    let countList = data.listProducts.length
    useEffect(() => {
        getPrice()
      }, [])
    function getData() {
        dispatch(addOrder(data))
        //router.push('/ordersyncPro/order')
    }
    function getPrice() {
        let pri = 0
        data.listProducts.forEach(element => {
            pri = parseInt(element.price, 10) + pri;
        });
        setPrice(pri)
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
                <p>Precio total: <b>${price}</b></p>
            </div>
        </button>
     );
}

export default CardCaja;