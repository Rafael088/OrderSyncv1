"use client";
import InfoDocument from "@/components/InfoDocument";
import NabVar from "@/components/NavBar";
import '../../style/document.scss'
import Footer from "@/components/Footer";
function Document() {
    return ( 
        <section className="document">
            <NabVar/>
            <InfoDocument/>
            <Footer/>
        </section>
     );
}

export default Document;