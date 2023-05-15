import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  import React, { useState, useEffect } from 'react';
  
import { useSelector } from "react-redux"

function ReportsGen() {
    const {auth} = useSelector((state) => state.auth)
    const [info, setInfo] = useState([]);
    const [labels, setLabels] = useState([]);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: '',
          },
        },
      };
      const data = {
        labels,
        datasets: [
          {
            label: '',
            data: info,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(152, 234, 171, 0.668)',
          },
        ],
      };
      useEffect(() => {
        getData()
      }, [])
      
      async function getData() {
        let url = `http://localhost:5000/reports/getGeneralReport/${auth.idRest}`
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.message === "General report retrieved successfully") {
                setLabels(data.report.months)
                setInfo(data.report.values)
                setTotalRevenue(data.report.totalRevenue)
                setTotalOrders(data.report.totalOrders)
            }
            })
        .catch(err => console.log(err))
      }
    return ( 
        <div className="report-gen">
            <h3>
                <b>Reporte General</b>
            </h3>
            <div className="card">
                <div className="card-header">
                    <p>
                        Fecha: <b>05/2023</b>{' '}
                    </p>
                    <p>
                        Número de ventas: <b>{totalOrders}</b>
                    </p>
                    <p>
                        Ganancias hasta la fecha: <b>${totalRevenue}</b>
                    </p>
                </div>
                <div className="card-body">
                    <Bar options={options} data={data} />
                </div>
            </div>
        </div>
     );
}

export default ReportsGen;