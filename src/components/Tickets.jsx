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

    // Filtrar tickets vendidos hoy
    const ticketsVendidosHoy = data.filter(element => {
        // Obtener fecha actual en formato yyyy-mm-dd
        const fechaActual = new Date().toISOString().split('T')[0];

        // Verificar si alguna de las fechas en listDate es igual a la fecha actual
        return element.listDate.some(date => date.startsWith(fechaActual));
    });

    const calcularTicketsVendidosHoy = () => {
        const fechaActual = new Date().toISOString().split('T')[0];
    
        // Filtrar tickets vendidos hoy
        const ticketsVendidosHoy = data.filter(element =>
            element.listDate.some(date => date.startsWith(fechaActual))
        );
    
        // Contar la cantidad de tickets vendidos hoy para cada fecha
        const ticketsPorFecha = ticketsVendidosHoy.reduce((contador, element) => {
            element.listDate.forEach(date => {
                if (date.startsWith(fechaActual)) {
                    contador[date] = (contador[date] || 0) + 1;
                }
            });
            return contador;
        }, {});
    
        // Calcular la suma total de tickets vendidos hoy
        const sumaTicketsVendidosHoy = Object.values(ticketsPorFecha).reduce((total, count) => total + count, 0);
    
        return sumaTicketsVendidosHoy;
    };
    
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
                                <div className='list-element' key={element._id}>
                                    <p>{element.nameCase}</p>
                                    <p>{element.phone}</p>
                                    <b>Cantidad: {element.pointHistory} - {element.value}</b>
                                </div>
                            ))
                        }
                    </>:<></>
                }

               <div className='registerToDay'>
                <h2>Registros de Hoy</h2>
               <b>{calcularTicketsVendidosHoy()}</b>
               </div>
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
            <d className="list-bot">
                <h2>Lista de Tickets Activos { data.length > 0 ? data.length: ''}</h2>
                <ul>
                {
                    data.length > 0 ? <>
                        {
                            data
                            .filter(element => element.pointHistory !== parseInt(element.value))
                            .map((element, index) => (
                                <li key={element._id}>
                                <div className='list-element' onClick={() => setSelectUpdate(element)}>
                                    {index + 1}
                                    <p>{element.nameCase}</p>
                                    <p>{element.phone}</p>
                                    <b>Cantidad: {element.pointHistory} - {element.value}</b>
                                </div>
                                </li>
                            ))
                        }
                    </>:<></>
                }
                </ul>
                
            </d>
            
        </div>
     );
}

export default TicketsList;