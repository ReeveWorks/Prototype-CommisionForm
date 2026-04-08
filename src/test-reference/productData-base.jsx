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
            {
                id: "stm-ttl01",
                type: "title",
                size: "18",
                spacing: "7",
                content: "Fill in your commission details!",
            },
            {
                id: "inm-txt02",
                type: "text-input",
                size: "13",
                spacing: "5",
                content: "Commission Title"
            },
            {
                id: "inm-txt03",
                type: "txtblock-input",
                size: "13",
                spacing: "5",
                content: "Details"
            },
        ],
    });

    function handleChange(event, key) {
        setprod({ ...testProd, [key]: event.target.value })
    }

    function selectModule(moduleItem, e) {
        document.querySelectorAll('.selected-module').forEach(el => el.classList.remove('selected-module'));
        e.target.classList.add("selected-module");
        console.log(moduleItem);
    }

    function renderModuleInput(moduleItem, index) {
        switch (moduleItem.type) {
            case 'title':
                return (
                    <div className='prod-module'
                        key={index}
                        id={moduleItem.id}
                        style={{ fontSize: `${moduleItem.size}px`, marginBottom: `${moduleItem.spacing}px`, textAlign: 'center' }}
                        onClick={(e) => selectModule(moduleItem, e)}>
                        {moduleItem.content}
                    </div>
                );
            case 'text-input':
                return (
                    <div className='prod-module'
                        key={index}
                        id={moduleItem.id}
                        style={{ fontSize: `${moduleItem.size}px`, marginBottom: `${moduleItem.spacing}px` }}
                        onClick={(e) => selectModule(moduleItem, e)}>
                        {moduleItem.content}
                        <p className='mock-textbox' style={{ height: '17px' }}/>
                    </div>
                );
            case 'txtblock-input':
                return (
                    <div className='prod-module'
                        key={index}
                        id={moduleItem.id}
                        style={{ fontSize: `${moduleItem.size}px`, marginBottom: `${moduleItem.spacing}px` }}
                        onClick={(e) => selectModule(moduleItem, e)}>
                        {moduleItem.content}
                        <p className='mock-textbox' style={{ height: '45px' }}/>
                    </div>
                );
        }
    }

    return (
        <div className='comp-prod'>
            <br />
            <input className="prod-text prod-title"
                type="text"
                value={testProd.name}
                onChange={(event) => handleChange(event, "name")}
                placeholder="Product Name*" />
            <textarea className="prod-text"
                value={testProd.description}
                onChange={(event) => handleChange(event, "description")}
                placeholder="Product Description*" />
            <p className='prod-divider' />

            {/*  */}
            {testProd.module.map((m, idx) => renderModuleInput(m, idx))}
            {/*  */}

        </div>
    );
}

export default testView;