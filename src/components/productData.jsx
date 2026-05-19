/* Stylesheets */
import '../styles/product-edit.css'
import '../styles/popup.css'

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'
import { useState, Fragment } from 'react';

/* Redux Slice */
import { addProduct, updateProduct } from '../states/slices/artistDataSlice'

/* Render Modules */
import renderModuleView from '../module/products/renderModuleView';
import renderModuleEdit from '../module/products/renderModuleEdit';
import renderEditTab from '../module/products/renderEditTab';

/* Render Pop-up */
import PopupModel from '../module/others/renderPopup';

function productData() {
    /* Redux */
    const artistData = useSelector((state) => state.artist.artist);
    const dispatch = useDispatch();

    const [product, setProduct] = useState(useSelector((state) => state.artist.artist.products[0]));

    /* State */
    const [isEditing, setIsEditing] = useState(-1);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    /// Pop-up Props
    const [popupProps, setPopupProps] = useState({});


    /* Functions */
    function handleChange(event, key) {
        setProduct({ ...product, [key]: event.target.value });
    }
    function handleChangeModule(event, moduleId, key) {
        let nValue = event;
        if (key === "size" || key === "spacing") {
            nValue = Number(nValue);
        }
        else if (event === "true") {
            nValue = true;
        }
        else if (event === "false") {
            nValue = false;
        }
        else if (event === "on") {
            nValue = true;
        }
        else if (event === "off") {
            nValue = false;
        }

        setProduct({ ...product, module: product.module.map(m => m.id === moduleId ? { ...m, [key]: nValue } : m) })
    }
    function handleNumberChange(event, moduleId, key, min, max) {
        if (event < min) return;
        if (event > max) return;
        if (event.includes('.')) return;
        handleChangeModule(event, moduleId, key);
    }
    function DeleteModule(moduleId) {
        function popupTitle() {
            return (
                <div style={{ fontWeight: 'normal' }} >
                    Delete <span className='txt-accent font-bold'>{moduleId}</span>
                </div>
            );
        }
        function popupMessage() {
            return (
                <div>
                    Are you sure you want to delete <span className='txt-accent font-bold'>{moduleId}</span>?
                </div>
            );
        }

        openPopup("bool", popupTitle(), popupMessage(), ["Yes!", "Nope!"], (item) => {
            if (item === true) {
                setProduct({ ...product, module: product.module.filter(m => m.id !== moduleId) })
            }
            setIsPopupOpen(false);
        });
    }

    function dataCheck() {
        console.log(product);
    }
    async function popupCheck() {

        await openPopup(
            "text",
            "Pop-up 1",
            "This is the first pop-up!",
            ["Type something...", 3, 10, "Submit"],
            (item) => {
            });
        //  for text: {placeholder, minLength, maxLength, buttonText}

        // await openPopup(
        //     "alert",
        //     "Pop-up 2",
        //     "This is the second pop-up!",
        //     "Close pop-up",
        //     (item) => { });
    }

    function openPopup(type, title, message, contents, onResult) {
        setPopupProps({ type: type, title: title, message: message, contents: contents, returnValue: onResult });
        setIsPopupOpen(true);

        // return new Promise((resolve) => {
        //     setPopupProps({ type: type, title: title, message: message, contents: contents, returnValue: (val) => { if (onResult) onResult(val); resolve(val); } });
        //     setIsPopupOpen(true);
        // });
    }

    /* Render */
    function renderModule(moduleItem, index) {
        if (isEditing === index) {
            return (<>
                {renderEditTab(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange, DeleteModule)}
                {renderModuleEdit(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange)}
            </>);
        }

        return renderModuleView(moduleItem, index, setIsEditing);
    }

    return (
        <>
            {isPopupOpen && <PopupModel
                type={popupProps.type}
                title={popupProps.title}
                message={popupProps.message}
                contents={popupProps.contents}
                returnValue={popupProps.returnValue}
                closePopup={() => setIsPopupOpen(false)} />}

            <div className='comp-prod'>
                <br />
                <input className="prod-text prod-title prod-hover"
                    type="text"
                    value={product.name}
                    onChange={(event) => handleChange(event, "name")}
                    placeholder="Product Name*" />
                <textarea className="prod-text txt-h3 prod-hover"
                    value={product.description}
                    onChange={(event) => handleChange(event, "description")}
                    placeholder="Product Description*" />
                <p className='prod-divider' />


                {/* Why this does not work? */}
                {/* {product.module.map((m, idx) => renderModule(m, idx)) } */}

                {/* Why this work? */}
                {product.module.map((m, idx) => (
                    <Fragment key={m.id ?? idx}>
                        {renderModule(m, idx)}
                    </Fragment>
                ))}

                <button className='prod-btn-addModule txt-unselectable' onClick={dataCheck}>
                    Data Check
                </button>

                <button className='prod-btn-addModule txt-unselectable' onClick={() => popupCheck()}>
                    Pop-up
                </button>
            </div>
        </>
    );
}

export default productData;