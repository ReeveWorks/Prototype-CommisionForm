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
            <p className='prod-variable-name'>Module 0 [header]:</p>
                <div className='module-options'>
                    <i className='module-text'>Title</i>
                    <input type='text' className='input-textbox' placeholder='text here!' />
                </div>
            </div>
            <br />

            <div className="module-container">
            <p className='prod-variable-name'>Module 1 [radio options]:</p>
                <div className='module-options'>
                    <i className='module-text'>1</i>
                    <input type='text' className='input-textbox' placeholder='option 1' />
                    &nbsp;
                    <input type='number' className='input-textbox' placeholder='price' />
                    <button className='module-btn-delOptions'>✕</button>
                </div>
                <div className='module-options'>
                    <i className='module-text'>2</i>
                    <input type='text' className='input-textbox' placeholder='option 2' />
                    &nbsp;
                    <input type='number' className='input-textbox' placeholder='price' />
                    <button className='module-btn-delOptions'>✕</button>
                </div>

                <button className='module-btn-addOptions'>+</button>
            </div>
            <br />

            <div className="module-container">
            <p className='prod-variable-name'>Module 2 [condition target]:</p>
                <div className='module-options'>
                    <input type='text' className='input-textbox' placeholder='module target' />
                    &nbsp;
                    <input type='number' className='input-textbox' placeholder='module value' />
                </div>

                <button className='module-btn-addOptions'>+</button>
            </div>
            <br />

            <div className="module-container">
            <p className='prod-variable-name'>Module 3 [condition effect]:</p>
                <div className='module-options'>
                    <input type='text' className='input-textbox' placeholder='condition target' />
                </div>

                <button className='module-btn-addOptions'>+</button>
            </div>
            <br />

            <div className="module-container">
            <p className='prod-variable-name'>Module 4 [user input numbers]:</p>
                <div className='module-options'>
                    <i className='module-text'>Minimum</i>
                    <input type='number' className='input-textbox' placeholder='number' />
                    <i className='module-text'>Maximum</i>
                    <input type='number' className='input-textbox' placeholder='number' />
                </div>
            </div>
            <br />

            <div className="module-container">
            <p className='prod-variable-name'>Module 5 [user input text]:</p>
                <div className='module-options'>
                    <i className='module-text'>Minimum</i>
                    <input type='number' className='input-textbox' placeholder='character' />
                    <i className='module-text'>Maximum</i>
                    <input type='number' className='input-textbox' placeholder='character' />
                </div>
                <div className='module-options'>
                    <i className='module-text'>Row Number</i>
                    <input type='number' className='input-textbox' placeholder='number of rows' />
                </div>
            </div>
            <br />
            
            <div className="module-container">
            <p className='prod-variable-name'>Module 6 [text]:</p>
                <div className='module-options'>
                    <i className='module-text'>Content</i>
                    <input type='text' className='input-textbox' placeholder='text here!' />
                </div>
                <div className='module-options'>
                    <i className='module-text'>Row Number</i>
                    <input type='number' className='input-textbox' placeholder='number of rows' />
                </div>
            </div>
            
            <br />
            <button className='btn-add-module'>
                Test
            </button>
        </div>
    );
}

export default productData;