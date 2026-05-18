/* Stylesheets */
import '../../styles/product-edit.css'
import '../../styles/popup.css'
import { useRef, useState } from 'react';

function RenderPopupMessage({ type, title, message, contents, returnValue, closePopup }) {
    const popupRef = useRef();

    /// type: alert, bool, number, text
    /// title: title of the pop-up
    /// message: message to be displayed in the pop-up
    /// contents
    ///     for alert: [closeButtonText]
    ///     for bool: [trueValue-ButtonName, falseValue-ButtonName]
    ///     for number: {placeholder, min, max, buttonText}
    ///     for text: {placeholder, minLength, maxLength, buttonText}
    ///     for alertplus: [closeButtonText, additionalContent]
    /// returnValue: for input type, the value to be returned when the user clicks the confirm button

    const handleClose = (event) => {
        if (popupRef.current === event.target) {
            if (typeof returnValue === 'function') returnValue(null);
            closePopup();
        }
    }

    function renderPopup() {
        return (
            <div className='popup-container txt-unselectable'>
                <h1>{title}</h1>
                <p className='popup-diver' />
                <span>{message}</span>
                {renderSegment(type, title, message, contents)}
            </div>
        );
    }
    function renderSegment(type, title, message, popupContents) {
        switch (type) {
            case 'alert':
                return alertOption();
            case 'bool':
                return boolOption(...popupContents);
            case 'number':
                return numberOption(...popupContents);
            case 'text':
                return textOption(...popupContents);
            case 'alertplus':
                return alertPlusOption(type, title, message, popupContents);
            default:
                return null;
        }
    }

    /// Pop-up Segments
    function alertOption() {
        function handleConfirm() {
            if (typeof returnValue === 'function') returnValue(null);
            closePopup();
        }

        return (
            <div className='popup-segment-container'>
                <button className='popup-buttons popup-leftcorner popup-rightcorner' onClick={handleConfirm}>{contents}</button>
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
                <input type='number' className='popup-leftcorner' placeholder={placeholder} min={min} max={max} value={inputValue} onChange={(e) => handleChange(e.target.value)} />
                <button className='popup-buttons popup-rightcorner' onClick={handleSubmit}>
                    {buttonText}
                </button>
            </div>
        );
    }
    function textOption(placeholder, minLength, maxLength, buttonText) {
        const [inputValue, setInputValue] = useState('');

        function handleSubmit() {
            returnValue(inputValue);
            closePopup();
        }

        return (
            <div className='popup-segment-container'>
                <input
                    type='text'
                    className='popup-leftcorner'
                    placeholder={placeholder}
                    minLength={minLength}
                    maxLength={maxLength}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                <button className='popup-buttons popup-rightcorner' onClick={handleSubmit}>
                    {buttonText}
                </button>
            </div>
        );
    }

    /// for plus options
    function alertPlusOption(popupContents) {
        function openNextPopup(type, title, message, contents) {
            console.log(popupContents[0]);
            return (
                <div className='popup-container txt-unselectable'>
                    <h1>{title}</h1>
                    <p className='popup-diver' />
                    <span>{message}</span>
                    {renderSegment(popupContents[1])}
                </div>
            );
        }

        return (
            <div className='popup-segment-container'>
                <button className='popup-buttons popup-leftcorner popup-rightcorner' onClick={openNextPopup(popupContents[1][0], popupContents[1][1], popupContents[1][2], popupContents[1][3])}>
                    {popupContents[0]}
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