import CardAbout from "./CardAbout";
import CardBene from "./CardBene";
import Footer from "./Footer";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";
import CardService from "./CardService";
function Home() {
    let oneService = [
        "Ideal para restaurantes pequeños o con un número limitado de mesas.",
        "Gestión básica de pedidos y asignación de mesas.",
        "Acceso a menús diarios predefinidos y personalizables.",
        "Soporte técnico básico y acceso a la base de conocimientos en línea.",
        "Acceso a dashboard de registros mensuales, semanales y diarios",
    ]
    let twoService = [
        "Adecuado para restaurantes medianos y aquellos que buscan funcionalidades adicionales.",
        "Todas las características de Osync Sencillo, además de:",
        "Integración con sistemas de punto de venta (POS) y sistemas de inventario.",
        "Capacidades avanzadas de análisis de datos y generación de informes.",
        "Personalización de la interfaz de usuario y opciones de branding.",
        "Soporte técnico prioritario y acceso a actualizaciones de software."
    ]
    let threeService = [
        "Diseñado para cadenas de restaurantes, franquicias y establecimientos de gran tamaño.",
        "Todas las características de Osync Premium, además de:",
        "Gestión centralizada de múltiples ubicaciones y control de acceso basado en roles.",
        "Funcionalidades avanzadas de pronóstico y optimización del inventario.",
        "Implementación y soporte técnico dedicado, capacitación en persona y acceso a nuevas funciones en desarrollo."
    ]
    return ( 
        <>
            <div className="body-header">
                <CardHeader/>
            </div>
            <div className="body-bene">
                <CardBene text="Acelere la eficiencia de su restaurante" position={1}> 
                </CardBene>
                <CardBene text="Reduzca costos y aumente las ganancias"  position={2}/>
                <CardBene text="Datos valiosos al alcance de su mano" position={3}/>
                <CardBene text="Personal feliz, clientes satisfechos" position={4}/>
            </div>
            <div className="body-info">
                <CardInfo/>
            </div>
            <div className="body-service">
                <CardService title="Osync Sencillo" name="Perfecto para empresas pequeñas" price="Gatris" priceOri="Gatris" array={oneService}/>
                <CardService title="Osync Premiun" name="Ideal para personalizar tu software" price={"45.900"} priceOri="79.900"  array={twoService}/>
                <CardService title="Osync Empresarial" name="El paquete completo para la transformacion" price={"159.900"} priceOri="189.900"  array={threeService}/>
            </div>
            <div className="body-about">
                <CardAbout/>
            </div>
            <Footer/>
        </>
     );
}

export default Home;