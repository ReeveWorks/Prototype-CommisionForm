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
            
            {/*  */}
            <div className="module-container">
            <p className='prod-variable-name'>Module 1 [radio options]:</p>
                <div className='radiobox-module-options'>
                    1:<input type='text' className='input-textbox' placeholder='Option 1' />
                    <input type='number' className='input-textbox' placeholder='Price' />
                    <button className='radiobox-btn-delOptions'>✕</button>
                </div>
                <div className='radiobox-module-options'>
                    2:<input type='text' className='input-textbox' placeholder='Option 2' />
                    <input type='number' className='input-textbox' placeholder='Price' />
                    <button className='radiobox-btn-delOptions'>✕</button>
                </div>

                <button className='radiobox-btn-addOptions'>+</button>
            </div>
            <br />

            <div className="module-container">
            <p className='prod-variable-name'>Module 2 [condition target]:</p>
                <div className='radiobox-module-options'>
                    <input type='text' className='input-textbox' placeholder='Module Target' />
                    <input type='number' className='input-textbox' placeholder='Module Value' />
                </div>

                <button className='radiobox-btn-addOptions'>+</button>
            </div>
            <br />

            <div className="module-container">
            <p className='prod-variable-name'>Module 3 [condition effect]:</p>
                <div className='radiobox-module-options'>
                    <input type='text' className='input-textbox' placeholder='Condition Target' />
                </div>

                <button className='radiobox-btn-addOptions'>+</button>
            </div>

            <br />
            <button className='btn-add-module'>
                Test
            </button>
        </div>
    );
}

export default productData;