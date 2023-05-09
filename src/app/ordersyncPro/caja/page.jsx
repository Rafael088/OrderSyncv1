"use client";
import SlideBar from "@/components/SlideBar";
import { useSelector } from "react-redux"
import Header from "@/components/Header";
import '../../../style/caja.scss'
import ContCaja from "@/components/ContCaja";
import { useDispatch } from 'react-redux';
import { deleteOrder } from "@/redux/reducers/orderSelect";
import React, { useState, useEffect } from 'react';
import OrderSelect from "@/components/OrderSelect";
import ModalFactura from "@/components/modals/ModalFactura";
function Caja() {
    
    const dispatch = useDispatch()
    //const {auth} = useSelector((state) => state.auth)
    const {orderSelect} = useSelector((state) => state.orderSelect)
    const [modal, setModal] = useState(false);
    useEffect(() => {
      dispatch(deleteOrder())
    }, [])
    function changeModal() {
        modal ? setModal(!modal) : setModal(!modal)
    }
    async function close() {
        let db = {}
        db.status = "Completado"
        let url = `http://localhost:5000/order/${orderSelect._id}/state`
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(db)
          })
        .then(res => res.json())
        .then(data => {
                if (data.message === "order succes update") {
                    
                    dispatch(deleteOrder())
                }
            })
        .catch(err => console.log(err))
    }
    return ( 
        <section className="caja-DashBoard">
            {modal?<ModalFactura changeModal={changeModal}/>:<></>}
            <SlideBar/>
            <div className="dashboard-body">
                <Header title={orderSelect?`Mesa ${orderSelect.numeroMesa}`:"Caja"} />
                <div className="body-cont">
                    {
                        orderSelect?
                        <OrderSelect/>
                        :<ContCaja/>
                    }
                    {
                        orderSelect?
                        <div className="cont-btns">
                            <button className="btn g" onClick={() => changeModal()}>
                                Generar Factura
                            </button>
                            <button className="btn f" onClick={() => close()}>
                                Finalizar
                            </button>
                        </div>
                        :<></>
                    }
                </div>
            </div>
        </section>
     );
}

export default Caja;