/* Stylesheets */
import '../styles/product.css'

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

/* Redux Slice */
import { addProduct, updateProduct } from '../states/slices/artistDataSlice'

function productData() {
    /* Redux */
    const artistData = useSelector((state) => state.artist.artist);
    const dispatch = useDispatch();

    /* System */


    return (
        <div className='comp-prod'>
            <br />
            <h1>Product Info</h1>
            <br />

            <p className='prod-variable-name'>Product name:</p>
            <input
                className="prod-textbox"
                type="text"
                placeholder="Product Name" />
            
            <br />
            <p className='prod-variable-name'>Product description:</p>
            <textarea
                className="prod-textbox"
                rows="3"
                placeholder="Product Description" />
            <br />

            <br />
            <button className='btn-add-module'>
                Test
            </button>
        </div>
    );
}

export default productData;