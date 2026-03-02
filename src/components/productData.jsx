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
        details: {},
    });
    function InputNameChange(event) {
        setprod({...prod, name: event.target.value});
        console.log(prod);
    }
    function InputDescChange(event) {
        setprod({...prod, description: event.target.value});
        console.log(prod);
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
            <button>
                +
            </button>
        </div>
    );
}

export default productData;