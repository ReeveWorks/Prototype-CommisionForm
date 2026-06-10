/* Stylesheets */
import '../../styles/toolbox.css'
import { useState } from 'react';

function toolBox() {
    const [dragElement] = useState(document.getElementById("tool-drag"));

    function log(value, e) {
        e = e || window.event;
        e.preventDefault();
        
        console.log(`${value} button\nx-axis: ${e.clientX}\ny-axis: ${e.clientY}`);
    }

    return (
        <div
            id="tool-drag"
            className='toolbox-container'
            onMouseDown={(e) => log("down", e)}
            onMouseUp={(e) => log("up", e)}>
            <p className='use-icon txt-unselectable' >T</p>
        </div>
    );
}

export default toolBox;