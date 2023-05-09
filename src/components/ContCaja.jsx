import CardCaja from "./CardCaja";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
function ContCaja() {
    const [data, setData] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    
    const {auth} = useSelector((state) => state.auth)
    useEffect(() => {
      conectDb()
    }, [])
    async function conectDb() {
        setRefreshing(true);
        let url = `http://localhost:5000/order/${auth.idRest}/all`
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
        <div className="contCaja">
            {
                data?
                <>
                    {data.map(element => (
                        <CardCaja data={element} />
                    ))}
                </>:<></>
            }
            
        </div>
     );
}

export default ContCaja;