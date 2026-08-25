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
            case 'Container Box':
                return containerBox();
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
                {textSizeBox()}
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
                {textSizeBox()}
            </>
        )
    }
    function inputNumber() {
        return (
            <>
                {inputID()}
                {fontBoldBTN()}
                {textAlignBTN()}
                {textSizeBox()}
            </>
        )
    }
    function containerBox() {
        return (
            <>
                {inputID()}
            </>
        )
    }

    // Base Functions
    function inputID() {
        return (
            <label className='PET-checkbox PET-checkbox-id'>
            <input type="checkbox" className='elem-hide' checked={moduleItem.isRequired} onChange={() => handleChangeModule(!moduleItem.isRequired, moduleItem.id, "isRequired", moduleItem.group)} />
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
                <input type="checkbox" className='elem-hide' checked={moduleItem.bold} onChange={() => handleChangeModule(!moduleItem.bold, moduleItem.id, "bold", moduleItem.group)} />
                <p>B</p>
            </label>
        )
    }
    function textAlignBTN() {
        return (
            <select
                className='PET-dropdown use-icon'
                value={moduleItem.textAlign}
                onChange={(event) => handleChangeModule(event.target.value, moduleItem.id, "textAlign", moduleItem.group)}>
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
                    onChange={(event) => handleNumberChange(event.target.value, moduleItem.id, "size", 0, 50, moduleItem.group)} />
            </div>
        )
    }
    function marginBottomBox() {
        return (
            <div className='PETF-textBox'>
                <p>S</p>
                <input type='number' maxLength="2"
                    value={moduleItem.spacing}
                    onChange={(event) => handleNumberChange(event.target.value, moduleItem.id, "spacing", 0, 250, moduleItem.group)} />
            </div>
        )
    }

    // Unique Functions
    function mockbox() {
        return (
            <label className='PET-checkbox PET-checkbox-box'>
                <input type="checkbox" className='elem-hide' checked={moduleItem.textbox} onChange={() => handleChangeModule(!moduleItem.textbox, moduleItem.id, "textbox", moduleItem.group)} />
                <p>◻</p>
            </label>
        )
    }

    return (
        <div className='productEdit-tab' style={{ fontSize: `${moduleItem.size}px` }}>
            <div className='PET-functions'>
                {uniqueFunction(moduleItem.type)}
                {marginBottomBox()}
            </div>

            <div className='PET-buttons'>
                <button onClick={() => DeleteModule(moduleItem.id, moduleItem.group)}>X</button>
                <button onClick={() => setIsEditing(moduleItem.id, moduleItem.group, "minimize")}>-</button>
            </div>
        </div>
    );
}

export default renderEditTab;