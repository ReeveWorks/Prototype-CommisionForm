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

    const [product, setProduct] = useState(useSelector((state) => state.artist.artist.products[0]));

    function dataCheck() {
        console.log(product);
    }

    return (
        <div className='comp-prod'>
            <br />

            <button className='prod-btn-addModule' onClick={dataCheck}>
                +
            </button>

        </div>
    );
}

export default testView;