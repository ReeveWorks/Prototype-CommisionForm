import './styles/renderToolDev.css'

/* Functions/Hooks */
import { forwardRef } from 'react';

const RenderToolDev = forwardRef(function RenderToolDev(props, ref) {
    
    return (
        <div
            ref={ref}
            className="tool-dev-box">
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
        </div>
    );
});

export default RenderToolDev;