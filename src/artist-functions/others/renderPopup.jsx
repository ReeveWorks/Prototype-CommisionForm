/* Stylesheets */
import '../../styles/product-edit.css'
import '../../styles/popup.css'
import { useRef, useState } from 'react';

function RenderPopupMessage({ type, title, message, contents, returnValue, closePopup }) {
    const popupRef = useRef();

    /// type: message, bool, number, text
    /// title: title of the pop-up
    /// message: message to be displayed in the pop-up
    /// contents
    ///     for message: [closeButtonText]
    ///     for bool: [trueValue-ButtonName, falseValue-ButtonName]
    ///     for number: {placeholder, min, max, buttonText}
    ///     for text: {placeholder, minLength, maxLength, buttonText}
    /// returnValue: for input type, the value to be returned when the user clicks the confirm button

    const handleClose = (event) => {
        if (popupRef.current === event.target) {
            closePopup();
        }
    }

    function renderPopup() {
        return (
            <div className='popup-container txt-unselectable'>
                <h1>{title}</h1>
                <p className='popup-diver' />
                <span>{message}</span>
                {renderSegment()}
            </div>
        );
    }
    function renderSegment() {
        switch (type) {
            case 'message':
                return messageOption();
            case 'bool':
                return boolOption(...contents);
            case 'number':
                return numberOption(...contents);
            default:
                return null;
        }
    }

    function messageOption() {
        return (
            <div className='pop-up-buttons-container'>
                <button className='pop-up-buttons' onClick={closePopup}>{contents}</button>
            </div>
        );
    }
    function boolOption(trueValue, falseValue) {
        function handleTrue() {
            returnValue(true);
            closePopup();
        }
        function handleFalse() {
            returnValue(false);
            closePopup();
        }

        return (
            <div className='popup-segment-container'>
                <button className='popup-buttons popup-leftcorner' onClick={handleTrue}>{trueValue}</button>
                <button className='popup-buttons popup-rightcorner' onClick={handleFalse}>{falseValue}</button>
            </div>
        );
    }
    function numberOption(placeholder, min, max, buttonText) {
        const [inputValue, setInputValue] = useState('');

        function handleChange(event) {
            if (event < min) return;
            if (event > max) return;
            if (event.includes('.')) return;
            setInputValue(event);
        }

        function handleSubmit() {
            returnValue(inputValue);
            closePopup();
        }

        return (
            <div className='popup-segment-container'>
                <input type='number' placeholder={placeholder} min={min} max={max} value={inputValue} onChange={(e) => handleChange(e.target.value)} />
                <button className='popup-buttons' onClick={handleSubmit}>
                    {buttonText}
                </button>
            </div>
        );
    }

    return (
        <div ref={popupRef} onClick={handleClose} className='popup-backdrop'>
            {renderPopup()}
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