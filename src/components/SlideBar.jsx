"use client";
import '../style/slideBar.scss'

import Link from "next/link";
import Image from 'next/image'
import { AiOutlineNotification, AiOutlineCreditCard, AiOutlineBook, AiOutlineSolution } from "react-icons/ai";
import React, { useState } from 'react';
function SlideBar() {
    const [onClose, setOnClose] = useState(false);
    return ( 
        <div className={onClose ? "sliderbar-close" : "slidebar"}>
            <div className="slidebar-header">
                <Image src="/OrderSyncProIcon.png" alt="OrderSync Pro" className="img" width={200} height={200} />
                <p>OrderSync Pro <b>Beta</b></p>
            </div>
            <div className="slidebar-body">
                <Link href="/ordersyncPro" className="btn">
                    <AiOutlineNotification className="icon"/>
                    <p>Ordenes</p>
                    </Link>
                <Link href="/ordersyncPro/caja" className="btn">
                    <AiOutlineCreditCard className="icon"/>
                    <p>Caja</p>
                    </Link>
                <Link href="/ordersyncPro/estadisticas" className="btn">
                    <AiOutlineBook className="icon"/>
                    <p>Estadisticas</p>
                    </Link>
            </div>
            <div className="slidebar-footer">
                
            </div>
        </div>
     );
}

export default SlideBar;