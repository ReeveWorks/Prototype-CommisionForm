/* Stylesheets */
import '../../styles/toolbox.css'
import { useState, useEffect, useRef } from 'react';

/* Render Modules */
import RenderToolDev from '../products/renderToolDev';

function toolDev() {
    const justClick = useRef(true);

    const toolDivScreen = useRef(null);
    const dragElementRef = useRef(null);
    const tooldivRef = useRef({
        isDragging: false,
        mouseStartX: 0,
        mouseStartY: 0,
        divOriginLeft: 0,
        divOriginTop: 0,
    });

    const toolsRef = useRef(null)

    const mouseDown = (e) => {
        e.preventDefault();

        const tooldiv = dragElementRef.current;
        if (!tooldiv) return;

        justClick.current = true;

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
        const openToolDiv = toolsRef.current;
        if (!tooldiv) return;

        let leftMovement = e.clientX - mouseStartX;
        let topMovement = e.clientY - mouseStartY;

        if (leftMovement > 5 || leftMovement < -5 || topMovement > 5 || topMovement < -5) {
            // console.log(`Is moving\nLeft: ${e.clientX - mouseStartX}\nTop: ${e.clientY - mouseStartY}`);
            justClick.current = false;

            let divLeft = divOriginLeft + leftMovement;
            let divTop = divOriginTop + topMovement;

            let maxLeft = toolDivScreen.current.offsetWidth - tooldiv.offsetWidth - 5;
            let maxTop = toolDivScreen.current.offsetHeight - tooldiv.offsetHeight - 40 - 5;

            divLeft = Math.max(5, Math.min((divLeft), maxLeft));
            divTop = Math.max(5, Math.min((divTop), maxTop));

            tooldiv.style.left = `${divLeft}px`;
            tooldiv.style.top = `${divTop}px`;



            let windowWidth = toolDivScreen.current.offsetWidth;
            let windowHeight = toolDivScreen.current.offsetHeight;

            if (tooldiv.offsetLeft > windowWidth / 2) {
                openToolDiv.style.left = `${divLeft - openToolDiv.offsetWidth + tooldiv.offsetWidth - 5}px`;
            }
            else {
                openToolDiv.style.left = `${divLeft + 5}px`;
            }

            if (tooldiv.offsetTop > windowHeight / 2) {
                openToolDiv.style.top = `${divTop - openToolDiv.offsetHeight - 5}px`;
            }
            else {
                openToolDiv.style.top = `${divTop + tooldiv.offsetHeight + 5}px`;
            }
        }

        // tooldiv.style.transform = `translate(${x}px, ${y}px)`;
    }
    const mouseUp = () => {
        const tooldiv = dragElementRef.current;
        tooldivRef.current.isDragging = false;

        if (tooldiv) { tooldiv.style.color = 'white'; }
        let windowWidth = toolDivScreen.current.offsetWidth;

        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
    }
    useEffect(() => {
        let windowWidth = toolDivScreen.current.offsetWidth;
        let windowHeight = toolDivScreen.current.offsetHeight;
        
        const tooldiv = dragElementRef.current;
        const openToolDiv = toolsRef.current;
        if (!tooldiv || !openToolDiv) return;

        tooldiv.style.left = `${windowWidth - tooldiv.offsetWidth - 5}px`;
        tooldiv.style.top = `${windowHeight - tooldiv.offsetHeight - 40 - 5}px`;

        console.log(`Top : ${tooldiv.offsetTop}\nLeft: ${tooldiv.offsetLeft}`);

        openToolDiv.style.top = `${tooldiv.offsetTop - openToolDiv.offsetHeight - 5}px`;
        openToolDiv.style.left = `${tooldiv.offsetLeft - openToolDiv.offsetWidth + tooldiv.offsetWidth - 5}px`;

        return () => {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
        };
    }, []);

    const consoleLog = (e) => {
        if (!justClick.current) { return; }

        const screen = toolDivScreen.current;
        let width = screen.offsetWidth;
        let height = screen.offsetHeight;
        console.log(`Width: ${width}\nHeight: ${height}\n\nScreen Width: ${window.innerWidth}\nScreen height: ${window.innerHeight}`);
    }

    function openTool() {
        if (!justClick.current) { return; }

        let tools = toolsRef.current;
        if (!tools) return;

        const visibility = window.getComputedStyle(tools).visibility;
        if (visibility == "visible") {
            tools.style.visibility = "hidden"
        }
        else {
            tools.style.visibility = "visible"
        }

        // console.log(`Value: ${tools.style.visibility}\n`);
    }

    return (
        <div
            ref={toolDivScreen}
            className='divScreen'>

            <div
                ref={dragElementRef}
                id="tool-drag"
                className='toolbox-container'
                onMouseDown={mouseDown}
                onMouseUp={mouseUp}
                onClick={openTool}>
                <p className='use-icon txt-unselectable' >T</p>
            </div>

            <RenderToolDev ref={toolsRef} />

        </div>
    );
}
export default toolDev;