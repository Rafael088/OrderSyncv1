import React, { useState } from 'react';
import OrderSyncPro from './OrderSyncPro';
import OrderSyncV2 from './OrderSyncV2';
import OrderSyncCli from './OrderSyncCli';

function InfoDocument() {
    const [position, setPosition] = useState(0);
    return ( 
        <div className="document-body">
            <div className="body-left">
                <button  className={position === 0 ? 'btn on': 'btn'} onClick={() => setPosition(0)}>
                    Osync Pro
                </button>
                <button  className={position === 1 ? 'btn on': 'btn'} onClick={() => setPosition(1)}>
                    Osync v2
                </button >
                <button  className={position === 2 ? 'btn on': 'btn'} onClick={() => setPosition(2)}>
                    Osync Cli
                </button>
            </div>
            <div className="body-content">
                {position === 0 ? 
                    <>
                    <OrderSyncPro/>
                    </>:<></>
                }
                {position === 1 ? 
                    <>
                    <OrderSyncV2/>
                    </>:<></>
                }
                {position === 2 ? 
                    <>
                    <OrderSyncCli/>
                    </>:<></>
                }
            </div>
        </div>
     );
}

export default InfoDocument;