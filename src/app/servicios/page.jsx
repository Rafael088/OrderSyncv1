import CardService from "@/components/CardService";
import NabVar from "@/components/NavBar";
import '../../style/services.scss'
import Footer from "@/components/Footer";
import InfoServices from "@/components/InfoServices";
function Services() {
    let oneService = [
        "Ideal para restaurantes pequeños o con un número limitado de mesas.",
        "Gestión básica de pedidos y asignación de mesas.",
        "Acceso a menús diarios predefinidos y personalizables.",
        "Soporte técnico básico y acceso a la base de conocimientos en línea."
    ]
    let twoService = [
        "Adecuado para restaurantes medianos y aquellos que buscan funcionalidades adicionales.",
        "Todas las características de OrderSync Sencillo, además de:",
        "Integración con sistemas de punto de venta (POS) y sistemas de inventario.",
        "Capacidades avanzadas de análisis de datos y generación de informes.",
        "Personalización de la interfaz de usuario y opciones de branding.",
        "Soporte técnico prioritario y acceso a actualizaciones de software."
    ]
    let threeService = [
        "Diseñado para cadenas de restaurantes, franquicias y establecimientos de gran tamaño.",
        "Todas las características de OrderSync Premium, además de:",
        "Gestión centralizada de múltiples ubicaciones y control de acceso basado en roles.",
        "Funcionalidades avanzadas de pronóstico y optimización del inventario.",
        "Implementación y soporte técnico dedicado, capacitación en persona y acceso a nuevas funciones en desarrollo."
    ]
    return ( 
        <section className="services">
            <NabVar/>
            <div className="services-body">
                <CardService 
                    title="OrderSync Sencillo" 
                    name="Perfecto para empresas pequeñas" 
                    price="10.000" 
                    priceOri="20.000" 
                    array={oneService}/>
                <CardService 
                    title="OrderSync Premiun" 
                    name="Ideal para personalizar tu software" 
                    price={"20.000"} 
                    priceOri="40.000"  
                    array={twoService}/>
                <CardService 
                    title="OrderSync Empresarial" 
                    name="El paquete completo para la transformacion" 
                    price={"50.000"} 
                    priceOri="100.000"  
                    array={threeService}/>
            </div>
            <InfoServices/>
            <Footer/>
        </section>
     );
}

export default Services;