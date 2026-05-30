/* Stylesheets */
import './styles/renderEditTab.css'

import { ALargeSmall } from 'lucide-react';

function renderEditTab(moduleItem, index, setIsEditing, handleChangeModule, handleNumberChange, DeleteModule) {
    function uniqueFunction(type) {
        switch (type) {
            case 'Text Input':
                return inputText();
            default:
                return null;
        }
    }

    function inputText() {
        return (
            <label className='clickable prod-edit-tab-icon-b'>
                <input type="checkbox" className='prod-hover' checked={moduleItem.textbox} onChange={() => handleChangeModule(!moduleItem.textbox, moduleItem.id, "textbox")} />
                ◻
            </label>
        )
    }

    return (
        <div className='prod-edit-tab' style={{ fontSize: `${moduleItem.size}px` }}>
            <div className='prod-edit-tab-elements'>

                {
                    moduleItem.id.includes("in")
                        ?
                        <label className='clickable prod-edit-tab-icon-id'>
                            <input type="checkbox" className='prod-hover' checked={moduleItem.isRequired} onChange={() => handleChangeModule(!moduleItem.isRequired, moduleItem.id, "isRequired")} />
                            {moduleItem.id}
                        </label>
                        :
                        <label className='prod-edit-tab-noborder prod-edit-tab-icon-id'>{moduleItem.id}</label>
                }

                { uniqueFunction(moduleItem.type) }

                {
                    moduleItem.id.includes("txt")
                        ?
                        <label className='clickable prod-edit-tab-icon-b'>
                            <input type="checkbox" className='prod-hover' checked={moduleItem.bold} onChange={() => handleChangeModule(!moduleItem.bold, moduleItem.id, "bold")} />
                            B
                        </label>
                        :
                        null
                }
                {
                    moduleItem.id.includes("txt")
                        ?
                        <select
                            className='prod-edit-tab-icon-a txt-base use-icon'
                            value={moduleItem.textAlign}
                            onChange={(event) => handleChangeModule(event.target.value, moduleItem.id, "textAlign")}>
                            <option className='txt-base use-icon' value="left">L</option>
                            <option className='txt-base use-icon' value="center">C</option>
                            <option className='txt-base use-icon' value="right">R</option>
                            <option className='txt-base use-icon' value="justify">J</option>
                        </select>
                        :
                        null
                }
                <ALargeSmall />
                <input type='number' maxLength="2"
                    value={moduleItem.size}
                    onChange={(event) => handleNumberChange(event.target.value, moduleItem.id, "size", 0, 50)} />

                <p className='txt-base'>↧↧</p>
                <input type='number' maxLength="2"
                    value={moduleItem.spacing}
                    onChange={(event) => handleNumberChange(event.target.value, moduleItem.id, "spacing", 0, 250)} />
            </div>

            <div className='prod-edit-tab-buttons'>
                <button className='txt-base use-icon' onClick={() => DeleteModule(moduleItem.id, moduleItem.type)}>X</button>
                <button className='txt-base use-icon' onClick={() => setIsEditing(-1)}>-</button>
            </div>
        </div>
    );
}

export default renderEditTab;