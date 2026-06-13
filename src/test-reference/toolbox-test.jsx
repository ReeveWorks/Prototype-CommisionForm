/* Stylesheets */
import '../../styles/toolbox.css'
import { useEffect, useRef } from 'react';

function toolBox() {
    const dragElementRef = useRef(null);
    const dragStateRef = useRef({
        isDragging: false,
        startX: 0,
        startY: 0,
        originLeft: 0,
        originTop: 0,
    });

    const handleMouseDown = (e) => {
        const element = dragElementRef.current;

        if (!element) return;

        e.preventDefault();
        dragStateRef.current = {
            isDragging: true,
            startX: e.clientX,
            startY: e.clientY,
            originLeft: element.offsetLeft,
            originTop: element.offsetTop,
        };

        element.style.color = 'red';
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const { isDragging, startX, startY, originLeft, originTop } = dragStateRef.current;

        if (!isDragging) return;

        const element = dragElementRef.current;

        if (!element) return;

        element.style.left = `${originLeft + (e.clientX - startX)}px`;
        element.style.top = `${originTop + (e.clientY - startY)}px`;
    };

    const handleMouseUp = () => {
        const element = dragElementRef.current;

        dragStateRef.current.isDragging = false;

        if (element) {
            element.style.color = 'white';
        }

        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    useEffect(() => {
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div
            ref={dragElementRef}
            id="tool-drag"
            className='toolbox-container'
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}>
            <p className='use-icon txt-unselectable'>T</p>
        </div>
    );
}
export default toolBox;