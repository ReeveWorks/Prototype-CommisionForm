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
    function handleChangeModule(event, moduleId, key) {
        setprod({ ...testProd, module: testProd.module.map(m => m.id === moduleId ? { ...m, [key]: event.target.value } : m) })
    }

    function renderModuleView(moduleItem, index) {
        switch (moduleItem.type) {
            case 'title':
                return (
                    <div className='prod-module'
                        key={index}
                        id={moduleItem.id}
                        style={{ fontSize: `${moduleItem.size}px`, marginBottom: `${moduleItem.spacing}px`, textAlign: 'center' }}>
                        {moduleItem.content}
                    </div>
                );
        }
    }

    function renderModuleEdit(moduleItem, index) {
        switch (moduleItem.type) {
            case 'title':
                return (
                    <div className='prod-module selected-module'
                        key={index}
                        id={moduleItem.id}
                        style={{ fontSize: `${moduleItem.size}px`, marginBottom: `${moduleItem.spacing}px`, textAlign: 'center' }}
                        onClick={(e) => selectModule(moduleItem, e)}>
                        <div className='prod-edit-tab'>
                            <span>{moduleItem.id}</span>
                            <a>✓</a>
                            <a>↩</a>
                        </div>
                        <input
                            type="text"
                            value={moduleItem.content}
                            onChange={(event) => handleChangeModule(event, moduleItem.id, "content")}
                            placeholder="Input text here*" />
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

            {testProd.module.map((m, idx) => renderModuleEdit(m, idx))}

        </div>
    );
}

export default testView;