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
            { type: "price", currency: "PHP", price: 5 },
            { type: "category", category: "Sticker" },
        ],
    });
    function InputNameChange(event) {
        setprod({ ...prod, name: event.target.value });
    }
    function InputDescChange(event) {
        setprod({ ...prod, description: event.target.value });
    }

    function addmodule() {
        setprod({
            ...prod, module: [
                ...prod.module,
                { type: "other", description: "test" },
            ]
        });
        console.log(prod);
    }


    return (
        <div className='comp-prod'>
            <br />
            <h1>Product Info</h1>
            <br />
            <input
                className="prod-textbox"
                type="text"
                value={prod.name}
                onChange={InputNameChange}
                placeholder="Product Name" />
            <textarea
                className="prod-textbox"
                rows="3"
                value={prod.description}
                onChange={InputDescChange}
                placeholder="Product Description" />
            <br />

            <br />
            <button onClick={() => addmodule()}>
                Test
            </button>
        </div>
    );
}

export default productData;