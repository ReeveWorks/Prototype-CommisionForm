/* Stylesheets */
import '../../styles/toolbox.css'
import { useState, useEffect, useRef } from 'react';

function toolBox() {
    const dragElementRef = useRef(null);
    const [toolPosition, setToolPosition] = useState({ x: 0, y: 0 });

    function log(value, e) {
        e = e || window.event;
        e.preventDefault();

        const target = e.currentTarget || dragElementRef.current;
        
        console.log(`${value} button\nx-axis: ${e.clientX}\ny-axis: ${e.clientY}`);

        if (value === "down") {
            target.style.color = 'red';
        } else if (value === "up") {
            target.style.color = 'white';
        }
    

        target.style.top = `${(target.offsetTop)}px`;
        target.style.left = `${(target.offsetLeft)}px`;
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1);
    //         console.log('count updated:', count);
    //     }, 1000);
    // });

    // onMouseMove={(e) => log("move", e)}   
    return (
        <div
            ref={dragElementRef}
            id="tool-drag"
            className='toolbox-container'
            onMouseDown={(e) => log("down", e)}
            onMouseUp={(e) => log("up", e)}>
            <p className='use-icon txt-unselectable' >T</p>
        </div>
    );
}
export default toolBox;