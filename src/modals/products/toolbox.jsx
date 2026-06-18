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

        let divLeft = divOriginLeft + (e.clientX - mouseStartX);
        let divTop = divOriginTop + (e.clientY - mouseStartY);

        let maxLeft = window.innerWidth - tooldiv.offsetWidth;
        let maxTop = window.innerHeight - tooldiv.offsetHeight - 5;

        divLeft = Math.max(0, Math.min(divLeft, maxLeft));
        divTop = Math.max(45, Math.min(divTop, maxTop));

        tooldiv.style.left = `${divLeft}px`;
        tooldiv.style.top = `${divTop}px`;

        // tooldiv.style.transform = `translate(${x}px, ${y}px)`;
    }
    const mouseUp = () => {
        const tooldiv = dragElementRef.current;

        tooldivRef.current.isDragging = false;

        if (tooldiv) {
            tooldiv.style.color = 'white';
        }

        let windowWidth = window.innerWidth;
        if (tooldiv.offsetLeft < windowWidth/2) {
            tooldiv.style.left = `${5}px`;
        }
        else {
            tooldiv.style.left = `${windowWidth - tooldiv.offsetWidth - 5}px`;
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

    const consoleLog = () => {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        console.log(`Window Width: ${windowWidth}\nWindow Height: ${windowHeight}`);
    }

    return (
        <div
            ref={dragElementRef}
            id="tool-drag"
            className='toolbox-container'
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            onClick={consoleLog}>
            <p className='use-icon txt-unselectable' >T</p>
        </div>
    );
}
export default toolBox;