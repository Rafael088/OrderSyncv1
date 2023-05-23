import CardOrders from "./CardOrders";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"

function Orders() {
    const [data, setData] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    
    const {auth} = useSelector((state) => state.auth)
    useEffect(() => {
      conectDb()
    })
    
    async function conectDb() {
        
        const back = process.env.NEXT_PUBLIC_API_BACK
        setRefreshing(true);
        let url = `${back}order/${auth.idRest}/get`
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.message === "order succes geting") {
                setData(data.orders)
                setRefreshing(false);
            }
            })
        .catch(err => console.log(err))

    }
    return ( 
        <div className="cont-orders">
            {
                data?
                <>
                    {data.map((element, index) => (
                        <CardOrders data={element} key={index}/>
                    ))}
                </>:<></>
            }
            
        </div>
     );
}

export default Orders;