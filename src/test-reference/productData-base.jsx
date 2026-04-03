/* Stylesheets */
import '../styles/product-edit.css'

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
    const [testProd, setprod] = useState({
        name: "Chibi",
        description: "A chibi reaction stickers to your liking!",
        module: [
            { id: "stm-ttl01", type: "title", content: "Fill in your commission details!", size: "h3" },
            { id: "inm-txt02", type: "text-input", content: "Any additional details?" },
        ],
    });

    function handleChange(event, key) {
        setprod({ ...testProd, [key]: event.target.value })
    }

    function handleChangeModule(index, key, value) {
        const newModule = testProd.module.map((thisModule, idx) => {
            if (idx !== index) return thisModule;
            return { ...thisModule, [key]: value };
        });
        setprod({ ...testProd, module: newModule });
    }


    return (
        <div className='comp-prod'>
            <br />
            <input
                className="prod-text prod-title"
                type="text"
                value={testProd.name}
                onChange={(event) => handleChange(event, "name")}
                placeholder="Product Name" />

            <textarea
                className="prod-text"
                value={testProd.description}
                onChange={(event) => handleChange(event, "description")}
                placeholder="Product Description" />

            <p className='prod-divider' />

            {/*  */}
            {/* <h2>Product Module</h2> */}

            {/* module type 0 | static type | Module Text | id format: stm-txt<n> */}
            <div className='prod-module'>
                {testProd.module[0].content}
            </div>

            <br/>

            <div>
                <textarea placeholder="Enter module content..." />
            </div>
            {/* module type 1 | input type | text input |  id format: inm-txt<n> */}
            {/* <div className="module-container">
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
            </div> */}

            {/* <div className="module-container">
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
            </div> */}

            {/* <div className="module-container">
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
            </div> */}
            {/*             
            <button className='btn-add-module'>
                Test
            </button> */}
        </div>
    );
}

export default testView;