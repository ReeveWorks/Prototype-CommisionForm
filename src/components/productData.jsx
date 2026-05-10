/* Stylesheets */
import '../styles/product-edit.css'
import '../styles/popup.css'

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'
import { useState, Fragment } from 'react';

/* Redux Slice */
import { addProduct, updateProduct } from '../states/slices/artistDataSlice'

/* Render Modules */
import renderModuleView from '../artist-functions/products/renderModuleView';
import renderModuleEdit from '../artist-functions/products/renderModuleEdit';
import renderEditTab from '../artist-functions/products/renderEditTab';

/* Render Pop-up */
import PopupModel from '../artist-functions/others/renderPopup';

function testView() {
    /* Redux */
    const artistData = useSelector((state) => state.artist.artist);
    const dispatch = useDispatch();

    const [product, setProduct] = useState(useSelector((state) => state.artist.artist.products[0]));

    /* State */
    const [isEditing, setIsEditing] = useState(-1);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    /// Pop-up Props
    const [popupProps, setPopupProps] = useState({});
    const [popupReturnValue, setPopupReturnValue] = useState();


    /* Functions */
    function handleChange(event, key) {
        setProduct({ ...product, [key]: event.target.value });
    }
    function handleChangeModule(event, moduleId, key) {
        console.log(event);
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

    function dataCheck() {
        console.log(product);
    }

    /* Render */
    function renderModule(moduleItem, index) {
        if (isEditing === index) {
            return (<>
                {renderEditTab(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange)}
                {renderModuleEdit(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange)}
            </>);
        }

        return renderModuleView(moduleItem, index, setIsEditing);
    }
    function renderPopup(type, title, message, contents) {
        setPopupProps({ type:type, title:title, message:message, contents:contents });
        setIsPopupOpen(true);
    }

    return (
        <>
            {isPopupOpen && <PopupModel
                type={popupProps.type}
                title={popupProps.title}
                message={popupProps.message}
                contents={popupProps.contents}
                returnValue={setPopupReturnValue}
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

                <button className='prod-btn-addModule' onClick={dataCheck}>
                    Data Check
                </button>

                <button className='prod-btn-addModule' onClick={() =>renderPopup("bool", "Pop-up Title", "Is this a Pop-up?", ["Yes", "Nah"])}>
                    Pop-up
                </button>

                {popupReturnValue ? <p>Your answer is correct!</p> : <p>Your answer is wrong!</p>}
            </div>
        </>
    );
}

export default testView;