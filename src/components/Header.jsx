import '../style/header.scss'
import { AiOutlineExport } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteData } from '@/redux/reducers/auth';
import { useRouter } from "next/navigation"
function Header({title}) {
    const dispatch = useDispatch()
    const router = useRouter()
    function close() {
        dispatch(deleteData())
        router.push('/login')
    }
    return ( 
        <div className="header">
            <div className='header-space'>

            </div>
            <div className='header-card'>
                <p>{title}</p>
            </div>
            <div className='header-user'>
                <button className='btn' onClick={() => close()}>
                    <AiOutlineExport className='icon'/>
                </button>
            </div>
        </div>
     );
}

export default Header;