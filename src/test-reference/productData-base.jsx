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
                size: 18,
                spacing: 7,
                content: "Fill in your commission details!",
            },
            {
                id: "inm-txt02",
                type: "text-input",
                size: 13,
                spacing: 5,
                isRequired: true,
                content: "Commission Title"
            },
            {
                id: "inm-txt03",
                type: "txtblock-input",
                size: 13,
                spacing: 5,
                isRequired: false,
                content: "Details"
            },
        ],
    });
    const [isEditing, setIsEditing] = useState(-1);

    function handleChange(event, key) {
        setprod({ ...testProd, [key]: event.target.value })
    }
    function handleChangeModule(event, moduleId, key) {
        let nValue = event.target.value;
        if( key === "size" || key === "spacing") {
            nValue = Number(nValue);
        }
        else if (event.target.value === "true") {
            nValue = true;
        }
        else if (event.target.value === "false") {
            nValue = false;
        }

        setprod({ ...testProd, module: testProd.module.map(m => m.id === moduleId ? { ...m, [key]: nValue } : m) })
        console.log(`Module: ${moduleId}\nTarget: ${key}\nNew Value: ${nValue}`);
        console.log(testProd.module[1])
    }
    function handleNumberChange(event, moduleId, key, min, max) {
        if (event.target.value < min) return;
        if (event.target.value > max) return;
        if (event.target.value.includes('.')) return;
        handleChangeModule(event, moduleId, key);
    }
    function selectModule(index) {
        setIsEditing(index);
        console.log("Selected module index:", index);
    }
    function renderModule(moduleItem, index) {
        if (isEditing === index) {
            return renderModuleEdit(moduleItem, index);
        }
        return renderModuleView(moduleItem, index);
    }

    function editTab(moduleItem, index) {
        return (
            <div className='prod-edit-tab'>
                <span>{moduleItem.id}</span>
                {moduleItem.type.includes("input") && 
                    <select value={moduleItem.isRequired} onChange={(event) => handleChangeModule(event, moduleItem.id, "isRequired")}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                }
                <p>Tt</p><input type='number' value={moduleItem.size} onChange={(event) => handleNumberChange(event, moduleItem.id, "size", 0, 25)} maxLength="2" />
                |
                <p>↧↧</p><input type='number' value={moduleItem.spacing} onChange={(event) => handleNumberChange(event, moduleItem.id, "spacing", 0, 99)} maxLength="2" />
                |
                <a onClick={() => selectModule(-1)}>↩</a>
            </div>
        );
    }
    function renderModuleView(moduleItem, index) {
        switch (moduleItem.type) {
            case 'title':
                return (
                    <div className='prod-module prod-hover'
                        key={index}
                        id={moduleItem.id}
                        style={{ fontSize: `${moduleItem.size}px`, marginBottom: `${moduleItem.spacing}px`, textAlign: 'center' }}
                        onClick={() => selectModule(index)}>
                        {moduleItem.content}
                    </div>
                );
            case 'text-input':
                return (
                    <div className='prod-module prod-hover'
                        key={index}
                        id={moduleItem.id}
                        style={{ fontSize: `${moduleItem.size}px`, marginBottom: `${moduleItem.spacing}px` }}
                        onClick={() => selectModule(index)}>
                        {moduleItem.content}
                        {moduleItem.isRequired && <i className='prod-required' style={{ fontSize: `${moduleItem.size}px` }}>*</i>}
                        <p className='mock-textbox' style={{ height: '17px' }} />
                    </div>
                );
            case 'txtblock-input':
                return (
                    <div className='prod-module prod-hover'
                        key={index}
                        id={moduleItem.id}
                        style={{ fontSize: `${moduleItem.size}px`, marginBottom: `${moduleItem.spacing}px` }}
                        onClick={() => selectModule(index)}>
                        {moduleItem.content}
                        {moduleItem.isRequired && <i className='prod-required'>*</i>}
                        <p className='mock-textbox' style={{ height: '45px' }} />
                    </div>
                );
        }
    }
    function renderModuleEdit(moduleItem, index) {
        switch (moduleItem.type) {
            case 'title':
                return (
                    <div className='prod-module selected-module prod-hover'
                        key={index}
                        id={moduleItem.id}
                        style={{ marginBottom: `${moduleItem.spacing}px` }}>
                        {editTab(moduleItem, index)}
                        <input
                            type="text"
                            value={moduleItem.content}
                            style={{ fontSize: `${moduleItem.size}px`, textAlign: 'center' }}
                            onChange={(event) => handleChangeModule(event, moduleItem.id, "content")}
                            placeholder="Input text here*" />
                    </div>
                );
            case 'text-input':
                return (
                    <div className='prod-module selected-module prod-hover'
                        key={index}
                        id={moduleItem.id}
                        style={{ marginBottom: `${moduleItem.spacing}px` }}>
                        {editTab(moduleItem, index)}
                        <input
                            type="text"
                            value={moduleItem.content}
                            style={{ fontSize: `${moduleItem.size}px` }}
                            onChange={(event) => handleChangeModule(event, moduleItem.id, "content")}
                            placeholder="Input text here*" />
                        <p className='mock-textbox' style={{ height: '17px' }}/>
                    </div>
                );
            case 'txtblock-input':
                return (
                    <div className='prod-module selected-module prod-hover'
                        key={index}
                        id={moduleItem.id}
                        style={{ marginBottom: `${moduleItem.spacing}px` }}>
                        {editTab(moduleItem, index)}
                        <input
                            type="text"
                            value={moduleItem.content}
                            style={{ fontSize: `${moduleItem.size}px` }}
                            onChange={(event) => handleChangeModule(event, moduleItem.id, "content")}
                            placeholder="Input text here*" />
                        <p className='mock-textbox' style={{ height: '45px' }} />
                    </div>
                );
        }
    }

    return (
        <div className='comp-prod'>
            <br />
            <input className="prod-text prod-title prod-hover"
                type="text"
                value={testProd.name}
                onChange={(event) => handleChange(event, "name")}
                placeholder="Product Name*" />
            <textarea className="prod-text prod-hover"
                value={testProd.description}
                onChange={(event) => handleChange(event, "description")}
                placeholder="Product Description*" />
            <p className='prod-divider' />

            {testProd.module.map((m, idx) => renderModule(m, idx))}

        </div>
    );
}

export default testView;