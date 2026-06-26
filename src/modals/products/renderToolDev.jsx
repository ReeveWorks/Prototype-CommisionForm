import './styles/renderToolDev.css'

/* Functions/Hooks */
import { useState, useEffect, useRef } from 'react';

function renderToolDev(posLeft, posTop) {
    const devRef = useRef(null);

    useEffect(() => {
        devRef.current.style.left = posLeft;
        devRef.current.style.top = posTop;
    }, []);

    return (
        <>
            <div ref={devRef} >
                Hello World!
            </div>
        </>
    )
}

export default renderToolDev;