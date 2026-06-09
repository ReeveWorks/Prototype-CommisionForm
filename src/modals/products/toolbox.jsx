/* Stylesheets */
import '../../styles/toolbox.css'
import { useState } from 'react';

function toolBox() {
    // dragElement(document.getElementById("tool-drag"));
    const [dragElement] = useState(document.getElementById("tool-drag"));

    function log(value) {
        console.log(value);
    }

    return (
        <div
            id="tool-drag"
            className='toolbox-container'
            onMouseDown={() => log("down")}
            onMouseUp={() => log("up")}>
            <p className='use-icon txt-unselectable' >T</p>
        </div>
    );
}

export default toolBox;