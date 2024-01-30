
"use client";
import Header from "@/components/Header";
import SlideBar from "@/components/SlideBar";
import '../../../style/statics.scss'
import TicketsList from "@/components/Tickets";

function Tickets() {
    return ( 
        <section className="statics">
            <SlideBar/>
            <div className="dashboard-body">
                <Header title={"Tickets"} />
                <div className="body-cont">
                    <TicketsList/>
                </div>
            </div>
        </section>
     );
}

export default Tickets;
