"use client";
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { addData } from "@/redux/reducers/auth";
import React, { useState } from 'react';

export default function Login() {
    const router = useRouter()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm();
    const [fails, setFails] = useState("");
    async function log(db) {
        let url = 'https://backend-c4yfwl2x6-rafael088.vercel.app/users/auth'
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(db)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === "user succes auth ") {
                    dispatch(addData(data.user))
                    router.push('/ordersyncPro')
                } else {
                    console.log("error")
                    setFails("Error al iniciar sesión")
                }
            })
            .catch(err => console.log(err))
       
    }
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/OrderSyncProIcon.png"
              alt="OrderSync Pro"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Inicia sesion con tu cuenta
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(log)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Correo Electronico
                </label>
                <div className="mt-2">
                <input type="email"
                    placeholder='Correo'
                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register('email',
                    {required:true
                    })}/>
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                <input type="password"
                    placeholder='Contraseña'
                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register('password',
                    {required:true
                    })}/>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Iniciar Sesion
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              No eres miembro?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Unete Ahora
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  