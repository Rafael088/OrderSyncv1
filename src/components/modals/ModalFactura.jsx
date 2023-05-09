
import '../../style/modalFactura.scss'

function ModalFactura({changeModal}) {
    return ( 
        <div className="modal-factura">
            <div className="factura-body">
            <input type="text"
                    placeholder='Nombre Titular'
                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    <input type="number"
                    placeholder='Cedula'
                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    <input type="email"
                    placeholder='Correo Electronico'
                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>

                    <button className='btn' onClick={() => changeModal()}>
                        Generar
                    </button>
                    <button className='btn' onClick={() => changeModal()}>
                        Volver
                    </button>
            </div>
        </div>
     );
}

export default ModalFactura;