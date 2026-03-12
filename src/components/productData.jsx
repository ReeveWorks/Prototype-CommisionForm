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
            Select Quantity
            <div className="module-container">
                <label for='rad1'>
                    <div className='radiobox'>
                        <input type='radio' id='rad1' name='quantity' className='prod-radio-buttons' />
                        1x | PHP 200
                    </div>
                </label>

                <label for='rad2'>
                    <div className='radiobox' for="rad2">
                        <input type='radio' id='rad2' name='quantity' className='prod-radio-buttons' />
                        5  x | PHP 800
                    </div>
                </label>

                <label for='rad3'>
                    <div className='radiobox' for="rad3">
                        <input type='radio' id='rad3' name='quantity' className='prod-radio-buttons' />
                        Other
                        <input type='number' className='input-textbox' placeholder='type custom quantity here!'/>
                        <label>✕ PHP 200</label>
                    </div>
                </label>

                <button className='radiobox-btn-addOptions'>
                    +
                </button>
            </div>

            <br />
            <button onClick={() => addmodule()}>
                Test
            </button>
        </div>
    );
}

export default productData;