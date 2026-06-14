/* Stylesheets */
import '../../styles/toolbox.css'
import { useState, useEffect, useRef } from 'react';

function toolBox() {
    const dragElementRef = useRef(null);
    const [pos, setpos] = useState({ x: 0, y: 0 });
    const [toolmove, setToolMove] = useState(false);
    const [tooldiv, setToolDiv] = useState(null);

    const tooldivRef = useRef({
        isDragging: false,
        mouseX: 0,
        mouseY: 0,
        moveX: 0,
        moveY: 0,
    });

    function mouseDown(e) {
        console.log(`X-axis: ${e.clientX}, Y-axis: ${e.clientY}`);

        tooldivRef.current = {
            isDragging: true,
            mouseX: e.clientX,
            mouseY: e.clientY
        };
    }

    function log(value, e) {
        if (value === "down") {
            tooldiv.style.color = 'red';
            setToolMove(true);
        }
        else if (value === "up") {
            tooldiv.style.color = 'white';
            setToolMove(false);
        }

        setToolDiv(e.currentTarget || dragElementRef.current);

        if (value === "move" && toolmove) {
            tooldiv.style.top =
                `${(tooldiv.offsetTop - (pos.y - e.clientY))}px`;
            tooldiv.style.left =
                `${(tooldiv.offsetLeft - (pos.x - e.clientX))}px`;
        }

        setpos({ x: e.clientX, y: e.clientY, });
    }

    // <div
    //     ref={dragElementRef}
    //     id="tool-drag"
    //     className='toolbox-container'
    //     onMouseDown={(e) => log("down", e)}
    //     onMouseUp={(e) => log("up", e)}
    //     onMouseMove={(e) => log("move", e)}
    //     onMouseLeave={(e) => log("move", e)}>
    //     <p className='use-icon txt-unselectable' >T</p>
    // </div>

    return (
        <div
            ref={dragElementRef}
            id="tool-drag"
            className='toolbox-container'
            onMouseDown={(e) => log("down", e)}>
            <p className='use-icon txt-unselectable' >T</p>
        </div>
    );
}
export default toolBox;