/* Stylesheets */
import '../styles/product-edit.css'

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

/* Redux Slice */
import { addProduct, updateProduct } from '../states/slices/artistDataSlice'

/* Render Modules */
import renderModuleView from '../artist-functions/products/renderModuleView';
import renderModuleEdit from '../artist-functions/products/renderModuleEdit';
import renderEditTab from '../artist-functions/products/renderEditTab';

function testView() {
    /* Redux */
    const artistData = useSelector((state) => state.artist.artist);
    const dispatch = useDispatch();

    const [product, setProduct] = useState(useSelector((state) => state.artist.artist.products[0]));

    /* System */
    const [isEditing, setIsEditing] = useState(-1);

    /* Functions */
    function handleChange(event, key) {
        setProduct({ ...product, [key]: event.target.value });
    }
    function dataCheck() {
        console.log(product);
    }


    function renderModule(moduleItem, index) {
        if (isEditing === index) {
            return (<> {renderEditTab(moduleItem, index, setIsEditing)} {renderModuleEdit(moduleItem, index, setIsEditing)} </>);
        }

        return renderModuleView(moduleItem, index, setIsEditing);
    }

    return (
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

            {product.module.map((m, idx) => renderModule(m, idx))}

            <button className='prod-btn-addModule' onClick={dataCheck}>
                Data Check
            </button>

        </div>
    );
}

export default testView;