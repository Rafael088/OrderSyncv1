"use client"
import React, { useState, useEffect } from 'react';

import { useSelector } from "react-redux"
import { useForm } from "react-hook-form"

function ModalCreateTickets({ setModalCreate, getData }) {
    const { register, handleSubmit } = useForm();

    const { auth } = useSelector((state) => state.auth)
    async function geting(info) {
        info.idRest = auth.idRest,
        info.pointHistory = 0
        const back = process.env.NEXT_PUBLIC_API_BACK
        let url = `${back}tickets/create`
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === "tickets success create") {
                    setModalCreate(false)
                    getData()
                } else {
                    console.log("error al crear tickets")
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <form className="modal-ticket" onSubmit={handleSubmit(geting)}>
            <div className='modal-body'>
                <input type="text"
                    placeholder='Nombre Completo'
                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register('nameCase',
                        {
                            required: true
                        })} />
                <input type="number"
                    placeholder='Cantidad de Puntos'
                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register('value',
                        {
                            required: true
                        })} />
                        <input type="number"
                    placeholder='Celular'
                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register('phone',
                        {
                            required: true
                        })} />
            </div>
            <div className='modal-btns'>
                <button onClick={() => setModalCreate(false)} className='btn back'>
                    Cancelar
                </button>
                <button className='btn create' type='submit'>
                    Crear
                </button>
            </div>

        </form>
    );
}

export default ModalCreateTickets;