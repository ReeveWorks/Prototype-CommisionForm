import './styles/renderToolDev.css'

/* Functions/Hooks */
import { forwardRef } from 'react';

const RenderToolDev = forwardRef(function RenderToolDev(props, ref) {
    
    return (
        <div
            ref={ref}
            className="tool-dev-box">
            <p>This is a test version!</p>
        </div>
    );
});

export default RenderToolDev;