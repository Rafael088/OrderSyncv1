"use client";
import Header from "@/components/Header";
import SlideBar from "@/components/SlideBar";
import '../../../style/statics.scss'
import ReportDay from "@/components/ReportsDay";
import ReportMonth from "@/components/ReportMonth";
import ReportsGen from "@/components/ReportsGen";
function History() {
    return ( 
        <section className="statics">
            <SlideBar/>
            <div className="dashboard-body">
                <Header title={"Estadisticas de ventas"} />
                <div className="body-cont">
                    <ReportDay/>
                    <ReportMonth/>
                    <ReportsGen/>
                    
                </div>
            </div>
        </section>
     );
}

export default History;