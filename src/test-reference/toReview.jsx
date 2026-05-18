
function toReview() {
    // renderPopup.jsx
     const handleClose = (event) => {
         if (popupRef.current === event.target) {
             if (typeof returnValue === 'function') returnValue(null);
             closePopup();
         }
     }

    // productData.jsx
    function openPopup(type, title, message, contents, onResult) {
        return new Promise((resolve) => {
            setPopupProps({ type: type, title: title, message: message, contents: contents, returnValue: (val) => { if (onResult) onResult(val); resolve(val); } });
            setIsPopupOpen(true);
        });
    }
};