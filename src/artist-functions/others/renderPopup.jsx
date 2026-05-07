/* Stylesheets */
import '../../styles/product-edit.css'
import '../../styles/popup.css'

function RenderPopupMessage(message) {
    return (
        <div className='pop-up-backdrop'>
            {message}
        </div>
    );
}

export default RenderPopupMessage;

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