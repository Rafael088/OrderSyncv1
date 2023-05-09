
import NabVar from "@/components/NavBar";
import '../../style/contact.scss'
function Contact() {
    return ( 
        <div className="contact">
            <NabVar/>
            <div className="contact-body">
                <h2>
                    <b>¡Contáctanos y descubre lo que OrderSync puede hacer por tu restaurante!</b>
                </h2>
                <p>
                ¿Quieres saber más sobre OrderSync y cómo nuestras soluciones pueden marcar la diferencia en la gestión de tu restaurante? ¡Nos encantaría hablar contigo! Nuestro equipo de expertos está disponible para responder a todas tus preguntas y ofrecerte una demostración personalizada de nuestros productos y servicios.
                </p>
                <hr/>
                <div className="contact-info">
                    <p>Al ponerte en contacto con nosotros, podrás:</p>
                    <p>
                        <b>1. Conocer a fondo nuestras soluciones: </b>
                        Te explicaremos en detalle cómo OrderSync puede optimizar tus procesos de pedido y mejorar la experiencia tanto de tus empleados como de tus clientes.
                    </p>
                    <p>
                        <b>2. Recibir asesoramiento personalizado: </b>
                        Nuestros especialistas evaluarán tus necesidades específicas y te ayudarán a elegir el producto o servicio que mejor se adapte a tu negocio.
                    </p>
                    <p>
                        <b>3. Descubrir nuestras promociones y ofertas: </b>
                        Aprovecha las promociones exclusivas y descuentos disponibles para nuevos clientes que deseen implementar OrderSync en sus restaurantes.
                    </p>
                    <p>
                        <b>3. Obtener soporte y capacitación: </b>
                        Nuestro equipo de atención al cliente está disponible para proporcionarte asistencia y capacitación en el uso de OrderSync, asegurando una integración exitosa en tu restaurante.
                    </p>
                    <p>
                    No esperes más para descubrir cómo OrderSync puede transformar tu negocio y llevarte al siguiente nivel. ¡Contáctanos hoy mismo y déjanos mostrarte lo que nuestras soluciones innovadoras pueden hacer por ti!
                    </p>
                </div>
                <p>¡Completa el formulario de contacto o llámanos al 3148186762 y hablemos sobre el futuro de tu restaurante con OrderSync!</p>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdFmaH54SHYynJCVUcAug3L2lxtJzNqWsQ_96HkKq8PqSgqZg/viewform?embedded=true" width="740" height="1423" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </div>
        </div>
     );
}

export default Contact;