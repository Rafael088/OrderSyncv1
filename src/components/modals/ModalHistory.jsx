"use client"
import React, { useState, useEffect } from 'react';

import { useSelector } from "react-redux"
import { useForm } from "react-hook-form"

function ModalHistoryTickets({ setModalHistory, selectUpdate, setSelectUpdate }) {
   function close() {
    setModalHistory(false)
    setSelectUpdate(false)
   }
    return (
        <div className="modal-ticket" >
            <div className='modal-body history'>
                {
                    selectUpdate && <>
                    {
                    selectUpdate.listDate.map((element, index) => (
                        <p key={index}><b>{index + 1}</b>. {element}</p>
                    ))

                    }

                    
                    </>
                }
            </div>
            <div className='modal-btns'>
                <button onClick={() => close()} className='btn back'>
                    Volver
                </button>
                {/* <button className='btn create' type='submit'>
                    Crear
                </button> */}
            </div>

        </div>
    );
}

export default ModalHistoryTickets;