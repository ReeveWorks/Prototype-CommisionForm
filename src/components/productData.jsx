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
            { id: "stm-ttl01", type: "title", content: "Time to fill in your commission details!", size: "h1" },
            { id: "inm-txt01", type: "text-input", content: "Number of stickers" },
        ],
    });


    return (
        <div className='comp-prod'>
            <h1>Product Info</h1>

            <p className='prod-variable-name'>Product name:</p>
            <input
                className="prod-textbox"
                type="text"
                value={testProd.name}
                placeholder="Product Name" />

            <br />
            <p className='prod-variable-name'>Product description:</p>
            <textarea
                value={testProd.description}
                className="prod-textbox"
                placeholder="Product Description" />
            <br />
            
            {/*  */}

            {/*  */}
            
            <br />

            {/* <button className='btn-add-module'>
                Test
            </button> */}
        </div>
    );
}

export default productData;