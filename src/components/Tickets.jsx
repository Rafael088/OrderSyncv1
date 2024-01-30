"use client"
import React, { useState, useEffect } from 'react';
import "@/style/tickets.scss"
import { useSelector } from "react-redux"
import ModalCreateTickets from './modals/ModalCreateTickets';

import { useForm } from "react-hook-form"

function TicketsList() {
    const [data, setData] = useState([]);
    const [modalCreate, setModalCreate] = useState(false);
    const [selectUpdate, setSelectUpdate] = useState(false);
    const { register, handleSubmit } = useForm();
    const [fails, setFails] = useState("");
    const { auth } = useSelector((state) => state.auth)
    async function getData() {

        const back = process.env.NEXT_PUBLIC_API_BACK
        let url = `${back}tickets/${auth.idRest}/get`
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.message === "tickets success geting") {
                setData(data.tickets)
            }
            })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getData()
    })
    
    async function updateElement(info) {
            selectUpdate.pointHistory = 1 + selectUpdate.pointHistory
            selectUpdate.listDate.push(info.date.toLocaleString());
            const back = process.env.NEXT_PUBLIC_API_BACK
            let url = `${back}tickets/${selectUpdate._id}/update`
            await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectUpdate)
            })
            .then(res => res.json())
            .then(data => {
                if (data.message === "tickets success update") {
                    setSelectUpdate(null)
                }
                })
            .catch(err => console.log(err))
            getData()
    }

    return ( 
        <div className="ticketslist">
            {
                modalCreate ? 
                <ModalCreateTickets setModalCreate={setModalCreate} getData={getData}/>: <></>
            }
            <div className="list-top">
                <h2>Proximos a Vencer</h2>
                {
                    data.length > 0 ? <>
                        {
                            data
                            .filter(element => element.pointHistory >= parseInt(element.value) - 5)
                            .filter(element => element.pointHistory !== parseInt(element.value))
                            .map(element => (
                                <div className='list-element'>
                                    <p>{element.nameCase}</p>
                                    <p>{element.phone}</p>
                                    <b>Puntos: {element.pointHistory} - {element.value}</b>
                                </div>
                            ))
                        }
                    </>:<></>
                }
            </div>
            <div className="list-mid">
                <button className='btn create' onClick={() => setModalCreate(true)}>Crear Nuevo</button>

                {
                    selectUpdate ? 
                    <>
                        <form className='select' onSubmit={handleSubmit(updateElement)}>
                            <p>Seleccione una fecha</p>
                            <input type="date" {...register('date',
                        {
                            required: true
                        })} />
                            <button className='btn update' type='submit'>
                                Agregar Puntos
                            </button>
                        </form>
                    </>:<></>
                }

            </div>
            <div className="list-bot">
                <h2>Lista de Tickets Activos</h2>
                {
                    data.length > 0 ? <>
                        {
                            data
                            .filter(element => element.pointHistory !== parseInt(element.value))
                            .map(element => (
                                <div className='list-element' onClick={() => setSelectUpdate(element)}>
                                    <p>{element.nameCase}</p>
                                    <p>{element.phone}</p>
                                    <b>Puntos: {element.pointHistory}</b>
                                </div>
                            ))
                        }
                    </>:<></>
                }
            </div>
            
        </div>
     );
}

export default TicketsList;