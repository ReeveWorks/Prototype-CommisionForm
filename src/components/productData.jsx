/* Stylesheets */
import '../styles/product-edit.css'

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

/* Redux Slice */
import { addProduct, updateProduct } from '../states/slices/artistDataSlice'

/* Component */
import renderModuleView from '../artist-functions/products/renderModuleView';

function testView() {
    /* Redux */
    const artistData = useSelector((state) => state.artist.artist);
    const dispatch = useDispatch();

    const [product, setProduct] = useState(useSelector((state) => state.artist.artist.products[0]));

    function dataCheck() {
        console.log(product);
    }


    function renderModule(moduleItem, index) {
        // if (isEditing === index) {
        //     return renderModuleEdit(moduleItem, index);
        // }
        return renderModuleView(moduleItem, index);
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