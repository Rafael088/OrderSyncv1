import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"

function ReportDay() {
    
    const {auth} = useSelector((state) => state.auth)
    const [data, setData] = useState(false);
    useEffect(() => {
      getData()
    })
    async function getData() {
        let url = `http://localhost:5000/reports/getReportsDays/${auth.idRest}`
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.message === "reports days succes geting") {
                setData(data.reports)
            }
            })
        .catch(err => console.log(err))
      }

    return (
        <div className="report-day">

            <h3><b>Reporte Diario</b></h3>
            {data ? <>
                <div className="card">
                <div className="card-header">
                    <p>Total de ventas: <b>${data.totalSales}</b> </p>
                    <p>Número de ventas: <b>{data.numSales}</b></p>
                </div>
                <div className="card-body">

                    {
                        /*
                            <h4>Ventas por mesa:</h4>
                            {Object.entries(salesByTable).map(([table, data]) => (
                                <div key={table}>
                                    <p>Mesa {table}:</p>
                                    <p> - Número de pedidos: {data.numOrders}</p>
                                    <p> - Ventas: {data.sales}</p>
                                </div>
                            ))}
                        */
                    }
                    <p>Más vendido: <b>{data.mostSoldProduct.name} (Cantidad: {data.mostSoldProduct.count})</b> </p>
                </div>
                
                
            </div>
            </>:<></>}
            
        </div>
    );
}

export default ReportDay;