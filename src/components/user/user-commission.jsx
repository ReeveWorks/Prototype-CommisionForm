/* Stylesheets */
// import './styles/product.css'
import { Plus } from 'lucide-react';

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'
import { useState, Fragment } from 'react';

/* Redux Slice */
import { addProduct, updateProduct } from '../../states/slices/artistDataSlice'

/* Render Modules */

/* Render Pop-up */
import PopupModal from '../../modals/global/renderPopup';

function userCommission() {
    // Redux 

    // Render
    function renderPopup(type, title, message, contents, onResult) {
        return new Promise((resolve) => {
            setPopupProps({
                type: type,
                title: title,
                message: message,
                contents: contents,
                returnValue: (value) => {
                    onResult?.(value);
                    resolve(value);
                }
            });
            setIsPopupOpen(true);
        });
    }

    // Test Purpose  
    async function popupCheck() {
        function message(moduleid) {
            let module = product.module.find(m => m.id === moduleid);

            return (
                <div>
                    <p>ID: <span className='txt-accent font-bold'>{moduleid}</span></p>
                    <p>Type: <span className='txt-accent font-bold'>{module?.type}</span></p>
                    <p>Size: <span className='txt-accent font-bold'>{module?.size}</span></p>
                    <p>Bold: <span className='txt-accent font-bold'>{module?.bold ? "true" : "false"}</span></p>
                    <p>Required: <span className='txt-accent font-bold'>{module?.isRequired ? "true" : "false"}</span></p>
                    <p>Spacing: <span className='txt-accent font-bold'>{module?.spacing}</span></p>
                    <p>Content: <span className='txt-accent font-bold'>{module?.content}</span></p>
                </div>
            );
        }

        let selected = await renderPopup(
            "options",
            "Pop-up 1",
            "select an option below:",
            product.module.map(m => m.id));

        await renderPopup(
            "alert",
            "Pop-up 2",
            message(selected),
            "close pop-up",
            (item) => { selected = item; });

        await console.log(product);
    }

    return (
        <div>
            {isPopupOpen && <PopupModal
                type={popupProps.type}
                title={popupProps.title}
                message={popupProps.message}
                contents={popupProps.contents}
                returnValue={popupProps.returnValue}
                closePopup={() => setIsPopupOpen(false)} />}

            {/* {toolDev()} */}

            <div className='owner-product'>
                <br />
            </div>
        </div>
    );
}

export default userCommission;