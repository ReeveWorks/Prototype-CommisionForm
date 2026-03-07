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
    const [prod, setprod] = useState({
        name: "Chibi",
        description: "",
        module: [
            {type: "price", currency:"PHP", price: 5},
            {type: "category", category: "Sticker"},
        ],
    });

    function InputNameChange(event) {
        setprod({...prod, name: event.target.value});
    }
    function InputDescChange(event) {
        setprod({...prod, description: event.target.value});
    }

    function addmodule() {
        setprod({...prod, module: [
            ...prod.module,
            {type: "other", description: ""},
        ]});
        console.log(prod);
    }

    function handleModuleChange(index, key, value) {
        const newModule = prod.module.map((m, idx) => {
            if (idx !== index) return m;
            return { ...m, [key]: value };
        });
        setprod({ ...prod, module: newModule });
    }

    function renderModuleInput(moduleItem, index) {
        switch (moduleItem.type) {
            case 'price':
                return (
                    <div key={index} className="module-row">
                        <label>Currency:</label>
                        <input
                            type="text"
                            value={moduleItem.currency}
                            onChange={(e) => handleModuleChange(index, 'currency', e.target.value)}
                        />
                        <label>Price:</label>
                        <input
                            type="number"
                            value={moduleItem.price}
                            onChange={(e) => handleModuleChange(index, 'price', e.target.value)}
                        />
                    </div>
                );
            case 'category':
                return (
                    <div key={index} className="module-row">
                        <label>Category:</label>
                        <input
                            type="text"
                            value={moduleItem.category}
                            onChange={(e) => handleModuleChange(index, 'category', e.target.value)}
                        />
                    </div>
                );
            default:
                return (
                    <div key={index} className="module-row">
                        <label>Type:</label>
                        <input
                            type="text"
                            value={moduleItem.type}
                            onChange={(e) => handleModuleChange(index, 'type', e.target.value)}
                        />
                        <label>Description:</label>
                        <input
                            type="text"
                            value={moduleItem.description || ''}
                            onChange={(e) => handleModuleChange(index, 'description', e.target.value)}
                        />
                    </div>
                );
        }
    }


    return (
        <div>
            <br />
            <h1>Product Info</h1>
            <br />
            <input
                className="prod-textbox"
                type="text"
                value={prod.name}
                onChange={InputNameChange}
                placeholder="Product Name" />
            <br />
            <textarea
                className="prod-textbox"
                rows="3"
                cols="40"
                value={prod.description}
                onChange={InputDescChange}
                placeholder="Product Description" />
            <br />
            {/* modules list */}
            
            {prod.module.map((m, idx) => renderModuleInput(m, idx))}
            
            <button
                onClick={() => addmodule()}>
                Add module
            </button>
        </div>
    );
}

export default productData;