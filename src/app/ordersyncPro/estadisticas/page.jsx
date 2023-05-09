import Header from "@/components/Header";
import SlideBar from "@/components/SlideBar";
import '../../../style/statics.scss'
function History() {
    return ( 
        <section className="statics">
            <SlideBar/>
            <div className="dashboard-body">
                <Header title={"Estadisticas de ventas"} />
                <div className="body-cont">

                </div>
            </div>
        </section>
     );
}

export default History;