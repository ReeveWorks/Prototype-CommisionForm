/* Stylesheets */
import '../../styles/toolbox.css'
import { useRef } from 'react';

function toolBox() {
    const toolDivScreen = useRef(null);
    const dragElementRef = useRef(null);
    const tooldivRef = useRef({
        isDragging: false,
        pointerId: null,
        startX: 0,
        startY: 0,
        originLeft: 0,
        originTop: 0,
    });

    const handlePointerDown = (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        e.preventDefault();

        const tooldiv = dragElementRef.current;
        if (!tooldiv) return;

        tooldivRef.current = {
            isDragging: true,
            pointerId: e.pointerId,
            startX: e.clientX,
            startY: e.clientY,
            originLeft: tooldiv.offsetLeft,
            originTop: tooldiv.offsetTop,
        };

        tooldiv.style.color = 'red';
        tooldiv.setPointerCapture?.(e.pointerId);
    };

    const handlePointerMove = (e) => {
        const state = tooldivRef.current;
        if (!state.isDragging || state.pointerId !== e.pointerId) return;

        const tooldiv = dragElementRef.current;
        const screen = toolDivScreen.current;
        if (!tooldiv || !screen) return;

        const maxLeft = Math.max(0, screen.offsetWidth - tooldiv.offsetWidth);
        const maxTop = Math.max(0, screen.offsetHeight - tooldiv.offsetHeight - 40);

        const divLeft = Math.max(0, Math.min(state.originLeft + (e.clientX - state.startX), maxLeft));
        const divTop = Math.max(0, Math.min(state.originTop + (e.clientY - state.startY), maxTop));

        tooldiv.style.left = `${divLeft}px`;
        tooldiv.style.top = `${divTop}px`;
    };

    const handlePointerUp = (e) => {
        const state = tooldivRef.current;
        if (!state.isDragging || state.pointerId !== e.pointerId) return;

        const tooldiv = dragElementRef.current;
        if (tooldiv) {
            tooldiv.style.color = 'white';
            tooldiv.releasePointerCapture?.(e.pointerId);
        }

        state.isDragging = false;
        state.pointerId = null;
    };

    const consoleLog = () => {
        const screen = toolDivScreen.current;
        if (!screen) return;

        const width = screen.offsetWidth;
        const height = screen.offsetHeight;
        console.log(`Width: ${width}\nHeight: ${height}\n\nScreen Width: ${window.innerWidth}\nScreen height: ${window.innerHeight}`);
    };

    return (
        <div
            ref={toolDivScreen}
            className='divScreen'>
            <div
                ref={dragElementRef}
                id="tool-drag"
                className='toolbox-container'
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onClick={consoleLog}>
                <p className='use-icon txt-unselectable'>T</p>
            </div>
        </div>
    );
}
export default toolBox;