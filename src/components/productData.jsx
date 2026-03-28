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
    const [testProd, setprod] = useState({
        name: "Chibi",
        description: "A chibi reaction stickers to your liking!",
        module: [
            { id: "stm-ttl01", type: "title", content: "Fill in your commission details!", size: "h3" },
            { id: "inm-txt02", type: "text-input", content: "Any additional details?" },
        ],
    });

    function handleChange(event, key) {
        setprod({ ...testProd, [key]: event.target.value });
    }

    function handleModuleChange(index, key, value) {
        const newModule = testProd.module.map((thisModule, idx) => {
            if (idx !== index) return thisModule;
            return { ...thisModule, [key]: value };
        });
        setprod({ ...testProd, module: newModule });
    }


    function renderModuleInput(moduleItem, index) {
        switch (moduleItem.type) {
            case 'title':
                return (
                    <div key={index} className="module-container">
                        <div className='module-tab'>
                            <span>ID: {moduleItem.id}</span>
                            <a>✓</a>
                            <a>↩</a>
                            <a>✕</a>
                        </div>
                        <div className='module-options'>
                            <i className='module-text'>Title</i>
                            <input
                                type='text'
                                className='input-textbox'
                                placeholder='text here!'
                                value={moduleItem.content}
                                onChange={(e) => handleModuleChange(index, 'content', e.target.value)} />
                            <i className='module-text'>Size</i>
                            <select
                                className='input-textbox'
                                value={moduleItem.size}
                                onChange={(e) => handleModuleChange(index, 'size', e.target.value)}>
                                <option value="h1">H1</option>
                                <option value="h2">H2</option>
                                <option value="h3">H3</option>
                                <option value="h3">Base</option>
                            </select>
                        </div>
                    </div>
                );
            case 'text-input':
                return (
                    <div key={index} className="module-container">
                        <div className='module-tab'>
                            <span>ID: {moduleItem.id}</span>
                            <a>✓</a>
                            <a>↩</a>
                            <a>✕</a>
                        </div>
                        <div className='module-options'>
                            <i className='module-text'>Textbox Name</i>
                            <input
                                type='text'
                                className='input-textbox'
                                placeholder='text here!'
                                value={moduleItem.content}
                                onChange={(e) => handleModuleChange(index, 'content', e.target.value)} />
                        </div>
                    </div>
                );
        }
    }

    return (
        <div className='comp-prod'>
            <h1>Product Info</h1>

            <p className='prod-variable-name'>Product name:</p>
            <input
                className="prod-textbox"
                type="text"
                value={testProd.name}
                onChange={(event) => handleChange(event, "name")}
                placeholder="Product Name" />

            <br />
            <p className='prod-variable-name'>Product description:</p>
            <textarea
                value={testProd.description}
                onChange={(event) => handleChange(event, "description")}
                className="prod-textbox"
                placeholder="Product Description" />
            <br />

            {/*  */}
            {testProd.module.map((m, idx) => renderModuleInput(m, idx))}
            {/*  */}

            <br />

            {/* <button className='btn-add-module'>
                Test
            </button> */}
        </div>
    );
}

export default productData;