"use client";
import SlideBar from "@/components/SlideBar";
import { useSelector } from "react-redux"
import '../../style/dashboard.scss'
import Header from "@/components/Header";
import Orders from "@/components/Orders";
import { useDispatch } from 'react-redux';
import { deleteOrder } from "@/redux/reducers/orderSelect";
import React, { useState, useEffect } from 'react';
import OrderSelect from "@/components/OrderSelect";
import { useRouter } from "next/navigation"

function OrderSyncPro() {
    const router = useRouter()
    const dispatch = useDispatch()
    const {auth} = useSelector((state) => state.auth)
    const {orderSelect} = useSelector((state) => state.orderSelect)
    useEffect(() => {
        if (!auth) {
            router.push('/login')
            
        }
        dispatch(deleteOrder())
    }, [])
    //esta funcion actualiza el estado de la orden a En caja
    async function close() {
        let db = {}
        db.status = "En Caja"
        let url = `https://backend-apc.vercel.app/order/${orderSelect._id}/state`
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
        <section className="OrderSyncPro-DashBoard">
            <SlideBar/>
            <div className="dashboard-body">

                <Header title={orderSelect?`Mesa ${orderSelect.mesa}`:"Ordenes"} />
                <div className="body-cont">
                    {
                        orderSelect?
                        <OrderSelect/>
                        :<Orders/>
                    }
                    {
                        orderSelect?
                        <div className="cont-btns">
                            
                            <button className="btn f" onClick={() => close()}>
                                Finalizar
                            </button>
                        </div>
                        :
                        <></>
                    }
                    
                </div>
            </div>
        </section>
     );
}

export default OrderSyncPro;