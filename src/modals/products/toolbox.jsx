/* Stylesheets */
import '../../styles/toolbox.css'
import { useState, useEffect, useRef } from 'react';

function toolBox() {
    const [pos, setpos] = useState({ x: 0, y: 0 });
    const [toolmove, setToolMove] = useState(false);
    const [tooldiv, setToolDiv] = useState(null);

    const dragElementRef = useRef(null);
    const tooldivRef = useRef({
        isDragging: false,
        mouseStartX: 0,
        mouseStartY: 0,
        divOriginLeft: 0,
        divOriginTop: 0,
    });

    const mouseDown = (e) => {
        e.preventDefault();

        const tooldiv = dragElementRef.current;
        if (!tooldiv) return;

        tooldivRef.current = {
            isDragging: true,
            mouseStartX: e.clientX,
            mouseStartY: e.clientY,
            divOriginLeft: tooldiv.offsetLeft,
            divOriginTop: tooldiv.offsetTop,
        };
        tooldiv.style.color = 'red';

        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
    }
    const mouseMove = (e) => {
        if (!tooldivRef.current.isDragging) return; 
        const { mouseStartX, mouseStartY, divOriginLeft, divOriginTop } = tooldivRef.current;
        
        const tooldiv = dragElementRef.current;
        if (!tooldiv) return;

        tooldiv.style.left = `${divOriginLeft + (e.clientX - mouseStartX)}px`;
        tooldiv.style.top = `${divOriginTop + (e.clientY - mouseStartY)}px`;
    }
    const mouseUp = () => {
        const tooldiv = dragElementRef.current;

        tooldivRef.current.isDragging = false;
        
        if (tooldiv) {
            tooldiv.style.color = 'white';
        }

        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
    }    
    useEffect(() => {
        return () => {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
        };
    }, []);
    
    function consoleLog() {
        console.log(`Hello World!`);
    }

    return (
        <div
            ref={dragElementRef}
            id="tool-drag"
            className='toolbox-container'
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}>
            <p className='use-icon txt-unselectable' >T</p>
        </div>
    );
}
export default toolBox;