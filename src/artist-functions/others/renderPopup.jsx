/* Stylesheets */
import '../../styles/product-edit.css'
import '../../styles/popup.css'
import { useRef } from 'react';

function RenderPopupMessage({message, closePopup}) {
    const popupRef = useRef();

    const handleClose = (event) => {
        if (popupRef.current === event.target){
            closePopup();
        }
    }

    return (
        <div ref={popupRef} onClick={handleClose} className='pop-up-backdrop'>
            <div className='pop-up-container txt-unselectable'>
                {message}
                <div className='pop-up-buttons'>
                    <button className='pop-up-buttons' onClick={closePopup}>Yes</button>
                    <button className='pop-up-buttons' onClick={closePopup}>No</button>
                </div>
            </div>
        </div>
    );
}

export default RenderPopupMessage;


        // <div className='pop-up-backdrop'>
        //     {message}
        // </div>

// function RenderPopupMessage(message) {
//     return (
//         <div className='pop-up-container'>
//             {message}
//             <div className='pop-up-buttons'>
//                 <button className='pop-up-buttons' onClick={() => DeleteModule(testProd.module[isEditing].id)}>Yes</button>
//                 <button className='pop-up-buttons' onClick={handleTogglePopup}>No</button>
//             </div>
//         </div>
//     );
// }