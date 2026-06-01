/* Stylesheets */
import './styles/renderEditTab.css'

import { ALargeSmall } from 'lucide-react';

function renderEditTab(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange, DeleteModule) {
    function uniqueFunction(type) {
        switch (type) {
            case 'Static Text':
                return staticText();
            case 'Text Input':
                return inputText();
            case 'Number Input':
                return inputNumber();
            default:
                return null;
        }
    }

    // type
    function staticText() {
        return (
            <>
                {staticID()}
                {fontBoldBTN()}
                {textAlignBTN()}
            </>
        )
    }
    function inputText() {
        return (
            <>
                {inputID()}
                {mockbox()}
                {fontBoldBTN()}
                {textAlignBTN()}
            </>
        )
    }
    function inputNumber() {
        return (
            <>
                {inputID()}
                {fontBoldBTN()}
                {textAlignBTN()}
            </>
        )
    }

    // Base Functions
    function inputID() {
        return (
            <label className='PET-checkbox PET-checkbox-id'>
            <input type="checkbox" className='elem-hide' checked={moduleItem.isRequired} onChange={() => handleChangeModule(!moduleItem.isRequired, moduleItem.id, "isRequired")} />
            <p>{moduleItem.id}</p>
        </label>
        );
    }
    function staticID() {
        return(
            <label className='PET-checkbox PET-checkbox-static'>
                <p>{moduleItem.id}</p>
            </label>
        );
    }
    function fontBoldBTN() {
        return (
            <label className='PET-checkbox PET-checkbox-box'>
                <input type="checkbox" className='elem-hide' checked={moduleItem.bold} onChange={() => handleChangeModule(!moduleItem.bold, moduleItem.id, "bold")} />
                <p>B</p>
            </label>
        )
    }
    function textAlignBTN() {
        return (
            <select
                className='PET-dropdown use-icon'
                value={moduleItem.textAlign}
                onChange={(event) => handleChangeModule(event.target.value, moduleItem.id, "textAlign")}>
                <option className='use-icon' value="left">L</option>
                <option className='use-icon' value="center">C</option>
                <option className='use-icon' value="right">R</option>
                <option className='use-icon' value="justify">J</option>
            </select>
        )
    }
    function textSizeBox() {
        return (
            <div className='PETF-textBox'>
                <p>A</p>
                <input type='number' maxLength="2"
                    value={moduleItem.size}
                    onChange={(event) => handleNumberChange(event.target.value, moduleItem.id, "size", 0, 50)} />
            </div>
        )
    }
    function marginBottomBox() {
        return (
            <div className='PETF-textBox'>
                <p>S</p>
                <input type='number' maxLength="2"
                    value={moduleItem.spacing}
                    onChange={(event) => handleNumberChange(event.target.value, moduleItem.id, "spacing", 0, 250)} />
            </div>
        )
    }

    //Unique Functions
    function mockbox() {
        return (
            <label className='PET-checkbox PET-checkbox-box'>
                <input type="checkbox" className='elem-hide' checked={moduleItem.textbox} onChange={() => handleChangeModule(!moduleItem.textbox, moduleItem.id, "textbox")} />
                <p>◻</p>
            </label>
        )
    }

    return (
        <div className='productEdit-tab' style={{ fontSize: `${moduleItem.size}px` }}>
            <div className='PET-functions'>
                {uniqueFunction(moduleItem.type)}
                {textSizeBox()}
                {marginBottomBox()}
            </div>

            <div className='PET-buttons'>
                <button onClick={() => DeleteModule(moduleItem.id, moduleItem.type)}>X</button>
                <button onClick={() => setIsEditing(-1)}>-</button>
            </div>
        </div>
    );
}

export default renderEditTab;