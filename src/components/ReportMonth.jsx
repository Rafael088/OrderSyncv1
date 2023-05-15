import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"

function ReportMonth() {
    const {auth} = useSelector((state) => state.auth)
    const [info, setInfo] = useState([]);
    const [labels, setLabels] = useState([]);
    const [reports, setReports] = useState({});
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
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
      useEffect(() => {
        getData()
      }, [])
      
      async function getData() {
        let url = `http://localhost:5000/reports/getReportsMonth/${auth.idRest}`
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.message === "reports month succes geting") {
                setReports(data.reports)
                setLabels(data.reports.dailyRevenueDates)
                setInfo(data.reports.dailyRevenueValues)
            }
            })
        .catch(err => console.log(err))
      }
    return (
        <div className="report-month">
            <h3>
                <b>Reporte Mensual</b>
            </h3>
            <div className="card">
                <div className="card-header">
                    <p>
                        Mes: <b>{reports.months}</b>{' '}
                    </p>
                    <p>
                        Número de ventas: <b>{reports.totalOrders}</b>
                    </p>
                    <p>
                        Ganancias al Mes: <b>${reports.totalRevenue}</b>
                    </p>
                </div>
                <div className="card-body">
                    <Line options={options} data={data} />
                </div>
            </div>
        </div>
    );
}

export default ReportMonth;
