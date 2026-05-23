/* Stylesheets */
import './product.css'

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

/* Redux Slice */
import { addProduct, updateProduct } from '../states/slices/artistDataSlice'

function testView() {
    /* Redux */
    const artistData = useSelector((state) => state.artist.artist);
    const dispatch = useDispatch();

    /* System */


    return (
        <div className='comp-prod'>
            <h1>Product Info</h1>

            <p className='prod-variable-name'>Product name:</p>
            <input
                className="prod-textbox"
                type="text"
                placeholder="Product Name" />
            <p className='prod-variable-name'>Product description:</p>
            <textarea
                className="prod-textbox"
                placeholder="Product Description" />
            
            {/*  */}
            <h2>Product Module</h2>
            
            {/* module type 0 | static type | Module Title | id format: stm-ttl<n> */}
            <div className="module-container">
                <div className='module-tab'>
                    <span>ID: stm-ttl01</span>
                    <a>✓</a>
                    <a>↩</a>
                    <a>✕</a>
                </div>
                <div className='module-options'>
                    <i className='module-text'>Title</i>
                    <input type='text' className='input-textbox' placeholder='text here!' />
                    <i className='module-text'>Size</i>
                    <select className='input-textbox'>
                        <option value="h1">H1</option>
                        <option value="h2">H2</option>
                        <option value="h3">H3</option>
                    </select>
                </div>
            </div>

            {/* module type 1 | input type | text input |  id format: inm-txt<n> */}
            <div className="module-container">
                <div className='module-tab'>
                    <span>ID: inm-txt02</span>
                    <a>✓</a>
                    <a>↩</a>
                    <a>✕</a>
                </div>
                <div className='module-options'>
                    <i className='module-text'>Textbox Name</i>
                    <input type='text' className='input-textbox' placeholder='text here!' />
                </div>
            </div>

            <div className="module-container">
            <p className='prod-variable-name'>Module 2 [user input text]:</p>
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

            <div className="module-container">
            <p className='prod-variable-name'>Module 3 [user input numbers]:</p>
                <div className='module-options'>
                    <i className='module-text'>Minimum</i>
                    <input type='number' className='input-textbox' placeholder='number' />
                    <i className='module-text'>Maximum</i>
                    <input type='number' className='input-textbox' placeholder='number' />
                </div>
            </div>





            

            <div className="module-container">
            <p className='prod-variable-name'>Module  [radio options]:</p>
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

            <div className="module-container">
            <p className='prod-variable-name'>Module  [condition target]:</p>
                <div className='module-options'>
                    <input type='text' className='input-textbox' placeholder='module target' />
                    &nbsp;
                    <input type='number' className='input-textbox' placeholder='module value' />
                </div>

                <button className='module-btn-addOptions'>+</button>
            </div>

            <div className="module-container">
            <p className='prod-variable-name'>Module  [condition effect]:</p>
                <div className='module-options'>
                    <input type='text' className='input-textbox' placeholder='condition target' />
                </div>

                <button className='module-btn-addOptions'>+</button>
            </div>
            
            <button className='btn-add-module'>
                Test
            </button>
        </div>
    );
}

export default testView;