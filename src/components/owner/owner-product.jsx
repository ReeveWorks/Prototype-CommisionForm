/* Stylesheets */
import './styles/product.css'

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'
import { useState, Fragment } from 'react';

/* Redux Slice */
import { addProduct, updateProduct } from '../../states/slices/artistDataSlice'

/* Render Modules */
import renderModuleView from '../../modals/products/renderModuleView';
import renderModuleEdit from '../../modals/products/renderModuleEdit';
import renderEditTab from '../../modals/products/renderEditTab';
import toolDev from '../../modals/global/toolDev';

/* Render Pop-up */
import PopupModal from '../../modals/global/renderPopup';

function ownerProduct() {
    // Redux 
    const artistData = useSelector((state) => state.artist.artist);
    const dispatch = useDispatch();

    const [product, setProduct] = useState(useSelector((state) => state.artist.artist.products[0]));

    // State
    const [isEditing, setIsEditing] = useState(-1);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Pop-up Props
    const [popupProps, setPopupProps] = useState({});


    // Functions
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

        renderPopup("bool", popupTitle(), popupMessage(), ["Yes!", "Nope!"], (item) => {
            if (item === true) {
                setProduct({ ...product, module: product.module.filter(m => m.id !== moduleId) })
            }
            setIsPopupOpen(false);
        });
    }
    async function popupAddModule() {

        let selected = await renderPopup(
            "options",
            "Add Module",
            "select what type of module you want to add:",
            ["Static Text", "Text Input", "Number Input"]
        );

        if (selected === "Static Text") {
            let newModule =
            {
                id: `st-txt${String(product.module.length + 1).padStart(2, '0')}`,
                type: "Static Text",
                bold: false,
                textAlign: "left",
                size: 20,
                spacing: 10,
                content: "",
            };
            setProduct({ ...product, module: [...product.module, newModule] });
        }
        else if (selected === "Text Input") {
            let newModule =
            {
                id: `in-txt${String(product.module.length + 1).padStart(2, '0')}`,
                type: "Text Input",
                isRequired: false,
                bold: false,
                textbox: false,
                textAlign: "left",
                size: 20,
                spacing: 10,
                content: "",
            };
            setProduct({ ...product, module: [...product.module, newModule] });
        }
        else if (selected === "Number Input") {
            let newModule =
            {
                id: `in-num${String(product.module.length + 1).padStart(2, '0')}`,
                type: "Number Input",
                bold: false,
                size: 20,
                spacing: 10,
                isRequired: false,
                content: "",
                min: 1,
                max: 10,
            };
            setProduct({ ...product, module: [...product.module, newModule] });
        }

    }

    // Render
    function renderModule(moduleItem, index) {
        if (isEditing === index) {
            return (<>
                {renderEditTab(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange, DeleteModule)}
                {renderModuleEdit(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange)}
            </>);
        }

        return renderModuleView(moduleItem, index, setIsEditing);
    }
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

            {toolDev()}

            <div className='owner-product'>
                <br />
                <input className='owner-product-items txt-h1 font-bold'
                    type="text"
                    value={product.name}
                    onChange={(event) => handleChange(event, "name")}
                    placeholder="Product Name*" />
                <textarea className='owner-product-items txt-h3'
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

                <button className='txt-unselectable' onClick={() => popupAddModule()}>
                    Add Module
                </button>
                <br /><br />
                <button className='txt-unselectable' onClick={() => popupCheck()}>
                    Data Check
                </button>
            </div>
        </div>
    );
}

export default ownerProduct;